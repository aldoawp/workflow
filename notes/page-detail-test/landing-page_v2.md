# Landing Page — To-Do App SaaS (v2)

## 1. Page Metadata

| Field                  | Value                                                                                                     |
| ---------------------- | --------------------------------------------------------------------------------------------------------- |
| **Name**               | Landing Page                                                                                              |
| **Route**              | `/`                                                                                                       |
| **Purpose**            | Convert visitors into free-trial signups by communicating clarity, speed, and delight through premium UI.  |
| **Target User**        | Professionals, freelancers, and small-team leads seeking a lightweight, beautifully crafted task manager.  |
| **Primary Action**     | Click "Start Free — No Credit Card" CTA to begin signup.                                                  |
| **Inbound Links**      | Organic search, paid ads, social media, referral links, blog posts, Product Hunt.                         |
| **Outbound Destinations** | `/signup`, `/login`, `/pricing`, `/features`, `/blog`, external social links in footer.                |

---

## 2. Layout Structure

Single-column centered layout. Max-width **1280px**. Horizontal padding: **20px** (sm) / **40px** (md) / **80px** (lg) / **120px** (xl). Vertical rhythm between major sections: **120px** (lg+) / **80px** (md) / **64px** (sm). The page uses a dark-on-light color scheme with a warm neutral canvas (`#FAFAF8`) and a single saturated accent (`#4F46E5` indigo-600) — all color pops derive from this one hue.

**Global background treatments:** A large soft gradient orb (400×400px, accent-500 at 8% opacity, radial, positioned top-right behind hero, blurred 120px) and a second smaller orb (240×240px, accent-400 at 6% opacity, positioned bottom-left behind testimonials, blurred 80px). Subtle grain texture overlay across the entire page (`opacity: 0.03`, `mix-blend-mode: multiply`, 400×400 tiled noise PNG). These layers sit behind all content in a fixed/absolute container.

### 2.1 Navbar

- **Spatial rules** — Full-width, height 72px, sticky top, `backdrop-filter: blur(16px) saturate(180%)`, background `rgba(250,250,248,0.85)`, border-bottom `1px solid rgba(0,0,0,0.04)`. Inner content max-width 1280px, centered. Logo left, nav links center (gap 36px), CTA + login link right (gap 16px).
- **Visual depth** — Frosted-glass navbar. On scroll > 8px: add `box-shadow: 0 1px 3px rgba(0,0,0,0.04)` transition 300ms.
- **Responsive behavior**
  - **sm (< 640px):** Nav links + CTA hidden. Hamburger icon (20×20, 1.5px stroke) right-aligned. Tap opens slide-in drawer from right (width 80vw, max 360px), frosted glass background, vertical link stack (56px row height, dividers), CTA pinned to bottom of drawer with 24px padding. Backdrop overlay `rgba(0,0,0,0.3)`, blur 4px. Close on tap outside or X button.
  - **md (640–1023px):** Nav links visible (font 14px), CTA visible (size sm).
  - **lg+ (≥ 1024px):** Full layout. Nav links 15px, CTA size md.

### 2.2 Hero Section

- **Spatial rules** — Vertical padding: 100px top, 80px bottom (lg+) / 72px top, 56px bottom (sm). Centered single-column layout, max-width 800px for text block. Below text: product screenshot breaking out of the content max-width to 1100px, creating a dramatic wide-frame effect.
- **Layout personality** — Text is dead-center, creating a confident editorial feel. The screenshot below "floats" — rotated 2° on the X-axis via `perspective(1200px) rotateX(2deg)`, giving 3D depth. A colored glow sits behind the screenshot (`box-shadow: 0 40px 100px -20px rgba(79,70,229,0.25)`).
- **Visual depth** — Behind the hero text, a faint oversized word "FOCUS" rendered at 200px, font-weight 900, `opacity: 0.02`, centered, acting as a watermark texture. The hero screenshot sits in a browser-mockup frame (rounded-2xl, subtle toolbar with 3 dots, `bg: white`, `shadow: 0 25px 60px -12px rgba(0,0,0,0.15), 0 8px 20px -8px rgba(0,0,0,0.08)`).
- **Whitespace** — 40px gap between headline and subheadline. 32px between subheadline and CTA cluster. 64px between CTA cluster and screenshot. Generous breathing room throughout.
- **Responsive behavior**
  - **sm:** Padding 72px top, 48px bottom. Screenshot max-width 100%, rotation removed (`rotateX(0)`), shadow reduced. Headline 36px. Text centered.
  - **md:** Screenshot max-width 90%, rotation reduced to 1°. Headline 48px.
  - **lg+:** Full layout as described. Headline 64px.
  - **xl (≥ 1440px):** Screenshot max-width 1100px.

### 2.3 Social Proof Bar

- **Spatial rules** — Full-width, vertical padding 40px. No background color — logos sit on the main canvas. Inner content centered. Logos in a single row, gap 56px, vertically centered. Max 6 logos.
- **Visual separation** — Thin hairline divider above and below (1px, `rgba(0,0,0,0.06)`), full content width.
- **Responsive behavior**
  - **sm:** Logos in auto-scrolling marquee (infinite horizontal scroll, 30s duration, `animation-play-state: running`, pauses on hover/touch). 2 copies of the logo set for seamless loop. Label hidden.
  - **md:** Static row, logos scale to height 24px.
  - **lg+:** Static row, logos height 32px.

### 2.4 Features Section

- **Spatial rules** — Section padding: 120px vertical (lg+) / 80px (sm). Heading + subheading centered, max-width 640px. Below: 3-column grid, column gap 28px, row gap 40px. Each card: padding 36px, rounded-2xl (16px radius).
- **Visual depth** — Cards have `background: white`, `border: 1px solid rgba(0,0,0,0.04)`, `box-shadow: 0 1px 3px rgba(0,0,0,0.04)`. On hover: `box-shadow: 0 12px 40px -8px rgba(79,70,229,0.12), 0 4px 12px -2px rgba(0,0,0,0.05)`, `translateY(-4px)`, `border-color: rgba(79,70,229,0.12)`. Transition 300ms ease-out.
- **Layout personality** — Icon sits inside a 56×56 rounded-xl (12px) tinted background (`accent-50`, e.g., `#EEF2FF`), icon color `accent-600`. This gives each card a jewel-like accent dot.
- **Responsive behavior**
  - **sm:** Single column stack, cards full-width.
  - **md:** 2-column grid.
  - **lg+:** 3-column grid, 2 rows of 3.

### 2.5 Product Showcase Section

- **Spatial rules** — 3 alternating rows. Each row is a two-column layout: 45% text / 55% image. Column gap 80px (lg+). Row gap 120px (lg+) / 64px (sm). Section vertical padding: 120px (lg+) / 80px (sm). Text column vertically centered.
- **Layout personality** — The image side uses a "floating device" approach: screenshot wrapped in a rounded-2xl (20px) container with layered shadow (`0 24px 48px -12px rgba(0,0,0,0.12), 0 8px 16px -4px rgba(0,0,0,0.06)`), a subtle 1px border (`rgba(0,0,0,0.06)`), and a colored accent stripe on the left edge (4px wide, accent-500, rounded, height 60% centered vertically) for visual punch. Alternating rows flip this stripe to the right.
- **Visual depth** — Behind each image container, a soft blurred accent shape (160×160px circle, accent at 5% opacity, offset 40px bottom-right) adds layered depth.
- **Responsive behavior**
  - **sm:** Single column, text always above image. Row gap 48px. Image max-width 100%.
  - **md:** Single column, text above image. Image max-width 520px centered.
  - **lg+:** Two-column alternating (row 1: text left/image right, row 2: image left/text right, row 3: text left/image right).

### 2.6 Stats Bar

- **Spatial rules** — Full-width accent background gradient (`linear-gradient(135deg, #4F46E5, #7C3AED)` — indigo to violet). Vertical padding 72px. Inner: 3-column centered grid, gap 64px. Each stat: large number (48px, white, font-weight 700), label below (16px, white/70 opacity).
- **Visual depth** — Subtle dot-grid pattern overlay (`opacity: 0.06`, white dots on transparent, 24px spacing). Rounded-none (full bleed) to break the boxed rhythm and inject energy.
- **Responsive behavior**
  - **sm:** Single column stack, 32px gap. Numbers 36px.
  - **md:** 3 columns, numbers 40px.
  - **lg+:** Full layout. Numbers 48px.

### 2.7 Testimonials Section

- **Spatial rules** — Section padding: 120px vertical (lg+) / 80px (sm). Heading centered. Below: offset masonry-inspired layout — 3 cards, but the middle card is vertically offset 32px downward, creating a staggered skyline effect. Card gap 28px. Each card: padding 36px, rounded-2xl (16px).
- **Visual depth** — Cards have `background: white`, `border: 1px solid rgba(0,0,0,0.05)`, `box-shadow: 0 2px 8px rgba(0,0,0,0.04)`. One "featured" card (the middle) has accent left-border (3px, accent-500) and slightly larger padding (40px) to draw the eye.
- **Layout personality** — The staggered offset makes this section instantly distinctive vs. a flat 3-column grid. Quotation marks rendered as oversized decorative glyphs (`"`, 120px, accent-100 color, positioned absolute top-left of each card, `font-family: Georgia`, `line-height: 1`).
- **Responsive behavior**
  - **sm:** Horizontal snap-scroll carousel, 1 card visible at a time. Dot indicators below (8px circles, accent-filled for active, `rgba(0,0,0,0.15)` for inactive). Swipe-enabled. No vertical offset.
  - **md:** 2-column layout, third card below spanning left column. Middle card offset removed.
  - **lg+:** 3-column staggered layout as described.

### 2.8 Pricing Teaser Section

- **Spatial rules** — Section padding: 120px (lg+) / 80px (sm). Heading + subheading centered, max-width 640px. Two cards side by side, centered, max combined width 760px, gap 28px. CTA centered below cards, 48px below.
- **Visual depth** — Free card: `background: white`, `border: 1px solid rgba(0,0,0,0.06)`, `rounded-2xl`, `shadow: 0 2px 8px rgba(0,0,0,0.04)`. Pro card: `background: white`, `border: 2px solid accent-500`, `rounded-2xl`, `shadow: 0 16px 48px -8px rgba(79,70,229,0.15)`, slightly larger scale (`transform: scale(1.03)`) — this card physically appears bigger, drawing the eye. "Most Popular" badge: `position: absolute`, top -14px right 24px, pill shape (rounded-full), `bg: accent-500`, white text, 12px font, padding 4px 14px, `box-shadow: 0 2px 8px rgba(79,70,229,0.3)`.
- **Responsive behavior**
  - **sm:** Cards stack vertically, Pro card on top (reordered via `order: -1`). Full-width. Scale reset to 1.0.
  - **md+:** Side by side as described.

### 2.9 Final CTA Section

- **Spatial rules** — Full-width accent gradient background (same as Stats Bar: `linear-gradient(135deg, #4F46E5, #7C3AED)`). Vertical padding: 120px (lg+) / 80px (sm). Centered text, max-width 640px.
- **Visual depth** — Floating abstract shapes in the background: 3 semi-transparent white circles (120px, 80px, 200px) at `opacity: 0.05`, positioned randomly, blurred 40px. Subtle animated drift (floating up/down 10px, 8s infinite ease-in-out, staggered). Dot grid overlay same as stats bar.
- **Layout personality** — Oversized heading (48px lg / 32px sm), tight letter-spacing (`-0.02em`). CTA button is white with accent text, large (lg), generous padding (20px 48px), with a glow on hover (`box-shadow: 0 0 40px rgba(255,255,255,0.3)`).
- **Responsive behavior**
  - **sm:** Padding 72px. Heading 28px. Button full-width.
  - **md+:** As described.

### 2.10 Footer

- **Spatial rules** — Background `#111111`. Inner max-width 1280px. Vertical padding: 80px top, 40px bottom. 4-column grid (brand col 1.5fr, others 1fr each), column gap 40px. Bottom row: full-width hairline divider (`rgba(255,255,255,0.08)`), copyright below, padding-top 32px.
- **Visual depth** — Dark footer creates strong contrast with the accent CTA above. Links are `rgba(255,255,255,0.55)`, hover: `rgba(255,255,255,0.95)` with transition 200ms.
- **Responsive behavior**
  - **sm:** Single column stack. Brand column first (logo, tagline, social row). Then link columns stacked with section headers.
  - **md:** 2×2 grid. Brand column spans full width on first row.
  - **lg+:** 4-column grid.

---

## 3. Component Inventory

### Navbar

| Component        | Variant / Detail                                                                                                  | Size          | Section | Props / Config                                                                                                                | Initial State            | Data Binding |
| ---------------- | ----------------------------------------------------------------------------------------------------------------- | ------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------- | ------------------------ | ------------ |
| Logo             | SVG wordmark, horizontal lockup, accent color for logomark                                                        | 28px height   | Navbar  | `src: /logo.svg`, `alt: "Taskly logo"`, link to `/`                                                                          | Visible                  | Static       |
| Nav Link         | Text link, font-weight 500, color `#374151` (gray-700). Hover: color accent-600. Active: underline (2px accent bottom, offset 6px), transition width 200ms ease | 15px          | Navbar  | Labels: "Features", "Pricing", "Blog". Scroll-to-section for Features/Pricing; route for Blog                                | Visible                  | Static       |
| Login Link       | Ghost text link, font-weight 500, color `#6B7280` (gray-500). Hover: color `#111`                                 | 15px          | Navbar  | Label: "Log in", link to `/login`                                                                                             | Visible                  | Static       |
| CTA Button       | Primary, solid fill accent-600, text white, rounded-xl (12px), font-weight 600. Hover: accent-700 + `translateY(-1px)` + shadow `0 4px 12px rgba(79,70,229,0.25)`. Press: `scale(0.97)`. Transition 200ms ease. | md (14px, py 10px px 20px) | Navbar | Label: "Get Started Free", link to `/signup`                                                                                  | Visible                  | Static       |
| Hamburger Icon   | Icon button, 2 lines + dot, 1.5px stroke, gray-700                                                                | 20×20         | Navbar  | `aria-label: "Open menu"`, toggles drawer                                                                                     | Hidden (visible sm only) | Static       |
| Mobile Drawer    | Slide-in from right, width 80vw max 360px, frosted glass bg `rgba(255,255,255,0.92)` + `backdrop-filter: blur(20px)`. Close X top-right (20×20). Links vertical stack, 56px rows, divider `rgba(0,0,0,0.05)`. CTA pinned to bottom. Entry: `translateX(100%) → 0`, 300ms ease-out. Exit: reverse, 200ms. | Full viewport height | Navbar | Same links + CTA. Backdrop overlay `rgba(0,0,0,0.3)` blur 4px. Tap outside or X to close. Trap focus.                       | Hidden                   | Static       |

### Hero Section

| Component          | Variant / Detail                                                                                                                                         | Size                                  | Section | Props / Config                                                                                                                                                             | Initial State | Data Binding |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- | ------------ |
| Eyebrow Badge      | Pill badge, `bg: accent-50`, `text: accent-700`, `border: 1px solid accent-200`, rounded-full, font-weight 600, uppercase tracking-wide. Sparkle icon (✦) left of text, 12px. | 12px text, py 6px px 14px             | Hero    | Text: "✦ NOW WITH AI-POWERED TASK SORTING", link: none                                                                                                                    | Visible       | Static       |
| Headline           | `h1`, font-weight 800, color `#111`, letter-spacing `-0.03em`, line-height 1.08. Mix of weights: "Finally, a to-do app" in weight 800, line break, "that actually works" in weight 800 with "actually" underlined via accent-colored wavy SVG underline decoration (hand-drawn style, 3px thick, accent-400, positioned behind text). | 64px lg / 48px md / 36px sm           | Hero    | Text: "Finally, a to-do app\nthat actually works."                                                                                                                        | Visible       | Static       |
| Subheadline        | `p`, font-weight 400, color `#6B7280` (gray-500), line-height 1.6                                                                                        | 20px lg / 18px md / 17px sm           | Hero    | Text: "Capture tasks in seconds, organize effortlessly, and actually finish your list. No bloat, no learning curve — just clarity." Max-width 560px, centered.             | Visible       | Static       |
| Primary CTA Button | Solid fill, accent-600 → accent-700 gradient (`linear-gradient(180deg, #4F46E5, #4338CA)`), text white, rounded-xl (12px), font-weight 600. Shadow: `0 4px 14px -2px rgba(79,70,229,0.4)`. Hover: `translateY(-2px)`, shadow `0 8px 24px -4px rgba(79,70,229,0.45)`, `scale(1.01)`. Press: `scale(0.97)`, shadow reduced. Transition 200ms ease. | lg (18px text, py 16px px 36px)       | Hero    | Label: "Start Free — No Credit Card", link to `/signup`. Full-width on sm.                                                                                                 | Visible       | Static       |
| Secondary CTA Link | Ghost link, color gray-600, font-weight 500. Right arrow icon (→) with `translateX(0) → 4px` on hover, 200ms ease. Hover: color accent-600.              | md (16px text)                        | Hero    | Label: "See how it works →", smooth-scrolls to Product Showcase section (offset -80px)                                                                                     | Visible       | Static       |
| Trust Micro-text   | `p`, color `gray-400`, font-weight 400                                                                                                                    | 13px                                  | Hero    | Text: "Free forever for individuals · No credit card required · Set up in 30 seconds". Separated by middle dots.                                                           | Visible       | Static       |
| Product Screenshot | Browser mockup frame: rounded-2xl (20px), white toolbar with 3 dots (red/yellow/green, 10px circles), toolbar height 40px, toolbar bg `#F9FAFB`. Screenshot inside. Shadow: `0 25px 60px -12px rgba(0,0,0,0.15), 0 8px 20px -8px rgba(0,0,0,0.08)`. Perspective tilt: `perspective(1200px) rotateX(2deg)`. Accent glow behind: `box-shadow: 0 40px 100px -20px rgba(79,70,229,0.25)`. | Responsive, max 1100px, min 300px     | Hero    | `src: /hero-screenshot.png`, `alt: "Taskly app dashboard showing a clean task list with projects, priorities, and a weekly overview"`, aspect 16:10                        | Visible       | Static       |

### Social Proof Bar

| Component      | Variant / Detail                                                                                                           | Size                       | Section          | Props / Config                                                                        | Initial State | Data Binding |
| -------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------- | ---------------- | ------------------------------------------------------------------------------------- | ------------- | ------------ |
| Section Label  | `p`, uppercase, font-weight 600, letter-spacing `0.08em`, color `gray-400`                                                | 12px                       | Social Proof Bar | Text: "TRUSTED BY 10,000+ TEAMS WORLDWIDE"                                           | Visible       | Static       |
| Client Logo    | Grayscale SVG. `filter: grayscale(100%) opacity(0.4)`. Hover: `grayscale(0%) opacity(1.0)`, transition 400ms ease.         | Height 28px lg / 24px sm, width auto | Social Proof Bar | 6 logos: Vercel, Stripe, Notion, Linear, Shopify, Figma. `alt: "[Company] logo"` each | Visible       | Static       |

### Features Section

| Component          | Variant / Detail                                                                                                                             | Size          | Section  | Props / Config                                                                                                  | Initial State | Data Binding |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------- | ------------- | -------- | --------------------------------------------------------------------------------------------------------------- | ------------- | ------------ |
| Section Heading    | `h2`, font-weight 800, color `#111`, letter-spacing `-0.02em`, line-height 1.15, centered                                                    | 44px lg / 32px sm | Features | Text: "Everything you need.\nNothing you don't."                                                                | Visible       | Static       |
| Section Subheading | `p`, font-weight 400, color gray-500, centered, max-width 520px, line-height 1.6                                                             | 18px lg / 16px sm | Features | Text: "Powerful enough for teams. Simple enough for your morning coffee."                                       | Visible       | Static       |
| Feature Card       | Card: `bg: white`, `border: 1px solid rgba(0,0,0,0.04)`, rounded-2xl (16px), padding 36px. Shadow: `0 1px 3px rgba(0,0,0,0.04)`. Hover: see Layout section. Icon container: 56×56 rounded-xl (12px), `bg: accent-50 (#EEF2FF)`, centered icon, `color: accent-600`. Heading: `h3`, 18px, font-weight 700, color `#111`, margin-top 20px. Body: `p`, 15px, font-weight 400, color gray-500, line-height 1.6, margin-top 8px. | —             | Features | 6 cards (see Content section for details). Icon library: Phosphor Icons, regular weight, 24×24 inside 56×56 box. | Visible       | Static       |

### Product Showcase Section

| Component         | Variant / Detail                                                                                                                                 | Size                                  | Section          | Props / Config                                                                                     | Initial State | Data Binding |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------- | ---------------- | -------------------------------------------------------------------------------------------------- | ------------- | ------------ |
| Showcase Eyebrow  | `p`, uppercase, font-weight 600, letter-spacing `0.06em`, color accent-600                                                                       | 13px                                  | Product Showcase | 3 eyebrows: "ORGANIZE", "COLLABORATE", "ACHIEVE"                                                  | Visible       | Static       |
| Showcase Heading  | `h3`, font-weight 800, color `#111`, letter-spacing `-0.01em`, line-height 1.2                                                                   | 32px lg / 26px sm                     | Product Showcase | 3 headings (see Content section)                                                                   | Visible       | Static       |
| Showcase Body     | `p`, font-weight 400, color gray-500, line-height 1.7                                                                                            | 16px                                  | Product Showcase | 3 body texts (see Content section)                                                                 | Visible       | Static       |
| Bullet Item       | Row: green check-circle icon (Phosphor, fill, 18×18, `#16A34A` green-600) + text, gap 10px, font-weight 500, color gray-700                      | 15px text                             | Product Showcase | 3 bullets per showcase row (see Content section)                                                   | Visible       | Static       |
| Showcase Image    | Rounded-2xl (20px) container, `border: 1px solid rgba(0,0,0,0.06)`, layered shadow `0 24px 48px -12px rgba(0,0,0,0.12), 0 8px 16px -4px rgba(0,0,0,0.06)`. Accent stripe: 4px wide, accent-500, rounded-full, height 60%, vertically centered, on left edge (or right for alternating rows). | Responsive, max 560px, min 280px      | Product Showcase | 3 product screenshots. Aspect 16:10. (see Imagery section for details)                            | Visible       | Static       |

### Stats Bar

| Component    | Variant / Detail                                                                                                | Size          | Section   | Props / Config                                                                                                   | Initial State | Data Binding |
| ------------ | --------------------------------------------------------------------------------------------------------------- | ------------- | --------- | ---------------------------------------------------------------------------------------------------------------- | ------------- | ------------ |
| Stat Number  | `span`, font-weight 800, color white, `font-variant-numeric: tabular-nums`. Count-up animation on scroll-into-view (0 → target, 1.5s, ease-out, triggered once). | 48px lg / 36px sm | Stats Bar | Three stats: "10,000+", "2M+", "99.9%"                                                                          | 0 (pre-animation) | Static  |
| Stat Label   | `p`, font-weight 400, color `rgba(255,255,255,0.7)`, margin-top 8px                                             | 16px lg / 14px sm | Stats Bar | Three labels: "Happy users", "Tasks completed", "Uptime SLA"                                                    | Visible       | Static       |

### Testimonials Section

| Component          | Variant / Detail                                                                                                                                                | Size          | Section       | Props / Config                                                                                                              | Initial State | Data Binding |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- | ------------- | --------------------------------------------------------------------------------------------------------------------------- | ------------- | ------------ |
| Section Heading    | `h2`, font-weight 800, color `#111`, letter-spacing `-0.02em`, centered                                                                                         | 44px lg / 32px sm | Testimonials | Text: "Loved by 10,000+ productive people"                                                                                 | Visible       | Static       |
| Testimonial Card   | `bg: white`, `border: 1px solid rgba(0,0,0,0.05)`, rounded-2xl (16px), padding 36px. Featured card (middle): accent left-border 3px solid accent-500, padding 40px. Decorative quote mark: `"`, font-family Georgia, 120px, color accent-50, `position: absolute`, top 16px, left 24px, `line-height: 1`, `pointer-events: none`. | —             | Testimonials  | 3 cards (see Content section). Middle card visually prominent.                                                              | Visible       | Static       |
| Star Rating        | 5 filled star icons, color `#F59E0B` (amber-500), inline row                                                                                                    | 16×16 each    | Testimonials  | All 5 filled. `aria-label: "5 out of 5 stars"`                                                                              | Visible       | Static       |
| Quote Text         | `p`, font-weight 400, color gray-700, line-height 1.7, italic                                                                                                   | 16px          | Testimonials  | Testimonial quote text (see Content section)                                                                                | Visible       | Static       |
| Avatar             | Circular image, `object-fit: cover`, ring `2px solid white`, shadow `0 2px 4px rgba(0,0,0,0.08)`                                                                | 48×48         | Testimonials  | `alt: "Photo of [Name]"`. Professional headshot.                                                                            | Visible       | Static       |
| Author Name        | `p`, font-weight 700, color `#111`                                                                                                                               | 15px          | Testimonials  | Name text                                                                                                                   | Visible       | Static       |
| Author Role        | `p`, font-weight 400, color gray-500                                                                                                                             | 14px          | Testimonials  | Role and company text                                                                                                       | Visible       | Static       |

### Pricing Teaser Section

| Component          | Variant / Detail                                                                                                                                                      | Size          | Section        | Props / Config                                                                                                                                                                                              | Initial State | Data Binding |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- | -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- | ------------ |
| Section Heading    | `h2`, font-weight 800, color `#111`, letter-spacing `-0.02em`, centered                                                                                               | 44px lg / 32px sm | Pricing Teaser | Text: "Simple, honest pricing"                                                                                                                                                                             | Visible       | Static       |
| Section Subheading | `p`, font-weight 400, color gray-500, centered                                                                                                                        | 18px          | Pricing Teaser | Text: "Start free. Upgrade when your team grows."                                                                                                                                                          | Visible       | Static       |
| Free Pricing Card  | `bg: white`, `border: 1px solid rgba(0,0,0,0.06)`, rounded-2xl (16px), padding 40px                                                                                   | —             | Pricing Teaser | Plan: "Personal", Price: "$0", Period: "forever". 4 features with gray check icons. CTA: outlined button, md, rounded-xl, accent border + text, hover: filled accent bg with white text, 200ms transition. | Visible       | Static       |
| Pro Pricing Card   | `bg: white`, `border: 2px solid accent-500`, rounded-2xl (16px), padding 40px, `transform: scale(1.03)`, `box-shadow: 0 16px 48px -8px rgba(79,70,229,0.15)`. Badge positioned top. | —             | Pricing Teaser | Plan: "Pro", Price: "$6", Period: "/user/month". 6 features with accent check icons. CTA: primary solid button, md, same style as hero CTA. "Most Popular" badge.                                          | Visible       | Static       |
| Popular Badge      | Pill, `bg: accent-500`, color white, rounded-full, font-weight 600, `box-shadow: 0 2px 8px rgba(79,70,229,0.3)`. Position: absolute, top -14px, right 24px.            | 12px, py 4px px 14px | Pricing Teaser | Text: "Most Popular"                                                                                                                                                                                       | Visible       | Static       |
| Price Display      | Number: font-weight 800, color `#111`. Period: font-weight 400, color gray-400, inline                                                                                | Number 48px, period 16px | Pricing Teaser | Free: "$0" + "forever". Pro: "$6" + "/user/month"                                                                                                                                                          | Visible       | Static       |
| Feature List Item  | Row: check-circle icon (16×16) + text, gap 10px. Free: icon gray-400. Pro: icon accent-500.                                                                           | 15px text     | Pricing Teaser | See Content section for feature lists                                                                                                                                                                      | Visible       | Static       |

### Final CTA Section

| Component       | Variant / Detail                                                                                                                | Size                                | Section   | Props / Config                                                                                                              | Initial State | Data Binding |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- | --------- | --------------------------------------------------------------------------------------------------------------------------- | ------------- | ------------ |
| CTA Heading     | `h2`, font-weight 800, color white, letter-spacing `-0.02em`, line-height 1.15, centered                                        | 48px lg / 32px md / 28px sm         | Final CTA | Text: "Your productivity breakthrough\nstarts now."                                                                         | Visible       | Static       |
| CTA Subheading  | `p`, color `rgba(255,255,255,0.75)`, font-weight 400, line-height 1.6, centered, max-width 480px                                | 18px lg / 16px sm                   | Final CTA | Text: "Join 10,000+ people who stopped drowning in tasks and started finishing them."                                       | Visible       | Static       |
| CTA Button      | White bg, accent-600 text, rounded-xl (12px), font-weight 600. Shadow: `0 4px 14px rgba(0,0,0,0.1)`. Hover: `box-shadow: 0 0 40px rgba(255,255,255,0.25)`, `translateY(-2px)`. Press: `scale(0.97)`. Transition 200ms. | lg (18px text, py 16px px 40px)     | Final CTA | Label: "Start Free — No Credit Card", link to `/signup`. Full-width on sm.                                                 | Visible       | Static       |

### Footer

| Component        | Variant / Detail                                                                                    | Size             | Section | Props / Config                                                                                                                                              | Initial State | Data Binding |
| ---------------- | --------------------------------------------------------------------------------------------------- | ---------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- | ------------ |
| Footer Logo      | SVG wordmark, white/light variant                                                                   | 24px height      | Footer  | `src: /logo-light.svg`, `alt: "Taskly logo"`                                                                                                               | Visible       | Static       |
| Tagline          | `p`, color `rgba(255,255,255,0.4)`, font-weight 400                                                 | 14px             | Footer  | Text: "The simplest way to get things done."                                                                                                                | Visible       | Static       |
| Social Icons     | Icon buttons, 20×20, color `rgba(255,255,255,0.4)`. Hover: color white, `translateY(-2px)`, 200ms.  | 20×20            | Footer  | X (Twitter), LinkedIn, GitHub. `aria-label: "Follow us on [platform]"`. Link opens in new tab (`target="_blank"`, `rel="noopener noreferrer"`).              | Visible       | Static       |
| Footer Link      | Text, color `rgba(255,255,255,0.55)`. Hover: color `rgba(255,255,255,0.95)`, transition 200ms.       | 14px             | Footer  | Product: Features, Pricing, Changelog, Integrations. Company: About, Blog, Careers, Contact. Legal: Privacy Policy, Terms of Service.                       | Visible       | Static       |
| Column Header    | `p`, uppercase, font-weight 600, letter-spacing `0.06em`, color `rgba(255,255,255,0.3)`              | 12px             | Footer  | "Product", "Company", "Legal"                                                                                                                               | Visible       | Static       |
| Copyright Text   | `p`, color `rgba(255,255,255,0.3)`, centered                                                         | 13px             | Footer  | Text: "© 2026 Taskly. All rights reserved."                                                                                                                | Visible       | Static       |

---

## 4. Page States

| State              | Detail                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Loading**        | Navbar renders immediately (static HTML). Hero: headline renders as a shimmer block (60% width, 64px height), subheadline as a shimmer block (80% width, 20px height), CTA as a shimmer pill (200px × 52px). Screenshot area: rounded-2xl shimmer rectangle at 16:10 aspect ratio. Shimmer uses animated gradient sweep (`linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)`, `background-size: 200% 100%`, `animation: shimmer 1.5s infinite ease-in-out`). Feature cards: 6 shimmer rectangles matching card dimensions. All shimmer blocks match exact layout positions — zero CLS on hydration. |
| **Empty**          | Not applicable — static marketing page with no user-generated content.                                                                                                                                                                                                                                                                                                                                                            |
| **Populated**      | All sections render with final content and loaded images. Images below the fold lazy-loaded (`loading="lazy"`). Hero screenshot and above-fold content loaded eagerly (`loading="eager"`, `fetchpriority="high"`). Fonts preloaded in `<head>`. Scroll-triggered animations initialized via IntersectionObserver.                                                                                                                   |
| **Error**          | If images fail: alt text on a `bg: gray-100` rounded rectangle at correct aspect ratio, `border: 1px dashed rgba(0,0,0,0.1)`. If SSR/page-level error: minimal centered layout on canvas color — logo (48px), `h1: "Something went wrong"` (32px, weight 700), `p: "We're fixing it. Please try again shortly."` (16px, gray-500), "Reload Page" primary button (md), all vertically centered with 24px spacing. Friendly, not scary. |
| **Unauthorized**   | Not applicable — public page, no gating.                                                                                                                                                                                                                                                                                                                                                                                           |

---

## 5. Content & Copywriting

**Tone:** Confident, concise, warm. No jargon. Active voice. Short punchy sentences. Speak directly ("you", "your"). Lean into the frustration of bloated tools ("finally", "actually") and the relief of simplicity. Personality without being quirky.

### 5.1 Navbar

- **Links:** "Features" · "Pricing" · "Blog"
- **Login link:** "Log in"
- **CTA:** "Get Started Free"

### 5.2 Hero Section

- **Eyebrow badge (12px, uppercase, accent):** "✦ NOW WITH AI-POWERED TASK SORTING"
- **h1 (64px lg / 48px md / 36px sm, weight 800, tracking `-0.03em`):** "Finally, a to-do app\nthat actually works."
  - "actually" has a wavy SVG underline in accent-400, hand-drawn style.
- **Body (20px lg / 18px md / 17px sm, weight 400, gray-500, max-width 560px):** "Capture tasks in seconds, organize effortlessly, and actually finish your list. No bloat, no learning curve — just clarity."
- **Primary CTA:** "Start Free — No Credit Card"
- **Secondary CTA:** "See how it works →"
- **Micro-text (13px, gray-400):** "Free forever for individuals · No credit card required · Set up in 30 seconds"

### 5.3 Social Proof Bar

- **Label (12px, uppercase, gray-400, tracking wide):** "TRUSTED BY 10,000+ TEAMS WORLDWIDE"
- Logos: Vercel, Stripe, Notion, Linear, Shopify, Figma.

### 5.4 Features Section

- **h2 (44px lg / 32px sm, weight 800, tracking `-0.02em`):** "Everything you need.\nNothing you don't."
- **Subheading (18px, gray-500, max-width 520px):** "Powerful enough for teams. Simple enough for your morning coffee."

**6 Feature Cards:**

| # | Icon (Phosphor, regular, 24×24 in 56×56 accent-50 box) | h3 Heading (18px, weight 700) | Body Text (15px, gray-500, ≤100 chars)                                              |
| - | ------------------------------------------------------- | ----------------------------- | ----------------------------------------------------------------------------------- |
| 1 | `Lightning` (⚡)                                         | "Instant Capture"             | "Add tasks in seconds with keyboard shortcuts and natural language dates."           |
| 2 | `CalendarCheck`                                          | "Smart Deadlines"             | "Automatic reminders and a timeline view so nothing slips through."                 |
| 3 | `UsersThree`                                             | "Team Collaboration"          | "Share lists, assign tasks, and leave comments — all in real time."                 |
| 4 | `ArrowsClockwise`                                        | "Recurring Tasks"             | "Set it once, forget it. Daily, weekly, or custom repeat schedules."                |
| 5 | `FolderSimple`                                           | "Projects & Tags"             | "Group tasks into projects and tag them for instant filtering."                     |
| 6 | `Plugs`                                                  | "50+ Integrations"            | "Connect with Slack, Google Calendar, Notion, Zapier, and more."                    |

### 5.5 Product Showcase Section

**Row 1 — Organize**
- **Eyebrow:** "ORGANIZE"
- **h3 (32px, weight 800):** "Your brain's new best friend"
- **Body (16px, gray-500):** "Drag tasks between projects, set priorities, and use smart filters to see exactly what needs attention right now. No more mental juggling."
- **Bullets:** ✓ Drag-and-drop task boards · ✓ Priority levels (P1–P4) · ✓ Smart filters and saved views

**Row 2 — Collaborate**
- **Eyebrow:** "COLLABORATE"
- **h3:** "Teamwork without the meetings"
- **Body:** "Assign tasks, mention teammates, and track progress on a shared dashboard. Everyone stays aligned without a single status update."
- **Bullets:** ✓ Real-time task assignments · ✓ Activity feed and @mentions · ✓ Shared team dashboard

**Row 3 — Achieve**
- **Eyebrow:** "ACHIEVE"
- **h3:** "Watch your progress compound"
- **Body:** "Completion streaks, weekly reports, and visual progress bars turn productivity into a habit you'll actually enjoy."
- **Bullets:** ✓ Daily and weekly streaks · ✓ Automated progress reports · ✓ Visual completion tracking

### 5.6 Stats Bar

- **Stat 1:** "10,000+" / "Happy users"
- **Stat 2:** "2M+" / "Tasks completed"
- **Stat 3:** "99.9%" / "Uptime SLA"

### 5.7 Testimonials Section

- **h2 (44px lg / 32px sm, weight 800):** "Loved by 10,000+ productive people"

**3 Testimonial Cards:**

| # | Quote                                                                                                           | Name             | Role                      |
| - | --------------------------------------------------------------------------------------------------------------- | ---------------- | ------------------------- |
| 1 | "I've tried every to-do app out there. Taskly is the only one that stuck. It's fast, clean, and just works."    | Sarah Chen        | Product Manager, Vercel   |
| 2 | "We replaced three tools with Taskly. Onboarding took five minutes — our team was productive from day one."     | Marcus Rivera     | Engineering Lead, Ramp    |
| 3 | "The recurring tasks feature alone saved me an hour a week. I genuinely can't imagine going back."              | Priya Kapoor      | Freelance Designer        |

### 5.8 Pricing Teaser Section

- **h2 (44px lg / 32px sm, weight 800):** "Simple, honest pricing"
- **Subheading (18px, gray-500):** "Start free. Upgrade when your team grows."

**Personal (Free):**
- Price: "$0" / "forever"
- Features: Up to 3 projects · Unlimited tasks · Reminders & deadlines · Mobile & desktop apps
- CTA: "Get Started Free" (outlined accent button)

**Pro:**
- Price: "$6" / "/user/month"
- Features: Unlimited projects · Team collaboration · Recurring tasks · Priority support · Integrations · Analytics dashboard
- CTA: "Start 14-Day Free Trial" (primary solid button)
- Badge: "Most Popular"

### 5.9 Final CTA Section

- **h2 (48px lg / 32px md / 28px sm, weight 800, white, tracking `-0.02em`):** "Your productivity breakthrough\nstarts now."
- **Body (18px, white at 75% opacity, max-width 480px):** "Join 10,000+ people who stopped drowning in tasks and started finishing them."
- **CTA (white bg, accent text):** "Start Free — No Credit Card"

### 5.10 Footer

- **Tagline (14px, white at 40%):** "The simplest way to get things done."
- **Column headers (12px, uppercase, white at 30%):** "Product" · "Company" · "Legal"
- **Product column:** Features · Pricing · Changelog · Integrations
- **Company column:** About · Blog · Careers · Contact
- **Legal column:** Privacy Policy · Terms of Service
- **Copyright (13px, white at 30%):** "© 2026 Taskly. All rights reserved."

---

## 6. Imagery & Visual Flourishes

| Section              | Purpose      | Type               | Style Direction                                                                                                                                                                        | Aspect Ratio | Sizing Behavior                           | Alt Text Pattern                                                                    |
| -------------------- | ------------ | ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ----------------------------------------- | ----------------------------------------------------------------------------------- |
| Hero                 | Explanation  | Product screenshot | Clean UI screenshot inside a browser mockup frame (white toolbar, 3 colored dots). Light theme, populated with realistic sample data. Slight 3D perspective tilt. Accent glow behind.  | 16:10        | Responsive, max 1100px, min 300px         | "Taskly app dashboard showing a clean task list with projects and priorities"        |
| Social Proof Bar     | Trust        | Company logos       | Grayscale SVGs, desaturated at 40% opacity default, full color on hover. Clean vector, no backgrounds.                                                                                | Varied       | Fixed height 28px lg / 24px sm, auto width | "[Company] logo"                                                                    |
| Feature Cards        | Explanation  | Phosphor icons      | Regular weight, 24×24 icon inside 56×56 rounded-xl accent-50 background. Icon color accent-600. Consistent stroke weight.                                                             | 1:1          | Fixed 56×56 container, 24×24 icon         | "[Feature name] icon"                                                               |
| Showcase Row 1       | Explanation  | Product screenshot | Task board / kanban view. Light theme, populated with sample tasks across columns. In rounded-2xl container with accent stripe and layered shadow.                                     | 16:10        | Responsive, max 560px, min 280px          | "Taskly task board with drag-and-drop project organization"                          |
| Showcase Row 2       | Explanation  | Product screenshot | Team collaboration view — assignments, comments, activity feed, avatars. Light theme.                                                                                                  | 16:10        | Responsive, max 560px, min 280px          | "Taskly team dashboard with task assignments and activity feed"                       |
| Showcase Row 3       | Explanation  | Product screenshot | Analytics / progress dashboard — streaks counter, charts, progress bars, weekly summary. Light theme.                                                                                  | 16:10        | Responsive, max 560px, min 280px          | "Taskly progress dashboard showing completion streaks and weekly reports"             |
| Stats Bar            | Decoration   | None (gradient bg)  | Full-bleed gradient (`135deg, #4F46E5 → #7C3AED`). White dot-grid overlay at 6% opacity.                                                                                              | —            | Full-width                                | —                                                                                   |
| Testimonial Cards    | Social proof | Photo / avatar      | Friendly professional headshots, natural lighting, neutral backgrounds. Circular crop with white ring border and micro shadow.                                                         | 1:1          | Fixed 48×48, circle, object-fit cover     | "Photo of [Name]"                                                                   |
| Final CTA            | Emotion      | None (gradient bg)  | Same gradient as stats bar. 3 floating semi-transparent white circles (`opacity: 0.05`, blurred 40px, slow drift animation). Dot grid overlay.                                        | —            | Full-width                                | —                                                                                   |
| Global (background)  | Decoration   | Gradient orbs       | Large radial gradient orb (400px, accent at 8% opacity, blurred 120px) top-right behind hero. Smaller orb (240px, accent at 6%, blurred 80px) bottom-left behind testimonials.         | —            | Absolute positioned, non-interactive      | —                                                                                   |
| Global (texture)     | Decoration   | Noise/grain overlay | Tiled 400×400 noise PNG, `opacity: 0.03`, `mix-blend-mode: multiply`. Covers entire page.                                                                                             | —            | Full-page, tiled                          | —                                                                                   |

**Visual richness notes:**
- All screenshot images should appear inside styled containers (rounded corners, shadow, optional accent stripe) — never raw floating images.
- The hero screenshot uses a browser mockup frame for maximum realism.
- Background gradient orbs and grain texture create a subtle handcrafted feel that elevates the page beyond a flat template.

---

## 7. Interactions & Micro-interactions

### Interactions

| Trigger                                     | Action / Outcome                                                                                      |
| ------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| Click "Get Started Free" (navbar)           | Navigate to `/signup`                                                                                 |
| Click "Start Free — No Credit Card" (hero)  | Navigate to `/signup`                                                                                 |
| Click "See how it works →"                  | Smooth-scroll to Product Showcase section (offset `-80px` for sticky nav)                             |
| Click "Features" nav link                   | Smooth-scroll to Features section (offset `-80px`)                                                    |
| Click "Pricing" nav link                    | Smooth-scroll to Pricing Teaser section (offset `-80px`)                                              |
| Click "Blog" nav link                       | Navigate to `/blog`                                                                                   |
| Click "Log in" link                         | Navigate to `/login`                                                                                  |
| Click "Get Started Free" (free pricing card) | Navigate to `/signup?plan=personal`                                                                  |
| Click "Start 14-Day Free Trial" (pro card)  | Navigate to `/signup?plan=pro`                                                                        |
| Click "Start Free — No Credit Card" (final CTA) | Navigate to `/signup`                                                                            |
| Click hamburger icon (sm)                   | Open mobile drawer, body scroll locked (`overflow: hidden` on `<body>`)                               |
| Click close (X) or backdrop in mobile drawer | Close drawer, restore body scroll                                                                    |
| Click footer links                          | Navigate to respective routes. Social icons: new tab (`target="_blank"`, `rel="noopener noreferrer"`) |

### Animations & Micro-interactions

| Element                      | Animation                                                                                                                                                                                        | Trigger                  | Purpose      |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------ | ------------ |
| Hero headline                | Fade-in + `translateY(24px → 0)`, `opacity 0 → 1`, 700ms `cubic-bezier(0.16, 1, 0.3, 1)`                                                                                                        | Page load, 0ms delay     | Attention    |
| Hero subheadline             | Same as headline, 150ms delay                                                                                                                                                                    | Page load                | Attention    |
| Hero CTA cluster             | Same, 300ms delay                                                                                                                                                                                | Page load                | Attention    |
| Hero micro-text              | Same, 400ms delay                                                                                                                                                                                | Page load                | Attention    |
| Hero screenshot              | Fade-in + `scale(0.96 → 1.0)` + `translateY(32px → 0)`, 900ms `cubic-bezier(0.16, 1, 0.3, 1)`, 500ms delay                                                                                      | Page load                | Attention    |
| Eyebrow badge                | Fade-in + `translateY(8px → 0)`, 500ms ease-out, 0ms delay (first element)                                                                                                                       | Page load                | Attention    |
| Social proof logos           | Staggered fade-in, `opacity 0 → 1`, 300ms each, 60ms stagger                                                                                                                                    | Scroll into view (0.3)   | Attention    |
| Social proof marquee (sm)    | Infinite horizontal scroll, `translateX(0 → -50%)`, 30s linear, pauses on touch/hover                                                                                                            | Always running           | Continuity   |
| Feature cards                | Staggered fade-in + `translateY(20px → 0)`, 500ms `cubic-bezier(0.16, 1, 0.3, 1)`, 80ms stagger between cards                                                                                    | Scroll into view (0.15)  | Attention    |
| Feature card hover           | `translateY(-4px)`, shadow expands (see Component Inventory), `border-color` shifts to accent-100, 300ms ease-out                                                                                 | Hover                    | Feedback     |
| Showcase rows                | Text side: fade-in + `translateX(-32px → 0)` (or +32px for right-text rows), 600ms ease-out. Image side: fade-in + `translateX(32px → 0)` (or -32px), 600ms ease-out, 150ms delay after text.    | Scroll into view (0.2)   | Continuity   |
| Showcase accent stripe       | `scaleY(0 → 1)`, `transform-origin: center`, 500ms ease-out, 300ms delay after image fade                                                                                                        | Scroll into view         | Delight      |
| Stats bar numbers            | Count-up from 0 to target value, 1.5s, ease-out. Uses `requestAnimationFrame`. Thousand separators added during animation. Fires once.                                                            | Scroll into view (0.5)   | Attention    |
| Testimonial cards            | Staggered fade-in + `translateY(20px → 0)`, 500ms ease-out, 120ms stagger. Middle card delays extra 60ms (offset effect).                                                                         | Scroll into view (0.15)  | Attention    |
| Testimonial carousel (sm)    | Snap-scroll with momentum. Dot indicators: active dot scales `1.0 → 1.3` and fills with accent, 200ms spring.                                                                                    | Swipe / scroll           | Continuity   |
| Pricing cards                | Fade-in + `translateY(20px → 0)`, 500ms ease-out. Pro card: 100ms delay after free card.                                                                                                          | Scroll into view (0.2)   | Attention    |
| Pro card "Most Popular" badge | Subtle pulse: `scale(1.0 → 1.06 → 1.0)`, 2.5s infinite, ease-in-out                                                                                                                            | Always (when visible)    | Attention    |
| Pricing CTA buttons hover    | Outlined (free): fill `accent-600` bg, text → white, 200ms ease. Solid (pro): `translateY(-2px)`, shadow increase, 200ms ease.                                                                    | Hover                    | Feedback     |
| All CTA buttons press        | `scale(0.97)`, 100ms ease                                                                                                                                                                        | Active / mousedown       | Feedback     |
| Nav links hover              | Underline `width 0% → 100%`, 2px height, accent-500, from left, 200ms ease                                                                                                                       | Hover                    | Feedback     |
| Client logos hover           | `grayscale(100%) opacity(0.4) → grayscale(0%) opacity(1.0)`, 400ms ease                                                                                                                          | Hover                    | Feedback     |
| Mobile drawer                | Entry: `translateX(100% → 0)`, 300ms ease-out. Backdrop: `opacity 0 → 1`, 200ms. Links: stagger fade-in 50ms each. Exit: reverse, 200ms.                                                         | Hamburger tap / close    | Continuity   |
| Scroll-to-section            | `scroll-behavior: smooth`, approx 500ms                                                                                                                                                          | Nav link / CTA click     | Continuity   |
| Final CTA section            | Fade-in + `translateY(16px → 0)`, 600ms ease-out                                                                                                                                                  | Scroll into view (0.3)   | Attention    |
| Final CTA floating circles   | Gentle vertical drift: `translateY(0 → -10px → 0)`, 8s infinite ease-in-out. Each circle staggered by 2s.                                                                                        | Always (when visible)    | Delight      |
| Navbar scroll shadow         | `box-shadow: none → 0 1px 3px rgba(0,0,0,0.04)`, 300ms ease, triggered when `scrollY > 8px`                                                                                                      | Scroll > 8px             | Feedback     |
| "actually" underline (hero)  | SVG stroke-dasharray animation: draws on from left to right, 600ms ease-out, 800ms delay (after headline settles)                                                                                  | Page load                | Delight      |

### Signature Moment

The **hero headline underline** is the page's signature detail: the word "actually" gets a hand-drawn wavy SVG underline that animates in with a drawing stroke effect (stroke-dashoffset from full length to 0). This creates an instantly memorable, personality-rich moment that feels crafted — not templated. Combined with the perspective-tilted browser mockup below and the floating accent glow, the hero section reads like a Dribbble top shot.

### Motion Principles

- All scroll-triggered animations fire **once only** (no re-trigger on scroll back). Use IntersectionObserver with `{ once: true }`.
- `prefers-reduced-motion: reduce` → disable all animations and transitions, show final state immediately. Count-up shows final number instantly.
- No animation exceeds 900ms. Most hover transitions ≤ 300ms.
- Easing: use `cubic-bezier(0.16, 1, 0.3, 1)` (smooth deceleration) for entrances, `ease-out` for hovers, `ease` for loops.
- All interactive elements have visible focus states: `outline: 2px solid accent-500`, `outline-offset: 2px`, `border-radius: 8px` (custom, not browser default).

---

*End of page detail.*
