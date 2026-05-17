# @aldoawp/workflow

**Spec-Driven Development (SDD)** — a structured, phase-based agentic AI development workflow for VS Code / GitHub Copilot. Ships skills, workflows, and doc templates that guide AI agents from product requirements through design, specification, incremental implementation, review, and integration.

## Installation

```bash
npm install @aldoawp/workflow
```

The postinstall script copies two directories into your project root and then removes itself from `package.json`:

| Source (package) | Destination (your repo) | Purpose |
|---|---|---|
| `.agents/` | `.agents/` | Skills & workflow definitions for Copilot |
| `templates/docs/` | `docs/` | Versioned doc scaffolds (PRD, design, specs) |

> After install the package self-uninstalls — only the copied files remain.

## Workflow Overview

The workflow follows six phases. Each phase has dedicated skills that can be invoked directly or composed by the bundled workflows.

### Phase 1 — PRD

Write high-level and module-level Product Requirements Documents.

```
docs/prd/main-v1.md
docs/prd/[module]-v1.md
```

Skill: **prd**

### Phase 2 — Design Docs

Create separate design documents covering architecture, security, conventions, data model, and (for UI apps) sitemap.

```
docs/design/architecture_v1.md
docs/design/security_v1.md
docs/design/conventions_v1.md
docs/design/data-model_v1.md
```

Skills: **software-architect**, **design-system** (UI projects)

### Phase 3 — Specification

Write implementation specs referencing PRD and design docs, then break each spec into discrete tasks.

```
docs/specs/<spec-name>/spec.md
docs/specs/<spec-name>/checklist.md
docs/specs/<spec-name>/tasks/task-[n]-[task-name].md
```

Skills: **spec**, **plan**, **compress**

### Phase 4 — Implementation & Review Loop

Execute one task at a time through an implement → review cycle. Optionally use TDD (red → green → refine).

Skills: **implement**, **tdd**, **review**, **branch**

### Phase 5 — Session Management

After completing a task, close it out: mark the checklist, write a rolling summary, and commit.

```
docs/specs/<spec-name>/summaries/task-[n]-summary.md
```

Skills: **checklist**, **summarize**, **commit**

### Phase 6 — Integration Review

Periodically review completed specs holistically for cross-feature consistency.

Skill: **integration-review** *(planned)*

## The `docs/` Folder

`docs/` is the living knowledge base for your project, seeded by the install and populated as you progress through the workflow:

| Path | Created during | Contents |
|---|---|---|
| `docs/prd/` | Phase 1 | Versioned PRDs (`main-v1.md`, module PRDs) |
| `docs/design/` | Phase 2 | Architecture, security, conventions, data model, UI/UX design system, sitemap |
| `docs/specs/<spec>/spec.md` | Phase 3 | Implementation spec with decisions, invariants, contracts |
| `docs/specs/<spec>/checklist.md` | Phase 3 | Task checklist tracking progress |
| `docs/specs/<spec>/tasks/` | Phase 3 | Individual task files with acceptance criteria |
| `docs/specs/<spec>/summaries/` | Phase 5 | Rolling session summaries carrying context between AI sessions |

All documents follow a `_vN.md` versioning convention — never overwrite, always increment.

## Skills

20 skills ship in `.agents/skills/`. Each is a standalone `SKILL.md` that Copilot loads on demand.

| Skill | Purpose |
|---|---|
| **brainstorm** | Critical thinking partner — challenge assumptions, refine ideas |
| **branch** | Create or switch to a traceable Git branch for a task |
| **checklist** | Mark a task complete on a spec checklist |
| **commit** | Stage changes and create a conventional commit |
| **compress** | Shrink agent-facing instructions without changing behavior |
| **design-system** | Generate a token-level UI design system (`docs/design/uiux-design.md`) |
| **enhance-note** | Clean up a messy note into a structured working document |
| **implement** | Execute one scoped change: understand → plan → implement → test → verify |
| **integration-review** | *(planned)* Holistic cross-feature consistency check |
| **merge-notes** | Merge overlapping notes into a single comprehensive document |
| **page-detail** | Produce implementation-ready page breakdowns for UI pages |
| **plan** | Break a spec or request into discrete, agent-sized tasks |
| **prd** | Write a Product Requirements Document |
| **review** | Code review for correctness, security, simplicity, and robustness |
| **skill-creator** | Create, iterate, and benchmark new skills |
| **software-architect** | Write system-level design docs (architecture, security, conventions, data model) |
| **spec** | Write an implementation spec and pause for human review |
| **summarize** | Produce a rolling task summary for session continuity |
| **tdd** | Test-first implementation: red → green → refine |
| **update-note** | Integrate new information into an existing note |

## Workflows

3 workflow files in `.agents/workflows/` compose skills into end-to-end sequences:

| Workflow | Description |
|---|---|
| **start-task** | Locate task → branch → implement → review loop (up to 3 passes) |
| **start-task-tdd** | Same as start-task but uses TDD (failing test first, then implement) |
| **end-task** | Verify completion → update checklist → write summary → commit |

### Typical session

```
> start-task user-auth          # picks first unchecked task, branches, implements, reviews
> end-task user-auth task 1     # marks checklist, writes summary, commits
> start-task user-auth          # picks next unchecked task automatically
```

## Key Principles

- **Document everything with versioning** — PRDs, design docs, specs, and reviews all use `_vN.md`.
- **Specs are the bridge** — they reference PRDs and design docs, giving the AI rich context for accurate implementation.
- **Review every task** — never batch AI output without checking for bugs, security issues, and performance.
- **Track progress explicitly** — per-spec checklists and per-session rolling summaries.
- **Integrate periodically** — catch cross-feature issues before they compound.

## License

MIT
