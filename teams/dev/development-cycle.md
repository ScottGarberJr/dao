# DevTeam development cycle

- Team: DevTeam
- Status: draft — pending user review
- Owner: Project Lead

Use this cycle for approved feature and fix work. Keep the work small enough that one Lead can understand the plan, the evidence, and the final diff.

## Lifecycle

`intake -> classify as pipeline or job -> clarify and prepare -> ready -> implementation -> testing -> Lead review -> final review -> commit/push -> PR or later merge -> close`

The Project Lead owns the project loop. Head coordinates across projects. The user remains the authority for material scope, commit, merge, and deployment decisions.

## Pipeline or job

A **pipeline** is the factory path for continuing a project from a version plan or for coordinating multiple planned features. It moves through project discovery, requirements/design/architecture, team review, planning, implementation, testing, Lead review, and release in a deliberate sequence. The Lead starts the pipeline when the user gives a broad direction such as "continue work on BabelCards."

A **job** is a bounded feature, fix, documentation change, or ad hoc request. It uses the existing project documents and makes only the minor planning adjustments needed to describe the work. It gets its own branch or worktree, basic tests first when applicable, Lead review after testing, a commit, and a push. A job does not need the full planning ceremony unless its scope grows.

When the user has not specified the mode, the Lead should ask whether to start a pipeline or treat the request as a job. The Lead may recommend a mode, but should not silently turn an ad hoc request into a broad pipeline.

Both paths can produce multiple sequential jobs. A pipeline is the coordination model, not permission to bundle unrelated changes into one branch.

## 1. Intake

The Lead records the request, identifies the project repository, and checks the current project documents and session history.

**Output:** a short task brief with the goal, affected area, requested outcome, and known constraints.

If the request is unclear or conflicts with current project truth, stop and ask for clarification.

## 2. Clarification

Confirm the problem, intended users, scope, non-goals, acceptance criteria, and approval boundaries. Identify whether the task affects requirements, design, architecture, implementation, testing, or deployment.

**Output:** an agreed task boundary and a decision owner for open questions.

Do not start a build branch while a material requirement or architecture question is unresolved.

## 3. Design and planning

For a pipeline, update or create the project requirements, design, and architecture documents, use team review to reconcile conflicts, and create or update a version or patch plan with numbered tasks and acceptance criteria.

For a job, read the current project documents and make only the minor adjustments needed to record the task, acceptance criteria, or relevant design decision. A concise task brief is enough when the existing documents already describe the work.

**Output:** an implementation direction, acceptance criteria, and a bounded task. For a pipeline, this is a reviewed plan. For a job, it may be a brief project-document update.

Planning is not authorization to build. The user gives the go-ahead for a pipeline. The Lead may prepare a job after the request is clear, while escalating material scope or architecture decisions to the user.

## 4. Ready and isolate

Before writing code:

1. Check the repository status and preserve unrelated work.
2. Inspect open pull requests for file overlap when the repository uses shared development.
3. Fetch the current integration branch.
4. Create a unique feature or fix branch and worktree according to the repository's conventions.
5. Confirm the branch, repository, runtime, dependencies, and available test environment.

Never build on the integration branch or reuse another worker's worktree.

**Output:** a verified isolated workspace tied to one task.

## 5. Implementation

The Builder implements only the approved task, following the project's architecture and acceptance criteria. The Builder reports ambiguity instead of silently expanding scope.

The Lead may assign bounded parallel work to separate workers. Each worker gets its own branch or worktree and returns a concise handoff with changed files, checks, evidence, and open questions.

**Output:** a focused diff and a testable revision.

## 6. Lead review

For pipeline work, the Lead may review implementation before testing to catch architectural or scope problems early. For job work, the implementation is tested first and the Lead then reviews the diff and test handoff together.

The Lead reviews the diff against the plan or job brief, acceptance criteria, project architecture, security boundaries, test results, and unrelated-change risk. The Lead may request changes or escalate complex implementation decisions to Senior Dev.

**Output:** a revision ready for final review and commit, or a specific rework request.

## 7. Testing and evidence

Every pipeline and job receives testing before commit. The Tester runs the fastest relevant checks first, then tests acceptance criteria and important failure paths.

Jobs require at least basic verification:

- backend work gets a smoke test or focused API/command check;
- UI work gets a functional test of the affected behavior;
- visual UI changes also get before/after screenshots;
- non-UI work reports the relevant command output, test result, measured value, or response pair.

Pipeline testing can expand to regression, responsive, accessibility, end-to-end, and deployment checks according to risk. A repeatable browser trace, recording, or richer artifact is appropriate for complex interactive flows.

For a bug, capture the failing state before applying the fix when practical. Never claim a check passed when it was not run.

**Output:** test results, evidence links or artifact paths, explicit caveats, and a Lead-ready handoff.

## 8. Final review

The Lead reconciles implementation and test handoffs. Confirm that every acceptance criterion is addressed, evidence is readable, generated state is excluded, and the PR description is accurate.

The user reviews material scope, visible behavior, unresolved risks, and any requested exceptions.

**Output:** a commit-ready change or a clear list of remaining work.

## 9. User approval, commit, push, and PR

Every change gets its own branch or worktree. Documentation changes should be committed and pushed often after a clear, coherent update; code changes should be committed and pushed after testing and Lead review. The Lead does not need to ask before making these routine commits and pushes, though the user can request a pause or a different grouping. A PR may be opened later. The user retains the gate for material scope, merge, and deployment decisions unless a later approved policy delegates it.

A PR is the normal merge path, but it does not need to be opened immediately for every job. The Lead should ask when the user has not specified whether to open a PR now or group the pushed branch for a later merge. Pipeline work will normally use PRs as planned features reach reviewable boundaries.

When a PR is opened, link the plan item or job brief and include the required test and visual evidence. Do not merge or deploy merely because automated checks pass.

## 10. Close

After the approved commit, push, PR, or release outcome, record material decisions, evidence, follow-up work, and unresolved questions in the appropriate project session record. Keep the worktree while the branch remains active. Remove it after the work is merged, closed, or explicitly abandoned using the repository's safe cleanup procedure.

## Handoff format

Every delegated task should state:

- objective;
- repository and allowed files;
- pipeline or job mode;
- relevant documents and decisions;
- constraints and permissions;
- acceptance criteria;
- evidence required;
- stopping condition;
- return path.

A completed handoff should state what changed, what was checked, what evidence exists, what was not checked, and what needs a decision.

## Escalate instead of guessing

Pause and ask the Lead, Head, or user when requirements conflict, the task crosses its allowed files, evidence is unavailable, a destructive action is proposed, or the requested result requires an external permission that has not been granted. Do not pause merely to request permission for a routine documentation commit or push when the work is within scope.
