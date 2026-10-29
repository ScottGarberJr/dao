# Morning standup

- Owner: Gu / Assistant
- Status: draft — scheduled workflow
- Cadence: daily, 4:30 AM Eastern Time

## Purpose

Create a concise morning standup for Scott, save the complete report to the approved Obsidian standup folder, and deliver the same report to the configured Gu Discord channel.

## Required order

1. Energetic greeting in a randomly selected language, followed by a rough English translation in parentheses.
2. Weather for the user's current or approved default location. Mention the morning and afternoon outlook and use Fahrenheit.
3. Unique calendar events today. Exclude routine events listed in the template's pass list. Always flag an event that appears to have been created or placed on the calendar by someone else.
4. Reminders for today, tomorrow, and the next day. Include all-day events and TODO events; if a TODO is represented by an all-day event, read its description for the task.
5. Email review in this order:
   - Personal Gmail first. Highlight important messages, especially anything involving Benjamin or Enson.
   - SG Solutions Outlook. Show new messages except `noreply-dmarc-support` unless an excluded message is clearly important.
   - `scott.a.garber@outlook`. Show new messages that appear person-to-person or important.
   - For each inbox, show the most recent 2–3 relevant messages unless a message is important enough to include regardless of recency.
6. Close with `That's all,` followed by a salutation in the opening language conveying “Have a good day!”

## Source and write boundaries

- Use only the approved read-only Gmail, Outlook, calendar, weather, and Discord capabilities available to the scheduled Gu profile.
- Do not send, reply, archive, delete, label, move, invite, or modify email/calendar records.
- Save the report only under the approved Obsidian path `Documents/Vaults/AGENTS/gu/standups/` using the date title convention `M.DD.YYYY - Weekday.md`.
- Read the saved note back before reporting success.
- The Discord delivery is schedule-authorized and must contain the report text. Do not send to another channel.
- Hermes native cron delivery supports `text_to_speech`: the tool returns a `MEDIA:` path that Discord can deliver as an audio attachment. The current job does not request or send audio yet; enable it only after the cron prompt is updated and a test delivery is verified.
- Do not commit mailbox contents, calendar details, weather responses, or standup reports to Git.

## Weather handling

Use the user's current location when available; otherwise use the approved default location supplied at runtime. Query a reliable current-weather source, state the location used, and report Fahrenheit. If the weather lookup fails, say so plainly rather than guessing.

## Calendar VIP and pass lists

Maintain these lists in the scheduled job's prompt or approved configuration, not in Git when they contain personal details.

### Calendar pass list

Routine events currently excluded from the unique-event section:

- Wake & Train
- Kids to School
- Kids prep for wrestling
- Dishes & kitchen

### Calendar VIP list

Reserved for events that must always be highlighted even if they might otherwise look routine. Add names, organizers, or subjects only with the user's approval.

### Inbox VIP list

Reserved for senders, subjects, people, or keywords that should always be surfaced. Benjamin and Enson are initial VIP subjects/keywords.

### Inbox pass list

Reserved for known low-value automated mail. `noreply-dmarc-support` is currently passed for SG Solutions unless the message is clearly important. Extend this list only with the user's approval.

## Quality checks

- Use the actual date and weekday at runtime.
- Keep the report concise but do not omit VIP or important items.
- Distinguish observed facts from interpretation.
- Preserve names, times, subjects, and URLs exactly as returned by providers.
- If an inbox or calendar source fails, identify the source and continue with the available sources.
- Never claim an Obsidian save or Discord delivery unless the target action succeeded and the saved note was read back.
