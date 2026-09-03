# Tools registry

This directory is the DAO registry for future tools, actors, MCPs, APIs, and upstream repositories. It stores durable awareness and adoption decisions—not cloned source code, credentials, implementation exports, or live service data.

`catalog.md` records candidates and references. An entry is not an installation, approval, connection, or permission grant. Create a dedicated tool or actor definition only when its use case, interface, implementation location, permissions, limitations, safety considerations, and owning team are understood.

n8n may implement approved tools or actors through MCP, but it is not the DAO orchestrator. Do not create an n8n implementation folder until a defined tool or actor requires one.

## Upstream handling

- **Watch/reference:** link to the upstream in `catalog.md`; optionally star it on GitHub outside this repository.
- **Evaluate:** test in an isolated environment after the owning team defines the use case and permissions.
- **Fork:** do so only when maintaining changes, contributing upstream, or pinning an internal branch is an explicit need.
- **Adopt:** document the integration and safety boundary before enabling it.
