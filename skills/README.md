# DAO skills

This directory contains portable Markdown skills: context, standard operating procedures, capability boundaries, and adoption decisions an agent can use to do specific work. It is not a directory of executable tools or installed harness extensions.

`catalog.md` records candidates and references. An entry is not an installation, approval, connection, or permission grant. Every external candidate must link directly to its official documentation or upstream source. Create a dedicated skill when its use case, workflow, permissions, limitations, safety considerations, and owning team are understood.

n8n or an MCP may implement an approved capability, but neither is the DAO orchestrator. Do not create an implementation folder until a defined capability requires one.

## Upstream handling

- **Watch/reference:** link to the upstream in `catalog.md`; optionally star it on GitHub outside this repository.
- **Evaluate:** test in an isolated environment after the owning team defines the use case and permissions.
- **Fork:** do so only when maintaining changes, contributing upstream, or pinning an internal branch is an explicit need.
- **Adopt:** document the skill and safety boundary before enabling an integration.
