# Agentic AI Development Workflow

## 1. PRD Phase

* Create high-level PRD
* Create module-level PRD

---

## 2. Design Docs Phase

Create multiple design docs on separate files:

* Architecture
* Security
* Stack
* Conventions
* File/folder structure
* etc

---

## 3. Spec Creation Phase

Create spec files based on features that referenced relevant:

* PRD files
* Design docs files

Spec breakdown to tasks.

## 4. AI Execution Workflow

AI works incrementally for each task on the spec file.

---

## 5. Task Review Workflow

After each task do code review to check whether the output:

* need refactor
* has bugs
* has performance issues

---

## 6. Checklist Update Workflow

After the task review, update the current spec checklist of ongoing tasks on filename:

```text
"[spec]_tasks_checklist.md"
```

---

## 7. Session Workflow

After each session work on up to 1–3 task (depending on task complexity and output size).

Summarize the session execution/output onto new files called:

```text
"[spec]_[session]-[NUM]-summary.md"
```