---
name: design-system
description: "Generate a complete, token-level UI design system to docs/design/design-system.md — the authoritative reference for AI agents to produce visually consistent UI. Covers color palettes, typography, spacing, elevation, interactive states, design tokens, accessibility, dark mode theming, motion/animation, iconography, and component patterns (atoms, molecules, organisms). Use this skill when the user says 'design system', 'UI tokens', 'design tokens', 'component library spec', 'visual style guide', 'create a design system', 'set up UI foundations', or when a project needs a prescriptive visual reference before UI implementation begins — even if the user just says 'make things look consistent' or 'define the look and feel'."
user-invocable: true
argument-hint: "<app type, brand colors, scope, or 'from codebase'>"
---

# Design System

You are a senior design systems engineer producing `docs/design/design-system.md` — the single authoritative reference an implementing agent reads to know exactly which token to apply for every UI element. Every value must be explicit. No ambiguity, no "use appropriate shade."

## Why This Matters

Downstream agents generate UI code by looking up tokens from this document. If a token is missing, vague, or inconsistent, the agent guesses — and inconsistency compounds across every component it builds. Your job is to eliminate guessing entirely.

## Workflow

### 1. Ground

- Read `$ARGUMENTS` for app type, brand colors, style direction, scope.
- Read `docs/design/` and `docs/prd/` if they exist — align with approved decisions.
- If `docs/design/design-system.md` exists, treat as update (preserve unless explicitly changing).

### 2. Detect Codebase

Scan: `package.json` → root configs → `src/` styles → component files (sample ≤ 20).

| Signal | Stack |
|---|---|
| `tailwind.config.*` or `@tailwind` in CSS | Tailwind |
| `styled-components` or `@emotion` in deps | CSS-in-JS |
| `.css`/`.scss`/`.less` without framework signals | Vanilla CSS / preprocessor |
| `react`/`vue`/`svelte`/`angular` in deps | Component framework |
| `theme.ts`/`tokens.json`/`variables.css` | Existing token system |

Token output format per stack:
- **Tailwind** → `theme.extend` config + utility classes
- **CSS-in-JS** → JS/TS theme object exports
- **Vanilla CSS** → CSS custom properties
- **Greenfield / ambiguous** → ask user; default CSS custom properties

**From existing codebase:** Also scan style sources and sample ≤ 30 components (for > 100 files, sample across directories). Extract tokens, flag inconsistencies for user decision — never silently resolve.

### 3. Interview

**From scratch:** Ask for app type, primary brand color(s), brand guidelines. Apply domain defaults for unspecified values. If a brand color fails WCAG contrast: present issue, propose adjusted shade, confirm.

**From codebase:** Present extracted tokens/inconsistencies. Ask user to resolve each. Confirm stack detection.

One question at a time with recommended answer. Stop when every section can generate without fabrication.

### 4. Generate

Write `docs/design/design-system.md` in strict dependency order:

**Color → Typography → Spacing → Borders & Elevation → Interactive States → Motion → Iconography → Design Tokens (formalizes all above) → Accessibility (validates tokens) → Dark Mode (maps tokens across themes) → Component Patterns (composes tokens into UI)**

#### 4.1 Color System

- Role-based palettes: **primary**, **secondary**, **accent**, **neutral/gray**, **semantic** (success, warning, error, info).
- Multi-shade scale per palette (50–950), consistent naming.
- Map every semantic usage to a specific shade: `surface-primary`, `surface-secondary`, `text-default`, `text-muted`, `text-inverse`, `border-default`, `border-subtle`, `border-strong`, etc.
- Design for contrast rules formalized in 4.9.

#### 4.2 Typography

- Font families: primary (body/headings), monospace (code), optional display.
- Full type scale: size, weight, line-height, letter-spacing per level.
- Named levels: `display`, `h1`–`h6`, `body-lg`, `body-md`, `body-sm`, `caption`, `overline`, `code`.
- Icon sizing aligned: `icon-sm` = `body-sm` line-height, `icon-md` = `body-md`, etc.
- Responsive adjustments if applicable.

#### 4.3 Spacing & Layout

- 4px base scale: `0`, `1`(4), `2`(8), `3`(12), `4`(16), `6`(24), `8`(32), `12`(48), `16`(64), `24`(96), `32`(128), `48`(192), `64`(256).
- Named breakpoints (sm, md, lg, xl, 2xl) with explicit min-widths and container max-widths.

#### 4.4 Borders & Elevation

- Radius: none, sm, md, lg, xl, full — exact pixel values.
- Border widths: thin, medium, thick — explicit values.
- Shadow scale (sm, md, lg, xl) — exact `box-shadow` values.
- Z-index layers:

  | Layer | Value |
  |---|---|
  | base | 0 |
  | dropdown | 100 |
  | sticky | 200 |
  | modal | 300 |
  | toast | 400 |

#### 4.5 Interactive States

Transformation rules applied consistently to all interactive elements (components inherit, not redefine):
- **Hover**: background shift (e.g., darken one shade step).
- **Focus**: ring spec (width, offset, color) — must meet 3:1 contrast.
- **Active**: background shift from default (e.g., darken two shade steps).
- **Disabled**: opacity, pointer-events, desaturation rules.

#### 4.6 Motion & Animation

- **Durations**: `duration-fast` (100ms), `duration-normal` (200ms), `duration-slow` (350ms), `duration-slower` (500ms).
- **Easing**: `ease-default` (ease-out, entrances), `ease-in` (exits), `ease-in-out` (state changes), `ease-spring` (optional, app-dependent).
- **Transition presets** (components reference by name):

  | Preset | Duration | Easing | Use case |
  |---|---|---|---|
  | `transition-fade` | normal | default | Opacity, tooltips |
  | `transition-scale` | normal | default | Modals, popovers |
  | `transition-slide` | slow | in-out | Drawers, sidebars |
  | `transition-collapse` | normal | in-out | Accordions |
  | `transition-color` | fast | default | Hover/focus changes |

- **Reduced motion**: `prefers-reduced-motion: reduce` → durations to `0ms` or simple opacity fades. Every preset must have a fallback.

#### 4.7 Iconography

- **Icon set**: recommend specific library (Lucide, Heroicons, Phosphor) per stack/app type. Adopt existing if detected.
- **Size scale** (aligned to type scale):

  | Token | Size | Matches |
  |---|---|---|
  | `icon-xs` | 12px | — |
  | `icon-sm` | 16px | `body-sm` line-height |
  | `icon-md` | 20px | `body-md` line-height |
  | `icon-lg` | 24px | `body-lg` line-height |
  | `icon-xl` | 32px | `h5` / display |

- **Color**: inherit `currentColor` by default. Semantic icons use corresponding semantic color token.
- **Stroke width**: `1.5px` default (adjust per icon set). Consistent across set.
- **Spacing**: icon-to-label gap = `space-2` (8px). Standalone icons: 44×44px min tap area on mobile.
- **A11y**: meaningful icons → `aria-label`; decorative → `aria-hidden="true"`.

#### 4.8 Design Tokens

Formalize 4.1–4.7 into named tokens.

- **Primitive**: `{category}-{scale}` — `color-blue-500`, `space-4`, `radius-md`, `shadow-lg`.
- **Semantic**: `{usage}-{element?}-{variant?}-{state?}` — `surface-page`, `color-button-primary-hover`, `radius-input-default`, `text-heading`, `border-input-error`.

Every value from earlier sections must have a token. Include motion (`duration-*`, `ease-*`, `transition-*`) and icon (`icon-*`) tokens. Format per detected stack.

#### 4.9 Accessibility

- WCAG 2.1 AA minimum. Note AAA where achievable.
- Text contrast: 4.5:1 normal, 3:1 large (≥ 18px or ≥ 14px bold).
- Focus indicators: 3:1 against adjacent colors.
- Touch targets: 44×44px minimum on mobile.
- Color never sole meaning indicator (error = red + icon).
- **Contrast pairing table** (validate every pairing, fix before writing):

  | Surface Token | Valid Text Tokens (AA) | Contrast Ratio |
  |---|---|---|
  | `surface-page` | `text-default`, `text-muted` | 12.6:1, 4.8:1 |
  | `surface-primary` | `text-inverse` | 7.2:1 |

#### 4.10 Dark Mode / Theming

Semantic token mapping table (light + dark values):

| Semantic Token | Light Value | Dark Value |
|---|---|---|
| `surface-page` | `color-gray-50` | `color-gray-900` |
| `surface-card` | `color-white` | `color-gray-800` |
| `text-default` | `color-gray-900` | `color-gray-50` |

- Maintain visual hierarchy in both themes (page → card → elevated).
- Theme switching guidance per detected stack.
- Re-validate contrast table for dark mode. Both themes must pass independently.

#### 4.11 Component Patterns

Each pattern: exact tokens for every visual property, layout (padding, gap, alignment), state mappings (→ 4.5), motion presets (→ 4.6), icon usage (→ 4.7), size variants (sm, md, lg) where applicable.

Read `references/components.md` for the component spec template.

**Atoms:** Buttons (primary, secondary, ghost, destructive × sizes × states) · Inputs (text, select, checkbox, radio, toggle × states) · Badges/Tags · Labels · Dividers

**Molecules:** Form groups (label + input + helper/error) · Cards · Alerts/Toasts · Nav items · List items

**Organisms** (structure + tokens only, no interaction logic): Navbar · Sidebar · Modal · Table — include collapse breakpoints for Navbar/Sidebar.

An implementing agent must build any component from this section + the token list alone.

### 5. Validate

Before finalizing:
- Every semantic usage resolves to a real shade value.
- Every token maps to an explicit primitive value.
- Every contrast pairing meets 4.5:1 / 3:1.
- Dark mode table covers all semantic color tokens.
- Every component references only tokens from 4.8.
- Every motion preset has a reduced-motion fallback.
- Every icon specifies size token and color rule.
- No value says "appropriate", "suitable", or defers to implementer.

Fix gaps before writing.

### 6. Pause

Print and stop:

```text
Design system written to docs/design/design-system.md
Stack detected: [detected stack or "greenfield"]
Review and reply "approve" to proceed, "edit" to revise, or leave feedback.
```

Do not begin implementation until the human approves.

## Scope Exclusions (v1)

Out of scope (acknowledge and note as future if asked):
- Organism interaction logic — structure and tokens only.
- Grid columns/gutters — beyond breakpoints and spacing.

## Rules

- Every value explicit. If an agent would guess, the doc is incomplete.
- Sections in dependency order (4.1 → 4.11). Never skip or reorder.
- Validate all contrast ratios. No broken pairings in output.
- From codebase: flag inconsistencies for user — never silently resolve.
- Brand color fails contrast → present issue, propose adjusted shade, confirm.
- Token format matches project's frontend tooling.
- Version suffix: `design-system-vN.md`. Never overwrite existing versions.
- Write for a human and AI agent with no conversation context.
