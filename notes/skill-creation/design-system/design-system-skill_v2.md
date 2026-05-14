# Design System Skill — Requirements (v2)

## Summary

A skill that produces a comprehensive UI/UX design system as a single `docs/design/uiux-design.md` file. This file serves as the authoritative reference for agentic AI to generate visually consistent UI across an entire application — covering design tokens, visual foundations, component-level patterns, theming, and accessibility. Prescriptive, not advisory: agents follow it as a spec, not a suggestion.

## Key Requirements

### Color System
- Role-based palettes: primary (brand), secondary, accent, neutral/gray, and semantic (success, warning, error, info)
- Each palette includes a multi-shade scale (e.g., 50–950 or lightest → darkest) for backgrounds, borders, text, and interactive states
- Consistent shade naming convention across all palettes
- Light and dark mode mappings: every semantic usage (e.g., `surface-primary`, `text-default`, `border-subtle`) must resolve to a specific shade per theme
- Explicit contrast pairing rules: which text colors are valid on which background colors

### Typography
- Font families (primary, monospace, optional display)
- Full type scale: sizes, weights, line heights, letter spacing
- Named levels covering: display, headings (h1–h6), body (lg, md, sm), caption, overline, code
- Responsive adjustments if applicable

### Spacing & Layout
- Spacing scale (e.g., 4px base unit: 0, 1, 2, 3, 4, 6, 8, 12, 16, 24, 32, 48, 64)
- Consistent naming (e.g., `spacing-sm`, `spacing-md` or numeric like `space-4`, `space-8`)
- Responsive breakpoints with named tiers (e.g., sm, md, lg, xl, 2xl)
- Container max-widths per breakpoint
- Grid/layout guidance (column counts, gutter sizes)

### Borders & Elevation
- Border radius scale (e.g., none, sm, md, lg, full)
- Border width options
- Shadow/elevation scale (e.g., sm, md, lg, xl) with exact values
- Z-index layers (e.g., base, dropdown, sticky, modal, toast) with assigned values

### Iconography
- Icon size scale aligned with typography/spacing
- Style conventions (outline vs. filled, stroke width)
- Recommended icon set if starting from scratch

### Interactive States
- Systematic rules for hover, focus, active, disabled across all interactive elements
- Rules expressed as transformations (e.g., "hover darkens background by one shade step", "focus adds `ring-2 ring-primary-500`", "disabled sets opacity to 0.5 and removes pointer events")
- Focus must meet accessibility requirements (visible focus indicator)

### Component Patterns
Defines how tokens combine into consistent UI elements. Scoped to:

**Atoms:**
- Buttons (primary, secondary, ghost, destructive — each with size variants and all interactive states)
- Inputs (text, select, checkbox, radio, toggle — with states: default, focus, error, disabled)
- Badges / Tags
- Labels
- Dividers
- Icons (sizing, color usage)

**Molecules:**
- Form groups (label + input + helper/error text — layout and spacing)
- Cards (structure, padding, border, shadow usage)
- Alerts / Toasts (semantic color mapping, icon usage, layout)
- Nav items (active, inactive, hover states)
- List items

**Organisms (lighter guidance):**
- Navbar (layout, responsive behavior)
- Sidebar (width, collapse behavior)
- Modal (overlay, sizing, spacing, focus trap mention)
- Table (header, row, striping, borders)

Each component pattern specifies:
- Which tokens to use (exact token names for colors, spacing, radius, etc.)
- Layout rules (padding, gap, alignment)
- State mappings (which tokens change on hover, focus, disabled, etc.)
- Size variants if applicable (sm, md, lg)

### Design Tokens
- Translate ALL design decisions into named tokens
- Token naming convention: `{category}-{element}-{variant}-{state}` (e.g., `color-button-primary-hover`, `spacing-card-padding`, `radius-input-default`)
- Two-tier token structure:
  - **Primitive tokens**: raw values (`color-blue-500: #3B82F6`)
  - **Semantic tokens**: role-based references (`color-primary: color-blue-500`, `surface-page: color-gray-50`)
- Adapt token format to detected frontend tooling (Tailwind CSS classes, CSS custom properties, CSS-in-JS theme object, etc.)

### Accessibility
- Target compliance level: WCAG 2.1 AA minimum (note where AAA is achievable)
- Color contrast: all text/background pairings must meet 4.5:1 for normal text, 3:1 for large text
- Focus indicators: visible on all interactive elements, must meet 3:1 contrast against adjacent colors
- Touch targets: minimum 44×44px for mobile interactive elements
- Color not used as the sole indicator of meaning (e.g., error states need icon + color, not just red)
- Reduced motion: flag any motion/animation tokens as optional under `prefers-reduced-motion`

### Dark Mode / Theming
- Every semantic color token must have both light and dark theme values
- The design system file includes a mapping table: semantic token → light value → dark value
- Guidance on theme switching mechanics adapted to detected stack (CSS variables toggle, Tailwind `dark:` prefix, theme provider, etc.)
- Neutral surfaces and elevated surfaces must maintain visual hierarchy in both themes

### Codebase Awareness
- Detect current frontend tooling before generating output (Tailwind CSS, vanilla CSS, CSS-in-JS, styled-components, etc.)
- Adapt token format, implementation snippets, and component guidance to match the project's stack
- If no frontend is detected (greenfield), ask user for intended stack or default to CSS custom properties

### Modes of Operation

**From scratch:**
- Ask for: app type (SaaS, e-commerce, healthcare, etc.), brand color(s) if any, any existing brand guidelines
- Generate full design system tailored to the app type
- Apply domain-appropriate defaults (e.g., healthcare → calming blues/greens, high contrast; SaaS dashboard → neutral with accent)

**From existing codebase:**
- Scan existing styles, components, and theme files
- Extract tokens and patterns that ARE consistent
- Flag inconsistencies and present them to the user for decision (do not silently pick one)
- User clarification required for: conflicting color usage, inconsistent spacing, mixed component patterns
- Produce the design system file reflecting user's resolved decisions

## Output

- **File**: `docs/design/uiux-design.md`
- Structured with clear, navigable headings matching the sections above
- Every value is explicit (no "use an appropriate shade" — instead "use `color-primary-600`")
- Designed for agentic consumption: an implementing agent reads this file and knows exactly which token to apply in any situation
- No ambiguity — if a decision could go two ways, the design system picks one

## Open Questions
- Should motion/animation be a full section or stay out of scope for v1?
- Should the skill validate its own output (e.g., run contrast ratio checks on the generated palette)?
- How deep should organism-level guidance go before it becomes a separate "UI kit spec" skill?

## Context
Expanded from v1 based on brainstorm session. Key additions: spacing/layout, borders/elevation, interactive states, component patterns (atoms/molecules/organisms), dark mode, concrete accessibility rules, two-tier token structure, and defined output path.
