# Spec-Driven Development (SDD) — Agentic AI Development Workflow

A structured, phase-based workflow for product engineering with AI that emphasizes specification-driven development to achieve high-accuracy output. The process flows from high-level product requirements through design, specification, incremental AI-driven implementation, review, and integration — with built-in session management and document versioning throughout.

---

## Phase 1: PRD (Product Requirements Document)

- Write the high-level PRD
- Write module-level PRDs for large projects
- Write an overview of the PRD (optional)

All documents should be processed with meta prompting. Apply versioning for all documents: `[filename]_v1.md`, `[filename]_v2.md`, etc.

Skills needed (owned):
- [TBC] product-manager: lorem ipsum

---

## Phase 2: Design Docs

Create design documents as **separate files**, covering:

- Architecture
- Security
- Stack
- Conventions
- Code style
- File/folder structure
- Data model (ERD)

Skills needed (owned):
- [TBC] software-architect: lorem ipsum

---

## Phase 3: Specification

Create spec files based on features/user stories. Each spec must reference the relevant:

- PRD files
- Design doc files

Break down each spec into discrete tasks.

Skills needed (owainlewis/blueprint):
- spec: to create the spec file derived from PRD & design docs
- plan: to break work into agent-sized tasks
- compress: to shortens agent-facing instructions without changing behavior

---

## Phase 4: AI Execution & Review Loop

### 4.1 Incremental Implementation

AI works incrementally, executing one task at a time per spec:

- Spec 1
  - Task 1
  - Task 2
  - ...
- Spec 2
  - ...

Skills needed (owainlewis/blueprint):
- branch: for every spec task initialization, create a new branch
- implement: to execute a single task

### 4.2 Test-Driven Development (Optional)

Consider using TDD with a red-green test approach: have the AI generate test code **before** writing the implementation. This improves accuracy but consumes 2–3x output tokens and generates a larger context window, so it remains optional for now.

Skills needed (owainlewis/blueprint):
- tdd: test-first variant of implement

### 4.3 Task Review

After each task (and its tests, if using TDD), review the AI output to check whether the code:

- Needs refactoring
- Has bugs
- Has performance issues

Skills needed (owainlewis/blueprint):
- review: to do local code review

### 4.4 Checklist Update

After the task execution and review loop is complete for a task, update the spec's ongoing task checklist:

```text
"[spec]_tasks_checklist.md"
```

---

## Phase 5: Session Workflow

Each session, work on up to 1–3 tasks (depending on task complexity and output size).

After each session, summarize the execution and output into a new file:

```text
"[spec]_session-[X]_summary.md"
```

Note: this summary is used as execution/output context of the previous session for the next one/

Skills needed (owned):
- summarize
- checklist
- commit: for every session done (finished task) commit the results

---

## Phase 6: Integration Review

After several completed specs (or significant code changes), generate an Integration Review Document to:

- Check and note what has been built holistically
- Explicitly verify cross-feature consistency before continuing

Apply versioning to integration docs as well:

```text
"[integration_doc]_v1.md", "[integration_doc]_v2.md", ...
```

Skills needed (owned):
- [TBC] integration-review: lorem ipsum

---

## Key Takeaways

- **Document everything with versioning** — PRDs, design docs, specs, and integration reviews all follow a `_vN.md` naming convention.
- **Separate concerns into phases** — requirements → design → specs → implementation → review → integration.
- **Specs are the bridge** — they reference PRDs and design docs, providing the AI with rich context for accurate implementation.
- **Review every task** — never batch AI output without reviewing for refactoring needs, bugs, and performance.
- **Track progress explicitly** — maintain per-spec task checklists and per-session summaries.
- **Integrate periodically** — use integration review documents to catch cross-feature issues before they compound.
- **Use meta prompting** — process documents through meta prompts for consistency and quality.
