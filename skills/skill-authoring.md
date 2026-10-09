# Skill authoring

- Status: draft — pending user review
- Owner: DAO Head

A skill is a portable, bounded SOP. It explains when an agent should use a capability, how to perform it safely, and what evidence or handoff it must return. It is not an installation record, an external integration, or a replacement for project requirements.

## File shape

Use one Markdown file for a small skill. Create a directory with `SKILL.md` and supporting scripts or references only when the skill needs them.

Start with concise metadata:

```yaml
---
name: example-name
description: Use when a task needs ...
---
```

The description is the trigger. Write it so an agent can recognize the task without reading the full document.

## Required sections

Use the sections that apply:

- **Purpose** — the job this skill helps complete.
- **Use when** — concrete triggers and examples.
- **Inputs** — documents, permissions, tools, and state required.
- **Procedure** — ordered, actionable steps.
- **Outputs** — the handoff, files, or evidence produced.
- **Boundaries** — what the skill must not do.
- **Verification** — how to tell whether it worked.
- **Escalation** — when to stop and ask for a decision.

## Writing rules

- Keep the procedure short enough to execute in one focused task.
- Use commands and examples only when they match the supported environment.
- State the owner and permission boundary for external actions.
- Separate required steps from optional tools.
- Define a stopping condition.
- Prefer explicit inputs and structured outputs over hidden state.
- Record limitations, privacy concerns, licensing, cost, and rollback when relevant.
- Link named external tools to their official documentation or upstream source.
- Do not claim that a candidate tool is installed, connected, approved, or safe merely because it is listed.
- Keep generated runtime state and secrets outside Git.

## Review checklist

- [ ] The name and trigger description are specific.
- [ ] A worker can identify the required inputs and allowed files.
- [ ] The steps have a clear order and stopping condition.
- [ ] Permissions, privacy, destructive actions, and external side effects are explicit.
- [ ] Verification and caveat reporting are defined.
- [ ] Official links are included for named external tools.
- [ ] The skill does not duplicate project requirements or silently authorize implementation.

## Relationship to other DAO documents

- `project/docs/` defines current project truth.
- `project/plans/` defines approved planned work.
- `teams/` defines ownership and role behavior.
- `skills/` defines portable procedures and capability guidance.
- `project/sessions/` records material decisions and handoffs.

Read the relevant project and team documents before applying a skill. Update the owning document when a decision changes the workflow.

## Reference

The format is compatible with the general agent-skill pattern described in the [Claude Code skills documentation](https://code.claude.com/docs/en/skills). The DAO remains harness-independent, so do not assume that a skill is installed in Claude Code, Pi, or another runtime.
