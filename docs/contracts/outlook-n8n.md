# Outlook → n8n contract

The machine-readable V1 contract is [`contracts/outlook-n8n.contract.yaml`](../../contracts/outlook-n8n.contract.yaml). It defines the intake envelope for Outlook message events and the normalized routing result emitted by n8n.

## V1 guarantees

- Only contract version `1.0` is accepted.
- `event_id` is the idempotency key; repeated delivery must not create duplicate work.
- Message body, recipient addresses, attachments, and credentials are out of contract and must not be persisted here.
- Invalid payloads and unsupported event types must be surfaced for handling under the owning team's future specification.
- A `requires_human_review` outcome never dispatches an external action.

## Ownership

The owning team is defined in its team markdown; that file also defines permissions for workflow configuration and response. No workflow is enabled until its owning team and approval requirements are jointly defined. Update the contract and add a decision record for breaking changes.
