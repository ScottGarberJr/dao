# Buzz VPS browser and mobile connection setup

- Status: prepared runbook — **not applied to the VPS**.
- Scope: the DAO-side setup and verification contract for a Buzz relay used by
  the Desktop browser flow and the Buzz Mobile QR pairing flow.

## Finding from the current endpoint

Read-only checks against the current relay alias (`https://work.scottg.cloud`) on 2026-10-09 found the following; the migration target in this runbook is now `https://studio.scottg.cloud`:

- `GET /` returns a healthy Buzz NIP-11 document and advertises NIP-43 (`43`).
- The document does not contain `pairing_relay_url`.
- An HTTP/1.1 WebSocket upgrade to `/` returns `101 Switching Protocols` and
  an `AUTH` challenge.
- An HTTP/1.1 WebSocket upgrade to `/pair` returns `404 Not Found`.
- `/_liveness` and `/_readiness` return `200`.

This matches the mobile screenshot: the current Desktop pairing discovery sees
NIP-43, falls back to the legacy `/pair` endpoint, and receives a 404. It is a
missing pairing-relay route, not a browser certificate or main-relay WebSocket
failure.

The relevant upstream implementation and deployment references are:

- [Buzz](https://github.com/block/buzz)
- [NIP-11](https://github.com/nostr-protocol/nips/blob/master/11.md)
- [Coolify Docker Compose](https://coolify.io/docs/knowledge-base/docker/compose)
- [Coolify domains](https://coolify.io/docs/knowledge-base/domains)
- [Caddy reverse_proxy](https://caddyserver.com/docs/caddyfile/directives/reverse_proxy)

## Domain migration target

Use these public names for the cutover:

- Main relay: `studio.scottg.cloud` → VPS `168.231.73.177`.
- Pairing relay: `pair.studio.scottg.cloud` → the same VPS, routed internally to the pairing sidecar.

Keep `work.scottg.cloud` serving the main relay during the migration window if Coolify permits both domains. Do not delete the old DNS record until Desktop and Mobile have been updated and a new QR has been verified. The main relay's advertised/public URL and Desktop connection should move to `wss://studio.scottg.cloud`; the pairing advertisement should be `wss://pair.studio.scottg.cloud`.

## Safe target topology

Use a dedicated public hostname for the stateless pairing relay, for example
`pair.studio.scottg.cloud`:

```text
Desktop/Mobile -- wss://pair.studio.scottg.cloud --> TLS proxy --> buzz-pair-relay:5000
Desktop/Mobile -- wss://studio.scottg.cloud       --> TLS proxy --> buzz-relay:3000
```

The pairing relay does not need Postgres, Redis, object storage, the main relay
private key, or any DAO/Buzz agent credential. Do not copy those secrets into
the pairing service. Keep only the TLS proxy's public 443 listener exposed.

### Prepared Compose service (do not run from this repository)

Add the following service to the **live Buzz deployment's** Compose project,
using the same pinned Buzz image as the main relay:

```yaml
services:
  buzz-pairing:
    image: ${BUZZ_IMAGE:?set BUZZ_IMAGE}
    command: ["/usr/local/bin/buzz-pair-relay"]
    environment:
      BUZZ_PAIR_RELAY_BIND_ADDR: 0.0.0.0:5000
    expose:
      - "5000"
    restart: unless-stopped
```

Set this non-secret environment variable on the main relay, then redeploy the
main relay and pairing service together:

```dotenv
BUZZ_PAIRING_RELAY_URL=wss://pair.studio.scottg.cloud
```

Create the `pair.studio.scottg.cloud` DNS record to the same VPS as
`studio.scottg.cloud`, and attach that hostname to the pairing service's internal
port `5000` in Coolify. Coolify's generated proxy should preserve WebSocket
upgrades. If the deployment uses a hand-maintained Caddyfile instead, the
routing shape is:

```caddyfile
pair.studio.scottg.cloud {
    encode zstd gzip
    reverse_proxy buzz-pairing:5000
}
```

Replace `buzz-pairing` with the actual service name on the shared proxy network;
do not expose port 5000 directly to the Internet. Do not apply both a Coolify
generated route and an unrelated manually edited proxy route without checking
which proxy owns the hostname.

If a new DNS name is undesirable and the active proxy supports same-host path
routing, the lower-change alternative is to route `/pair` to the sidecar and
leave all other paths on the main relay:

```caddyfile
{$BUZZ_DOMAIN} {
    encode zstd gzip

    handle /pair* {
        reverse_proxy buzz-pairing:5000
    }

    handle {
        reverse_proxy relay:3000
    }
}
```

For that alternative, advertise `wss://studio.scottg.cloud/pair` explicitly in
`BUZZ_PAIRING_RELAY_URL` and verify the proxy's path handling before exposing a
new QR. A dedicated hostname remains preferable when Coolify owns routing,
because it gives the pairing service an isolated route and makes an accidental
main-relay fallback easier to detect.

## Staged operator validation

These commands are intentionally supplied for the VPS operator; they were not
run against a deployment manager and no live change was made:

```bash
# Existing relay: health and current pairing advertisement.
curl --fail --silent --show-error \\
  -H 'Accept: application/nostr+json' \\
  https://studio.scottg.cloud/ | jq '{supported_nips, pairing_relay_url}'
curl --fail --silent --show-error https://studio.scottg.cloud/_liveness
curl --fail --silent --show-error https://studio.scottg.cloud/_readiness

# After the pairing service and main-relay env change are live.
curl --fail --silent --show-error \\
  -H 'Accept: application/nostr+json' \\
  https://studio.scottg.cloud/ | jq -e '.pairing_relay_url == "wss://pair.studio.scottg.cloud"'

# Use a WebSocket-capable probe, not curl, to verify the public pairing host.
websocat -v wss://pair.studio.scottg.cloud/
```

The final probe should complete an HTTP `101 Switching Protocols` handshake and
remain connected until interrupted. Do not send pairing events during an
infrastructure smoke check. If `websocat` is not already approved and
installed, use the existing deployment platform's WebSocket health check rather
than installing software on the VPS as an unplanned side effect.

After the advertisement check succeeds, create a **new** QR session. A QR
created before the advertisement change can still contain the old `/pair` or
main-relay URL and must not be reused.

## Desktop user steps after the live change

1. Update Buzz Desktop to a build containing dedicated pairing-relay discovery,
   then fully quit and reopen it.
2. In Desktop, connect/select the relay as `wss://studio.scottg.cloud` (the
   normal relay URL, not the pairing hostname).
3. Open the Desktop mobile/device pairing action and start a **new** pairing
   session. Wait for the QR to finish loading before scanning it.
4. On the phone, open Buzz Mobile's pairing screen and scan the new QR.
5. Confirm that the short verification/SAS code shown on Desktop and Mobile is
   identical. Approve it on both devices.
6. Leave the app open until Mobile reports success, then sign in through the
   paired community. The QR transport uses the dedicated pairing host; the
   payload then returns Mobile to the normal `studio.scottg.cloud` relay.

If Mobile still reports `HTTP error: 404 Not Found`, inspect the QR payload's
relay value and the Desktop-probed NIP-11 document. A `/pair` value means the
Desktop build is old or the main relay is still serving stale configuration; a
`wss://pair.studio.scottg.cloud` value means the public DNS/proxy route or
pairing service is still unavailable.

## Boundaries and rollback

- No deployment, DNS edit, account creation, credential change, Buzz-core
  change, or live automation is authorized by this runbook.
- The sidecar is stateless and should be deployed with the same pinned image
  version as the main relay. Upgrade both together.
- Before applying, record the current main-relay image digest, environment
  snapshot (excluding secret values), DNS record, and proxy route for rollback.
- If the pairing service cannot be made healthy, stop before changing the main
  relay advertisement. Do not point `BUZZ_PAIRING_RELAY_URL` at an unverified
  host.
- After a successful cutover, rollback requires removing the advertisement and
  pairing route together; doing only one leaves clients with stale pairing
  instructions. Existing QR sessions should be allowed to expire before
  teardown.
