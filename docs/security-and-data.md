# Security and data handling

## Data classification

| Classification | Examples | Repository rule |
| --- | --- | --- |
| Public | Published policy, sanitized plans | May be committed |
| Internal | Team roles, non-sensitive operating metadata | May be committed after review |
| Restricted | Mail content, attachments, personal data, credentials | Never commit |

## Integration controls

- Store Outlook and n8n credentials only in the designated secret manager or n8n credential store.
- Limit payloads to identifiers, timestamps, sender domain, categories, and sanitized routing fields.
- Require an idempotency key for every automation-triggered work item.
- Log workflow outcomes without message bodies or attachment content.
- Route authentication failures, validation failures, and retry exhaustion to the owning team defined in its team markdown.

## Incident response

Disable the affected workflow, preserve minimal diagnostics, notify the responsible people defined by the owning team, and record the response when the team has established that process. Rotate exposed credentials outside this repository.
