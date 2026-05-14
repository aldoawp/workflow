# Page Detail Skill — Requirements (v2)

## Summary

Produces implementation-ready page breakdowns covering layout, components, content, imagery, interactions, and page states. An implementing agent should need no further design input.

Reads automatically: `docs/prd/main-v1.md` (or module PRDs), `docs/design/sitemap.md`, `docs/design/data-model.md`, `docs/design/design-system.md` (if exists). Falls back to standard component naming when no design system exists.

Outputs one `[page-name].md` per page into `docs/pages/` (kebab-case; create dir if missing). Supports single or multi-page generation per invocation.

## Input

### Auto-read references
- **PRD** (`docs/prd/main-v1.md`, `docs/prd/[module]-v1.md`(if exist) ) — product context, features, user stories
- **Sitemap** (`docs/design/sitemap.md` (if exist)) — page map, navigation hierarchy, page relationships
- **Data model** (`docs/design/data-model.md` (if exist)) — entities, relationships, and data shapes the page may consume
- **Design system** (`docs/design/design-system.md` (if exist)) — tokens, component vocabulary

### Required
- **Page name(s)** — pulls context from sitemap/PRD if matched; otherwise user must provide purpose + target user

### Optional
- Page purpose override, target user, primary CTA, data sources, reference pages, constraints (mobile-first, RTL, etc.)

### Interview
Only if no PRD/sitemap context exists — ask: (1) primary user goal, (2) target user + arrival context, (3) key data entities/actions. Skip if references provide sufficient context.

## Output Sections

### 1. Page Metadata
- Name, route, purpose, target user, primary action
- App flow position (inbound links, outbound destinations)

### 2. Layout Structure

**Sections** — ordered top-to-bottom list (e.g., Navbar → Hero → Features grid → CTA → Footer)

**Per section, specify:**
- **Spatial rules** — columns/grid, gaps, alignment, max-width, padding (use design tokens), visual separation
- **Responsive behavior** — per breakpoint (sm/md/lg/xl): what stacks, collapses, hides, reflows. Include nav collapse points.

### 3. Component Inventory

Per component:

| Field | Detail |
|---|---|
| Name | From design-system vocabulary |
| Variant | Specific: single-select vs multi-select, ghost vs primary, etc. |
| Size | sm/md/lg |
| Section | Parent layout section |
| Props/Config | Placeholder, max selections, char limit, icons, etc. |
| Initial State | Default on load (empty, pre-filled, disabled, loading) |
| State Dependencies | What triggers state changes |
| Data Binding | API endpoint, static list, user input |

**Specificity examples:**
- "single-select dropdown with search, filterable, placeholder 'Select country...'"
- "primary button, lg, label 'Get Started', full-width on mobile"
- "text input, left icon (search), placeholder 'Search orders...', debounced 300ms"
- "confirmation modal, centered, backdrop blur, title + body + cancel ghost + confirm destructive"

### 4. Page States

| State | Description |
|---|---|
| Loading | Skeleton/shimmer per section |
| Empty | Illustration + message + CTA (e.g., "No orders yet — Create your first order") |
| Populated | Standard data view (main breakdown) |
| Error | Inline errors, toasts, retry actions, fallback UI |
| Unauthorized | Access denied message, redirect, or gated blur |

Per state: which components visible/hidden, layout adjustments.

### 5. Content / Copywriting

Per section:
- Headings (exact text + level), body copy (text or pattern + tone), microcopy (labels, tooltips, placeholders, helpers, errors)
- Content hierarchy (visual weight order), tone per section, character constraints for dynamic content

### 6. Imagery

Per image slot:
- Section, purpose (trust/emotion/explanation/decoration), type (photo/illustration/icon/avatar/screenshot/video thumb)
- Style direction, aspect ratio, sizing behavior (fixed/responsive/constrained), alt text pattern

**Contextual reasoning** — determine recommendations from: section purpose (hero=aspirational, features=explanatory, testimonials=social proof), audience (B2B=professional, consumer=vibrant, dev=minimal), adjacent content.

### 7. Interactions & Micro-interactions

- **Interactions** — action→outcome pairs, form submission flows (validate→load→success/error), navigation triggers
- **Animation** — entry animations per section, component-level (press/open/close/shimmer), state transitions, scroll-triggered. Tie to purpose (attention, confirmation, continuity) — not decorative by default.

## Tradeoffs

- **Prescriptive by design** — exact variants, exact copy. Implementing agent needs precision. Human can override for creative reasons.
- **Independent artifacts** — multi-page generation produces separate files. Cross-page state not modeled; sitemap provides flow coherence.
- **Design-system dependency** — best with design system; degrades gracefully to generic naming without one.

## Open Questions

- Visual hierarchy / z-order diagram needed, or section-by-section sufficient?
- Data model / API shapes here or in the spec skill?
- Diff mode for updating existing breakdowns when requirements evolve?

## Context

Refined from `page-uiux.md` (5 bullets → full skill requirement). Covers input spec, output structure, component specificity, page states, contextual imagery, and interaction patterns.
