   Product engineering with AI: Spec Driven Development (SDD) w/ High Accuracy Output

* The documents below should be proceed with meta prompting
* Apply versioning for changes on below documents [filename]_v1.md, [filename]_v2.md, ...

---

Phase 1: PRD
- Write the high-level PRD
- Write module-level PRD if it's a big project
- Write the overview of the PRD (optional)

---

Phase 2: Design Docs
- Architecture
- Security
- Stack
- Convention
- Code style
- Data model (ERD)

---

Phase 3: Specification (the implementation documents that refer to relevant documents produced on earlier phases for enhanced context)
- Feature/user story 1
- Feature/user story 2
- Feature/user story 3

---

Phase 4.1: Incremental Implementation for Tasks Defined In Specifications
- Spec 1
  - Task 1
  - Task 2
  - ...
- Spec 2
  - ...

Phase 4.2: Review AI output after each task implementation to check whether the code need refactor, bugfix, or etc.

Phase 4.3: After task execution & review loop done for a task, update spec checklist of ongoing tasks on filename "[spec]_tasks_checklist.md"

---

Phase 5: After each session, summarize the session output on to new files called "[spec]_[session]_[X]_summary.md"

---

Phase 6: Integration Review Document
- Generate a new Integration docs after several completed specs (or big code changes) to check and notes what has been built holistically and explicitly check for cross-feature consistency before continuing
- Write in versions too, [integration_doc]_v1.md, [integration_doc]_v2.md, ...

---
