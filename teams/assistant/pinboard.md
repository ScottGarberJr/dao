# Assistant pinboard and topic-note SOP

- Status: V1 operating rule

## Purpose

Give each assistant agent a small, durable list of topics to revisit without turning the pinboard into a knowledge dump.

## Capture flow

1. Read the agent's `pinboard.md` before adding or selecting work.
2. When a new topic is added, create its Markdown topic note directly in that agent's folder, not under `topics/`.
3. Add an unchecked wikilink to that floating note in `pinboard.md`.
4. If several topics arrive together, begin with the first and create/link unchecked notes for the remaining topics.
5. When the user revisits a named topic, reopen its existing note instead of creating a duplicate.

## Completion and organization

The conversational agent marks a completed item checked but does not organize or remove it immediately. The scheduled Stu organizer later reviews checked items, links or moves them into the appropriate map under `topics/`, uses `topics/misc.md` when no grouping exists, and removes the checked pinboard item.

## Note content

Topic notes should capture concise discussion points, concerns, decisions, actions, milestones, and context-compaction handoffs. Add safe properties such as `type`, `agent`, `status`, `topics`, `created`, and `updated`. Keep credentials, mailbox bodies, attachments, and private exports out of the DAO repository.
