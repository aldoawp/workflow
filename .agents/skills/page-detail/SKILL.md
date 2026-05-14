---
name: page-detail
description: "Produce implementation-ready page breakdowns covering layout, components, content, imagery, interactions, and page states — one markdown file per page into docs/pages/. An implementing agent should need no further design input after reading this output. Use when the user says 'page detail', 'page breakdown', 'page spec', 'break down this page', 'detail the homepage', 'UI page plan', 'page layout', 'describe the page', or when a specific page needs a full visual/structural specification before UI implementation begins — even if the user just says 'design the dashboard page' or 'what should the landing page look like'."
user-invocable: true
argument-hint: "<page name(s), or 'all' to generate from sitemap>"
---

# Page Detail

Produce implementation-ready page breakdowns — one `[page-name].md` per page into `docs/pages/`. Every value must be explicit; if an implementing agent would guess, the breakdown is incomplete.

## Workflow

### 1. Ground

- Read `$ARGUMENTS` for page name(s) or scope.
- Auto-read when they exist: `docs/prd/main-v1.md`, `docs/prd/[module]-v1.md`, `docs/design/sitemap.md`, `docs/design/data-model.md`, `docs/design/uiux-design.md`.
- Use design-system component names/variants/tokens when available; fall back to descriptive naming otherwise.
- Match pages against sitemap and PRD; pull context automatically.

### 2. Interview

Skip if references provide sufficient context. Otherwise ask (one at a time, with recommended answer):
1. Primary user goal on this page?
2. Target user and how they arrive?
3. Key data entities and actions?

Stop when every section can be generated without fabricating content.

### 3. Generate

Write one kebab-case `[page-name].md` per page into `docs/pages/` (create dir if missing). Each file contains these sections in order:

#### 3.1 Page Metadata

Table: Name, Route, Purpose (one sentence), Target User, Primary Action, Inbound Links, Outbound Destinations.

#### 3.2 Layout Structure

Ordered top-to-bottom section list (e.g., Navbar → Hero → Features Grid → CTA → Footer). Per section:
- **Spatial rules** — columns/grid, gaps, alignment, max-width, padding (design tokens when available), visual separation.
- **Responsive behavior** — per breakpoint (sm/md/lg/xl): what stacks, collapses, hides, reflows. Never write "responsive layout" without specifying per-breakpoint changes.

#### 3.3 Component Inventory

Per component: Name (design-system or descriptive), Variant (specific: single-select vs multi-select, ghost vs primary), Size (sm/md/lg), Section, Props/Config (placeholder, limits, icons), Initial State, State Dependencies, Data Binding (API/static/user input/computed).

Required specificity level:
- "Single-select dropdown with search, filterable, placeholder 'Select country...'"
- "Primary button, lg, label 'Get Started', full-width on mobile"
- "Text input, left icon (search), placeholder 'Search orders...', debounced 300ms"
- "Confirmation modal, centered, backdrop blur, title + body + cancel (ghost) + confirm (destructive)"

#### 3.4 Page States

Define all five states — specify which components are visible/hidden and layout adjustments for each:

| State | Detail |
|---|---|
| Loading | Skeleton/shimmer layout per section |
| Empty | Illustration + message + CTA (e.g., "No orders yet — Create your first order") |
| Populated | Standard data view |
| Error | Inline errors, toasts, retry actions, fallback UI |
| Unauthorized | Access denied message, redirect behavior, or gated blur |

#### 3.5 Content & Copywriting

Per section: exact heading text + level (h1/h2/etc.), exact body copy (or pattern + tone for dynamic), microcopy (labels, tooltips, placeholders, helpers, errors), content hierarchy, tone, character constraints. Never write "appropriate heading" — write the heading.

#### 3.6 Imagery

Per image slot: Section, Purpose (trust/emotion/explanation/decoration/social proof), Type (photo/illustration/icon/avatar/screenshot/video thumbnail), Style direction (e.g., "flat illustration, muted pastels"), Aspect ratio, Sizing behavior (fixed/responsive/constrained with min/max), Alt text pattern.

Infer style from context: hero → aspirational, features → explanatory, testimonials → social proof; B2B → professional, consumer → vibrant, developer → minimal.

#### 3.7 Interactions & Micro-interactions

- **Interactions** — action → outcome pairs. Forms: validate → loading → success/error. Navigation: trigger → destination.
- **Animation** — entry animations, component transitions (press/open/close/shimmer), state transitions, scroll-triggered effects. Use design-system motion tokens when available.
- **Purpose** — every animation tied to a reason (attention/confirmation/continuity/feedback). No decorative animation by default.

### 4. Validate

Before finalizing, verify:
- Every component has specific variant, size, and initial state.
- Every section has explicit responsive behavior per breakpoint.
- All five page states defined.
- All headings/primary copy are exact text.
- Every image slot has purpose, type, aspect ratio, alt text pattern.
- Component names match design system when one exists.
- No value says "appropriate", "suitable", or defers choice to implementer.

Fix gaps inline before writing.

### 5. Pause

Print:
```text
Page detail written to docs/pages/[page-name].md
References used: [list files read]
Review and reply "approve" to proceed, "edit" to revise, or leave feedback.
```
Stop. Do not begin implementation until human approves.

## Rules

- Every value explicit — no guessing by the implementer.
- One independent file per page; do not combine pages.
- Use design-system names/tokens from `docs/design/uiux-design.md` when it exists.
- Do not model cross-page state; sitemap provides flow coherence.
- Prescriptive: exact variants, exact copy. Humans override for creative reasons.
- Write for a reader with no conversation context.
