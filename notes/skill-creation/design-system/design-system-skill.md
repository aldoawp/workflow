# Design System Skill — Requirements Note

## Summary

A skill specialized in creating comprehensive UI/UX design systems. It produces a `.md` file that serves as the design source of truth, enforcing visual consistency throughout agentic AI development.

## Key Requirements

### Color System
- Define role-based color palettes: primary (brand), secondary, accent, and semantic colors (success, warning, error, info)
- Each palette must include a multi-shade scale (e.g., lightest → light → normal → dark → darkest) for flexible usage across backgrounds, borders, text, and interactive states
- Consistent, predictable shade naming convention across all palettes

### Typography
- Specify font families, sizes, weights, and line heights
- Cover a full type scale suitable for headings, body, captions, etc.

### Design Tokens
- Translate all design decisions (colors, fonts, spacing, etc.) into ready-to-use, consistently named design tokens for frontend development
- Token naming must be systematic and predictable across categories

### Codebase Awareness
- Detect the current frontend tooling (Tailwind CSS, vanilla CSS, CSS-in-JS, etc.) before generating token output
- Adapt the token format and implementation guidance to match the project's stack

### Modes of Operation
- **From scratch**: generate a full design system based on the app type and user input
- **From existing codebase**: analyze an existing project and extract/formalize the current design into a structured system

### UI/UX Best Practices
- Follow established UI/UX best practices (contrast, readability, hierarchy, consistency)
- Tailor design recommendations to the specific app type (SaaS, e-commerce, healthcare, etc.)

## Output

- A structured `.md` file that AI agents reference to generate consistent UI
- Designed for agentic consumption — prescriptive, not advisory