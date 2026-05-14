# Design System Skill — Requirements (v3)

Produces `docs/design/uiux-design.md` — the authoritative, prescriptive reference for agentic AI to generate visually consistent UI. Covers design tokens, visual foundations, component patterns, theming, and accessibility.

## Generation Order (each section depends on prior ones)

1. Color System → 2. Typography → 3. Spacing & Layout → 4. Borders & Elevation → 5. Interactive States → 6. Design Tokens (formalizes 1–5) → 7. Accessibility (validates 6) → 8. Dark Mode / Theming (maps 6 across themes) → 9. Component Patterns (composes 6 into UI)

## Requirements

### Color System
- Role-based palettes: primary (brand), secondary, accent, neutral/gray, semantic (success, warning, error, info)
- Multi-shade scale per palette (e.g., 50–950) for backgrounds, borders, text, interactive states
- Consistent shade naming across all palettes
- Every semantic usage (`surface-primary`, `text-default`, `border-subtle`, etc.) resolves to a specific shade per theme
- Validated against Accessibility contrast rules

### Typography
- Font families: primary, monospace, optional display
- Full type scale: sizes, weights, line heights, letter spacing
- Named levels: display, h1–h6, body (lg/md/sm), caption, overline, code
- Icon sizing follows type scale (icon-sm matches body-sm line height)
- Responsive adjustments if applicable

### Spacing & Layout
- Spacing scale (4px base: 0, 1, 2, 3, 4, 6, 8, 12, 16, 24, 32, 48, 64)
- Named breakpoints (sm, md, lg, xl, 2xl) with container max-widths

### Borders & Elevation
- Radius scale (none, sm, md, lg, full), border widths
- Shadow scale (sm, md, lg, xl) with exact values
- Z-index layers (base, dropdown, sticky, modal, toast) with assigned values

### Interactive States
- Transformation rules for hover, focus, active, disabled on all interactive elements (e.g., "hover darkens bg one shade step", "focus adds `ring-2 ring-primary-500`", "disabled: opacity 0.5, no pointer events")
- Focus indicators must meet accessibility requirements

### Component Patterns

Each pattern specifies: exact token names, layout rules (padding, gap, alignment), state mappings, size variants (sm, md, lg) where applicable.

**Atoms:** Buttons (primary, secondary, ghost, destructive + sizes + states) · Inputs (text, select, checkbox, radio, toggle + default/focus/error/disabled) · Badges/Tags · Labels · Dividers

**Molecules:** Form groups (label + input + helper/error) · Cards · Alerts/Toasts · Nav items · List items

**Organisms (structure + token mapping only, no interaction logic):** Navbar · Sidebar · Modal · Table — note collapse breakpoints for Navbar/Sidebar

### Design Tokens
- ALL design decisions become named tokens
- **Primitive tokens**: `{category}-{scale}` (e.g., `color-blue-500`, `space-4`, `radius-md`)
- **Semantic tokens**: `{usage}-{element?}-{variant?}-{state?}` (e.g., `surface-page`, `color-button-primary-hover`, `radius-input-default`)
- Format adapts to detected frontend tooling

### Accessibility
- WCAG 2.1 AA minimum (note where AAA achievable)
- Text/bg contrast: 4.5:1 normal, 3:1 large — include explicit contrast pairing table (valid text tokens per surface token)
- Focus indicators: 3:1 contrast against adjacent colors
- Touch targets: min 44×44px mobile
- Color never sole meaning indicator (error = icon + color)
- Skill validates contrast ratios on generated pairings

### Dark Mode / Theming
- Every semantic color token has light + dark values, presented as mapping table:

  | Semantic Token | Light Value | Dark Value |
  |---|---|---|
  | `surface-page` | `color-gray-50` | `color-gray-900` |

- Theme switching guidance adapted to detected stack
- Surfaces must maintain visual hierarchy in both themes

### Codebase Awareness

**Detection** — scan in order: `package.json` → root config files → `src/` styles → component files (sample ≤20)

| Signal | Stack |
|---|---|
| `tailwind.config.*` / `@tailwind` in CSS | Tailwind |
| `styled-components` / `@emotion` in deps | CSS-in-JS |
| `.css`/`.scss`/`.less` without framework signals | Vanilla CSS / preprocessor |
| `react`/`vue`/`svelte`/`angular` in deps | Component framework |
| `theme.ts`/`tokens.json`/`variables.css` | Existing token system |

**Adaptation**: Tailwind → `theme.extend` + utility classes · CSS-in-JS → JS/TS theme object · Vanilla → CSS custom properties · Greenfield → ask user; default CSS custom properties

### Modes of Operation

**From scratch:** Ask for app type, brand color(s), existing guidelines. Apply domain-appropriate defaults. If brand color fails contrast: present issue, propose adjusted shade, confirm with user.

**From existing codebase:**
1. Run codebase detection
2. Scan style sources (CSS/SCSS, theme files, Tailwind config)
3. Sample ≤30 components for patterns; for >100 component files, sample across distinct directories
4. Extract consistent tokens/patterns; flag inconsistencies for user decision (never silently pick)
5. Produce design system reflecting user's resolved decisions

## Output

- **File**: `docs/design/uiux-design.md`
- Every value explicit — no ambiguity, no "use appropriate shade"
- Agent-consumable: an implementing agent reads this and knows exactly which token to apply

## Scope Exclusions
- **Motion/animation**: out of scope v1
- **Organisms**: structure + tokens only; no interaction logic or responsive behavior beyond collapse breakpoint notes
- **Iconography**: icon sizing in Typography only; icon set selection is out of scope
- **Grid columns/gutters**: out of scope (layout architecture, not tokens)
