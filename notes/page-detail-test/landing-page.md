# Landing Page — To-Do App SaaS

## 1. Page Metadata

| Field                | Value                                                                                          |
| -------------------- | ---------------------------------------------------------------------------------------------- |
| **Name**             | Landing Page                                                                                   |
| **Route**            | `/`                                                                                            |
| **Purpose**          | Convert visitors into free-trial signups by communicating the app's value, simplicity, and social proof. |
| **Target User**      | Professionals, freelancers, and small-team leads seeking a lightweight task management tool.    |
| **Primary Action**   | Click "Start Free — No Credit Card" CTA to begin signup.                                       |
| **Inbound Links**    | Organic search, paid ads, social media, referral links, blog posts.                            |
| **Outbound Destinations** | `/signup`, `/login`, `/pricing`, `/features`, `/blog`, external social links in footer.   |

---

## 2. Layout Structure

Sections are listed top-to-bottom. The page uses a single-column centered layout with a max-width of **1200px** and horizontal padding of **24px** (sm) / **40px** (md) / **80px** (lg+).

### 2.1 Navbar

- **Spatial rules** — Full-width bar, height 64px, sticky top. Inner content max-width 1200px, centered. Logo left-aligned, nav links center-aligned, CTA button right-aligned. Horizontal gap between nav links: 32px.
- **Responsive behavior**
  - **sm (< 640px):** Nav links and CTA hidden. Hamburger icon (24×24) appears right-aligned. Tap opens full-screen mobile menu overlay with vertical link stack (48px tap targets), CTA at bottom.
  - **md (640–1023px):** Nav links visible, CTA visible. Font size reduced to 14px.
  - **lg+ (≥ 1024px):** Full layout as described.

### 2.2 Hero Section

- **Spatial rules** — Two-column grid: 55% text / 45% visual. Vertical padding: 80px top, 64px bottom. Column gap: 48px. Text column vertically centered. Visual column contains product screenshot.
- **Responsive behavior**
  - **sm:** Single column, text stacked above image. Image max-width 100%, padding 48px top / 40px bottom.
  - **md:** Single column, text above image. Image max-width 480px, centered.
  - **lg+:** Two-column grid as described.

### 2.3 Social Proof Bar

- **Spatial rules** — Full-width muted background band, vertical padding 32px. Inner content: centered row of logo images with 48px horizontal gap. Max 5–6 logos.
- **Responsive behavior**
  - **sm:** Logos in a horizontally scrollable row (overflow-x auto, snap), or 2×3 grid if logos are small. Hide "Trusted by" label.
  - **md:** Single row, logos scale down slightly.
  - **lg+:** Single centered row.

### 2.4 Features Section

- **Spatial rules** — Section heading centered. 3-column grid below, column gap 32px, row gap 48px. Each card: icon top (48×48), heading, body text. Vertical padding: 80px.
- **Responsive behavior**
  - **sm:** Single column stack, cards full-width.
  - **md:** 2-column grid, last card spans full width centered.
  - **lg+:** 3-column grid.

### 2.5 Product Showcase Section

- **Spatial rules** — Alternating two-column rows (text left / image right, then image left / text right). 3 rows total. Column gap: 64px. Row gap: 80px. Vertical padding: 80px. Each row 50/50 split.
- **Responsive behavior**
  - **sm:** Single column, text always above image regardless of desktop order. Row gap: 48px.
  - **md:** Single column, text above image. Image max-width 520px centered.
  - **lg+:** Two-column alternating as described.

### 2.6 Testimonials Section

- **Spatial rules** — Section heading centered. 3-column card grid below, gap 32px. Vertical padding: 80px. Each card: quote text, avatar (48×48 circle), name, role/company.
- **Responsive behavior**
  - **sm:** Horizontal carousel with snap scroll, 1 card visible, dot indicators below.
  - **md:** 2-column grid, third card hidden or second row.
  - **lg+:** 3-column grid.

### 2.7 Pricing Teaser Section

- **Spatial rules** — Centered single column, max-width 720px. Vertical padding: 80px. Heading, subheading, two pricing cards side by side (gap 24px), CTA below cards.
- **Responsive behavior**
  - **sm:** Cards stack vertically. Full-width.
  - **md+:** Cards side by side.

### 2.8 Final CTA Section

- **Spatial rules** — Full-width accent background. Centered text block, max-width 640px. Vertical padding: 96px. Heading, subheading, single CTA button centered.
- **Responsive behavior**
  - **sm:** Padding reduced to 64px. Heading font size scales down (see Content section).
  - **md+:** Full layout.

### 2.9 Footer

- **Spatial rules** — Full-width muted background. Inner max-width 1200px. 4-column grid: Brand column (logo + tagline + social icons), Product links, Company links, Legal links. Column gap 32px. Vertical padding: 64px top, 32px bottom. Bottom row: copyright centered, full-width border-top 1px.
- **Responsive behavior**
  - **sm:** Single column stack. Brand column first, then link columns stacked. Social icons row below logo.
  - **md:** 2×2 grid.
  - **lg+:** 4-column grid.

---

## 3. Component Inventory

### Navbar

| Component       | Variant / Detail                                                                                             | Size | Section | Props / Config                                                                  | Initial State | Data Binding |
| --------------- | ------------------------------------------------------------------------------------------------------------ | ---- | ------- | ------------------------------------------------------------------------------- | ------------- | ------------ |
| Logo            | Image + wordmark, horizontal lockup                                                                         | 32px height | Navbar  | `src: /logo.svg`, `alt: "Taskly logo"`, link to `/`                            | Visible       | Static       |
| Nav Link        | Text link, underline on hover                                                                                | md   | Navbar  | Labels: "Features", "Pricing", "Blog", "Login". Scroll-to-section for Features/Pricing; route for Blog/Login | Visible       | Static       |
| CTA Button      | Primary, solid fill, rounded-full (pill)                                                                     | sm   | Navbar  | Label: "Get Started Free", link to `/signup`                                   | Visible       | Static       |
| Hamburger Icon  | Icon button, 3-line menu icon                                                                                | 24×24 | Navbar  | `aria-label: "Open menu"`, toggles mobile menu overlay                         | Hidden (sm only visible) | Static |
| Mobile Menu     | Full-screen overlay, white background, vertical link stack                                                   | Full | Navbar  | Same links as nav + CTA at bottom, close (X) icon top-right                    | Hidden        | Static       |

### Hero Section

| Component         | Variant / Detail                                                                                   | Size       | Section | Props / Config                                                                                             | Initial State | Data Binding |
| ----------------- | -------------------------------------------------------------------------------------------------- | ---------- | ------- | ---------------------------------------------------------------------------------------------------------- | ------------- | ------------ |
| Headline           | `h1`, bold, dark text                                                                             | 56px lg / 40px md / 32px sm | Hero    | Text: "Get Things Done — Finally."                                                                         | Visible       | Static       |
| Subheadline        | `p`, regular weight, muted text                                                                   | 20px lg / 18px sm | Hero    | Text: "The simple to-do app that helps you focus on what matters. Organize tasks, hit deadlines, and reclaim your day." | Visible | Static |
| Primary CTA Button | Primary, solid fill, rounded-lg                                                                   | lg         | Hero    | Label: "Start Free — No Credit Card", link to `/signup`, full-width on sm                                  | Visible       | Static       |
| Secondary CTA Link | Text link with right-arrow icon                                                                   | md         | Hero    | Label: "See how it works →", smooth-scrolls to Product Showcase section                                    | Visible       | Static       |
| Trust Micro-text   | `p`, small, muted                                                                                 | 14px       | Hero    | Text: "Free forever for individuals. No credit card required."                                             | Visible       | Static       |
| Product Screenshot | Image, rounded-xl, subtle drop shadow (0 8px 32px rgba(0,0,0,0.10))                              | Responsive | Hero    | `src: /hero-screenshot.png`, `alt: "Taskly app dashboard showing organized tasks and projects"`, aspect 16:10 | Visible | Static |

### Social Proof Bar

| Component     | Variant / Detail               | Size       | Section          | Props / Config                                                                 | Initial State | Data Binding |
| ------------- | ------------------------------ | ---------- | ---------------- | ------------------------------------------------------------------------------ | ------------- | ------------ |
| Section Label | `p`, uppercase, small, muted   | 12px       | Social Proof Bar | Text: "TRUSTED BY TEAMS AT"                                                   | Visible       | Static       |
| Client Logo   | Grayscale image, hover: color  | Height 28px, width auto | Social Proof Bar | 5–6 logos. `alt: "[Company] logo"`. Grayscale filter default, color on hover. | Visible       | Static       |

### Features Section

| Component     | Variant / Detail                                            | Size  | Section  | Props / Config | Initial State | Data Binding |
| ------------- | ----------------------------------------------------------- | ----- | -------- | -------------- | ------------- | ------------ |
| Section Heading | `h2`, bold, centered                                      | 40px lg / 32px sm | Features | Text: "Everything You Need, Nothing You Don't" | Visible | Static |
| Section Subheading | `p`, regular, muted, centered, max-width 600px          | 18px  | Features | Text: "Powerful enough for teams. Simple enough for anyone." | Visible | Static |
| Feature Card  | Card with no border, icon top, heading, body               | —     | Features | 6 cards total (see Content section). Each: icon (48×48 line-style), `h3` heading (18px bold), `p` body (16px, muted, max 2 lines ~100 chars) | Visible | Static |

### Product Showcase Section

| Component       | Variant / Detail                                               | Size       | Section          | Props / Config                                                        | Initial State | Data Binding |
| --------------- | -------------------------------------------------------------- | ---------- | ---------------- | --------------------------------------------------------------------- | ------------- | ------------ |
| Showcase Heading | `h3`, bold                                                    | 28px lg / 24px sm | Product Showcase | 3 headings (see Content section)                                     | Visible       | Static       |
| Showcase Body    | `p`, regular, muted                                           | 16px       | Product Showcase | 3 body blocks (see Content section)                                  | Visible       | Static       |
| Showcase Image   | Rounded-xl screenshot with subtle shadow                      | Responsive, max 560px | Product Showcase | 3 images. Aspect 16:10. (see Imagery section)                 | Visible       | Static       |
| Bullet List      | Unordered list with check-circle icons, 3 items per showcase  | 16px       | Product Showcase | Green check icons, 16×16. (see Content section)                      | Visible       | Static       |

### Testimonials Section

| Component        | Variant / Detail                                       | Size       | Section       | Props / Config                                                       | Initial State | Data Binding |
| ---------------- | ------------------------------------------------------ | ---------- | ------------- | -------------------------------------------------------------------- | ------------- | ------------ |
| Section Heading  | `h2`, bold, centered                                   | 40px lg / 32px sm | Testimonials | Text: "Loved by 10,000+ Productive People"                         | Visible       | Static       |
| Testimonial Card | Card, light border (1px), rounded-xl, padding 32px     | —          | Testimonials  | Quote text (italic), 5-star rating row above quote, avatar, name, role | Visible     | Static       |
| Star Rating      | Row of 5 filled star icons, accent color               | 16×16 each | Testimonials  | All 5 filled                                                        | Visible       | Static       |
| Avatar           | Circular image                                          | 48×48      | Testimonials  | `alt: "Photo of [Name]"`, object-fit cover                          | Visible       | Static       |

### Pricing Teaser Section

| Component        | Variant / Detail                                                            | Size       | Section         | Props / Config                                                                         | Initial State | Data Binding |
| ---------------- | --------------------------------------------------------------------------- | ---------- | --------------- | -------------------------------------------------------------------------------------- | ------------- | ------------ |
| Section Heading  | `h2`, bold, centered                                                        | 40px lg / 32px sm | Pricing Teaser | Text: "Simple, Honest Pricing"                                                        | Visible       | Static       |
| Section Subheading | `p`, muted, centered                                                      | 18px       | Pricing Teaser  | Text: "Start free. Upgrade when you're ready."                                         | Visible       | Static       |
| Free Pricing Card | Card, light border, rounded-xl, padding 32px                              | —          | Pricing Teaser  | Plan name: "Personal", Price: "$0", Period: "forever", Feature list: 4 items (see Content), CTA: "Get Started Free" (outlined button, md) | Visible | Static |
| Pro Pricing Card  | Card, accent border (2px), rounded-xl, padding 32px, "Popular" badge top-right | —      | Pricing Teaser  | Plan name: "Pro", Price: "$6", Period: "/user/month", Feature list: 6 items (see Content), CTA: "Start 14-Day Free Trial" (primary button, md) | Visible | Static |
| Popular Badge     | Pill badge, accent background, white text                                  | sm         | Pricing Teaser  | Text: "Most Popular"                                                                   | Visible       | Static       |

### Final CTA Section

| Component       | Variant / Detail                                       | Size       | Section   | Props / Config                                                                 | Initial State | Data Binding |
| --------------- | ------------------------------------------------------ | ---------- | --------- | ------------------------------------------------------------------------------ | ------------- | ------------ |
| CTA Heading     | `h2`, bold, white text                                 | 40px lg / 32px sm | Final CTA | Text: "Your Productivity Breakthrough Starts Now"                             | Visible       | Static       |
| CTA Subheading  | `p`, white/80 opacity                                  | 18px       | Final CTA | Text: "Join 10,000+ people who stopped drowning in tasks and started finishing them." | Visible | Static |
| CTA Button      | Primary, solid fill (white bg, accent text), rounded-lg | lg        | Final CTA | Label: "Start Free — No Credit Card", link to `/signup`, full-width on sm     | Visible       | Static       |

### Footer

| Component       | Variant / Detail                          | Size       | Section | Props / Config                                                                                      | Initial State | Data Binding |
| --------------- | ----------------------------------------- | ---------- | ------- | --------------------------------------------------------------------------------------------------- | ------------- | ------------ |
| Footer Logo     | Image, wordmark                           | 24px height | Footer | `src: /logo-light.svg`, `alt: "Taskly logo"`                                                       | Visible       | Static       |
| Tagline         | `p`, small, muted                         | 14px       | Footer  | Text: "The simplest way to get things done."                                                        | Visible       | Static       |
| Social Icons    | Row of icon buttons (Twitter/X, LinkedIn, GitHub) | 20×20 each | Footer | Links to social profiles. `aria-label: "Follow us on [platform]"`                              | Visible       | Static       |
| Footer Link     | Text link, muted, hover: accent underline | 14px       | Footer  | Grouped by column. Product: Features, Pricing, Changelog, Integrations. Company: About, Blog, Careers, Contact. Legal: Privacy Policy, Terms of Service. | Visible | Static |
| Copyright Text  | `p`, small, muted, centered               | 12px       | Footer  | Text: "© 2026 Taskly. All rights reserved."                                                        | Visible       | Static       |

---

## 4. Page States

| State          | Detail                                                                                                                                                                                            |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Loading**    | Full-page skeleton: Navbar renders immediately (static). Hero headline + CTA render as 2 shimmer blocks (h1 width 60%, paragraph width 80%). Feature cards: 6 skeleton rectangles. Images: grey placeholder rectangles at correct aspect ratio. Testimonials: 3 skeleton cards. |
| **Empty**      | Not applicable — this is a static marketing page with no user-generated content.                                                                                                                 |
| **Populated**  | All sections render with final content, images loaded. Lazy-load images below the fold (Social Proof Bar and below). Hero screenshot and above-fold content loaded eagerly.                       |
| **Error**      | If images fail to load: show alt text on a muted background rectangle at the correct aspect ratio. If the page itself fails (SSR error): render a minimal centered layout with the logo, heading "Something went wrong", body "We're fixing it. Please try again shortly.", and a "Reload Page" primary button. |
| **Unauthorized** | Not applicable — this is a public page. No gating.                                                                                                                                             |

---

## 5. Content & Copywriting

### 5.1 Navbar

- **Links:** "Features" · "Pricing" · "Blog" · "Login"
- **CTA:** "Get Started Free"

### 5.2 Hero Section

- **h1 (56px lg / 40px md / 32px sm):** "Get Things Done — Finally."
- **Body (20px lg / 18px sm, max-width 560px):** "The simple to-do app that helps you focus on what matters. Organize tasks, hit deadlines, and reclaim your day."
- **Primary CTA:** "Start Free — No Credit Card"
- **Secondary CTA:** "See how it works →"
- **Micro-text (14px, muted):** "Free forever for individuals. No credit card required."

### 5.3 Social Proof Bar

- **Label (12px, uppercase, muted):** "TRUSTED BY TEAMS AT"
- Logos for 5–6 recognizable companies (placeholder names: Vercel, Stripe, Notion, Linear, Shopify).

### 5.4 Features Section

- **h2:** "Everything You Need, Nothing You Don't"
- **Subheading:** "Powerful enough for teams. Simple enough for anyone."

**6 Feature Cards:**

| # | Icon (line-style, 48×48) | h3 Heading                  | Body Text (≤100 chars)                                      |
|---|--------------------------|-----------------------------|------------------------------------------------------------|
| 1 | Checklist / checkbox     | "Quick Capture"             | "Add tasks in seconds. Keyboard shortcuts, natural language dates, and zero friction." |
| 2 | Calendar                 | "Smart Deadlines"           | "Automatic reminders and a timeline view so nothing slips through the cracks." |
| 3 | Users / people           | "Team Collaboration"        | "Share lists, assign tasks, and leave comments — all in real time." |
| 4 | Repeat / arrows-circle   | "Recurring Tasks"           | "Set it once, forget it forever. Daily, weekly, or custom repeat schedules." |
| 5 | Layers / stack           | "Projects & Tags"           | "Group tasks into projects and tag them for instant filtering." |
| 6 | Puzzle / integration     | "Integrations"              | "Connect with Slack, Google Calendar, Zapier, and 50+ more tools." |

### 5.5 Product Showcase Section

**Row 1 — Organize**
- **h3:** "Organize Everything in One Place"
- **Body:** "Drag and drop tasks between projects, set priorities, and use smart filters to see exactly what needs your attention right now."
- **Bullets:** ✓ Drag-and-drop task boards · ✓ Priority levels (P1–P4) · ✓ Smart filters and saved views

**Row 2 — Collaborate**
- **h3:** "Collaborate Without the Chaos"
- **Body:** "Assign tasks, mention teammates, and track progress on a shared dashboard. Everyone stays aligned without a single status meeting."
- **Bullets:** ✓ Real-time task assignments · ✓ Activity feed and @mentions · ✓ Shared team dashboard

**Row 3 — Achieve**
- **h3:** "See Your Progress, Stay Motivated"
- **Body:** "Completion streaks, weekly reports, and visual progress bars turn productivity into a habit you actually enjoy."
- **Bullets:** ✓ Daily and weekly streaks · ✓ Automated progress reports · ✓ Visual completion tracking

### 5.6 Testimonials Section

- **h2:** "Loved by 10,000+ Productive People"

**3 Testimonial Cards:**

| # | Quote                                                                                                         | Name            | Role                     |
|---|---------------------------------------------------------------------------------------------------------------|-----------------|--------------------------|
| 1 | "I've tried every to-do app out there. Taskly is the only one that stuck. It's fast, clean, and just works." | Sarah Chen       | Product Manager, Vercel  |
| 2 | "We replaced three tools with Taskly. Onboarding took five minutes — our team was productive on day one."     | Marcus Rivera    | Engineering Lead, Ramp   |
| 3 | "The recurring tasks feature alone saved me an hour a week. I can't imagine going back."                      | Priya Kapoor     | Freelance Designer       |

### 5.7 Pricing Teaser Section

- **h2:** "Simple, Honest Pricing"
- **Subheading:** "Start free. Upgrade when you're ready."

**Personal (Free):**
- $0 / forever
- Features: Up to 3 projects · Unlimited tasks · Reminders & deadlines · Mobile & desktop apps
- CTA: "Get Started Free" (outlined button)

**Pro:**
- $6 / user / month
- Features: Unlimited projects · Team collaboration · Recurring tasks · Priority support · Integrations · Analytics dashboard
- CTA: "Start 14-Day Free Trial" (primary button)
- Badge: "Most Popular"

### 5.8 Final CTA Section

- **h2 (white):** "Your Productivity Breakthrough Starts Now"
- **Body (white/80):** "Join 10,000+ people who stopped drowning in tasks and started finishing them."
- **CTA (white bg, accent text):** "Start Free — No Credit Card"

### 5.9 Footer

- **Tagline:** "The simplest way to get things done."
- **Product column:** Features · Pricing · Changelog · Integrations
- **Company column:** About · Blog · Careers · Contact
- **Legal column:** Privacy Policy · Terms of Service
- **Copyright:** "© 2026 Taskly. All rights reserved."

**Tone:** Confident, concise, conversational. No jargon. Short sentences. Active voice. Speak directly ("you", "your"). Emphasize simplicity and results.

---

## 6. Imagery

| Section            | Purpose        | Type              | Style Direction                                                             | Aspect Ratio | Sizing Behavior                              | Alt Text Pattern                                        |
| ------------------ | -------------- | ----------------- | --------------------------------------------------------------------------- | ------------ | -------------------------------------------- | ------------------------------------------------------- |
| Hero               | Explanation    | Product screenshot | Clean UI screenshot on a light/neutral device mockup, slight angle, shadow  | 16:10        | Responsive, max 560px, min 280px             | "Taskly app dashboard showing organized tasks and projects" |
| Social Proof Bar   | Trust          | Company logos      | Grayscale by default, original color on hover. Clean vector logos.          | Varied       | Fixed height 28px, auto width                | "[Company] logo"                                        |
| Feature Cards      | Explanation    | Line icons         | Consistent 48×48 line-style icons, 2px stroke, accent color                | 1:1          | Fixed 48×48                                  | "[Feature name] icon"                                   |
| Showcase Row 1     | Explanation    | Product screenshot | Screenshot of task board / project view, light theme, populated with sample data | 16:10   | Responsive, max 560px                        | "Taskly task board with drag-and-drop project organization" |
| Showcase Row 2     | Explanation    | Product screenshot | Screenshot of collaboration view — assignments, comments, activity feed     | 16:10        | Responsive, max 560px                        | "Taskly team dashboard with task assignments and activity feed" |
| Showcase Row 3     | Explanation    | Product screenshot | Screenshot of analytics/progress view — streaks, charts, completion bars   | 16:10        | Responsive, max 560px                        | "Taskly progress dashboard showing completion streaks and reports" |
| Testimonial Cards  | Social proof   | Photo / avatar     | Friendly professional headshot, natural lighting, neutral background        | 1:1          | Fixed 48×48, circle crop, object-fit cover   | "Photo of [Name]"                                       |
| Final CTA          | Emotion        | None (color bg)    | Solid accent-color gradient background (left-to-right, accent-500 → accent-600) | —       | Full-width                                   | —                                                       |

---

## 7. Interactions & Micro-interactions

### Interactions

| Trigger                            | Action / Outcome                                                                                 |
| ---------------------------------- | ------------------------------------------------------------------------------------------------ |
| Click "Get Started Free" (navbar)  | Navigate to `/signup`                                                                            |
| Click "Start Free — No Credit Card" (hero) | Navigate to `/signup`                                                                    |
| Click "See how it works →"         | Smooth-scroll to Product Showcase section (offset -80px for sticky nav)                          |
| Click "Features" nav link          | Smooth-scroll to Features section (offset -80px)                                                 |
| Click "Pricing" nav link           | Smooth-scroll to Pricing Teaser section (offset -80px)                                           |
| Click "Blog" nav link              | Navigate to `/blog`                                                                              |
| Click "Login" nav link             | Navigate to `/login`                                                                             |
| Click "Get Started Free" (free card) | Navigate to `/signup?plan=personal`                                                            |
| Click "Start 14-Day Free Trial" (pro card) | Navigate to `/signup?plan=pro`                                                           |
| Click "Start Free — No Credit Card" (final CTA) | Navigate to `/signup`                                                                |
| Click hamburger icon (sm)          | Open mobile menu overlay, body scroll locked                                                     |
| Click close (X) in mobile menu     | Close overlay, restore body scroll                                                               |
| Click footer links                 | Navigate to respective routes or external URLs (social icons open in new tab)                    |

### Animations

| Element                  | Animation                                                                                              | Purpose       |
| ------------------------ | ------------------------------------------------------------------------------------------------------ | ------------- |
| Hero section             | Fade-in + slide-up (20px) on load, 600ms ease-out, 100ms delay between headline/subheadline/CTA       | Attention     |
| Hero screenshot          | Fade-in + scale from 0.95 → 1.0, 800ms ease-out, 200ms delay after CTA                               | Attention     |
| Feature cards            | Staggered fade-in + slide-up (16px) on scroll-into-view (IntersectionObserver, threshold 0.2), 400ms each, 80ms stagger | Attention |
| Showcase rows            | Fade-in + slide-in from respective side (text from left, image from right, or vice versa), 600ms ease-out, triggered on scroll-into-view (threshold 0.3) | Continuity |
| Testimonial cards        | Staggered fade-in + slide-up (16px), 400ms, 100ms stagger, scroll-triggered (threshold 0.2)           | Attention     |
| Pricing cards            | Fade-in + slide-up, 500ms, scroll-triggered                                                           | Attention     |
| Pro card badge           | Subtle pulse animation (scale 1.0 → 1.05 → 1.0), 2s infinite, ease-in-out                            | Attention     |
| CTA buttons (all)        | On hover: scale 1.0 → 1.02, background darken 8%, 150ms ease. On press: scale 0.98, 100ms.           | Feedback      |
| Nav links                | Underline width from 0% → 100% on hover, 200ms ease                                                  | Feedback      |
| Client logos             | Grayscale → color on hover, 300ms ease                                                                | Feedback      |
| Mobile menu overlay      | Slide-in from right, 300ms ease-out. Links stagger fade-in 50ms each.                                | Continuity    |
| Scroll-to-section        | `scroll-behavior: smooth`, duration ~500ms (browser default)                                          | Continuity    |
| Final CTA section        | Fade-in on scroll-into-view, 600ms                                                                    | Attention     |

### Motion Principles

- All scroll-triggered animations fire once (no re-trigger on scroll back).
- `prefers-reduced-motion: reduce` → disable all animations, show final state immediately.
- No animation exceeds 800ms. No decorative animation without purpose.

---

*End of page detail.*
