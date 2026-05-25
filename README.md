# Vineet Vishwakarma — AI-Enabled Dynamic Portfolio

> Space-nebula cinematic portfolio with interactive star field, glass cards, and cursor-reactive constellations.

**Live:** Deployed on Vercel (auto-deploys on push to `feat/v1-portfolio-foundation`)  
**Stack:** Next.js 15 · React 19 · TypeScript · Tailwind CSS 3 · Framer Motion 12 · Lenis  
**Branch:** `feat/v1-portfolio-foundation`

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Architecture](#architecture)
3. [File Structure](#file-structure)
4. [Design System](#design-system)
5. [Visual Effects Stack](#visual-effects-stack)
6. [Content Model](#content-model)
7. [What Has Been Built (v1)](#what-has-been-built-v1)
8. [Known Issues & Decisions](#known-issues--decisions)
9. [What's Next (v2 Roadmap)](#whats-next-v2-roadmap)
10. [Development Commands](#development-commands)
11. [Content Update Workflow](#content-update-workflow)

---

## Project Overview

A personal portfolio for **Vineet Vishwakarma** (aka Vandiator) — ML & Software Developer, B.Tech CSE (Machine Learning) at Gautam Buddha University + BS Data Science at IIT Madras.

**Design direction:** Dark space/nebula theme. Not a static résumé — interactive, animated, with a cinematic filmmaker identity. Inspired by:
- [rkworks20.com](https://rkworks20.com/) — professional layout, resume presentation
- [david-hckh.com](https://next.david-hckh.com/) — animated avatar, cursor tracking

**Key decisions made:**
- Dark-only (no light mode — doesn't fit the space theme)
- File-based content (no DB, no CMS — edit TypeScript files, git push, done)
- Zero monthly cost (Vercel free tier, no paid APIs yet)
- AI chatbot deferred to v2 (Groq + Llama 3.3, free tier)

---

## Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    Browser (Client)                      │
├─────────────────────────────────────────────────────────┤
│  Next.js App Router (static pre-render)                 │
│  ├── Framer Motion (scroll reveals, layout animations)  │
│  ├── Lenis (smooth scroll via lerp, no duration easing) │
│  ├── Canvas star field (rAF loop, cursor constellation) │
│  └── CSS nebula mesh (background-position animation)    │
├─────────────────────────────────────────────────────────┤
│  Content Layer: /content/*.ts (typed, imported at build) │
├─────────────────────────────────────────────────────────┤
│  Deployment: Vercel (auto-deploy on git push)           │
└─────────────────────────────────────────────────────────┘
```

**No backend, no database, no auth** in v1. The site is 100% statically pre-rendered at build time. All "dynamic" features (typewriter, star field, cursor) are client-side JS.

---

## File Structure

```
Portfolio-2/
├── app/
│   ├── globals.css           # Tailwind + design tokens + glass/nebula/orb CSS
│   ├── layout.tsx            # Root layout: fonts, meta, effect wrappers
│   └── page.tsx              # Single-page: Hero → Marquee → About → Work → Skills → Experience → Education → Contact
├── components/
│   ├── Avatar.tsx            # Film-viewfinder frame, SVG head with cursor-tracking eyes, typewriter caption
│   ├── Footer.tsx            # Giant outline "vandiator." wordmark, social pills, back-to-top
│   ├── Marquee.tsx           # Infinite scroll marquee with real resume verbs
│   ├── Navbar.tsx            # Sticky glass nav, always-visible, mobile hamburger
│   ├── effects/
│   │   ├── AuroraBackground.tsx   # Gradient mesh + aurora orbs + vignette + grain (z-[-10])
│   │   ├── CustomCursor.tsx       # Inner dot only, raw position (no spring lag), hover label
│   │   ├── ParticleField.tsx      # 140-star canvas: 3 tiers, twinkle, cursor constellation lines
│   │   ├── SmoothScroll.tsx       # Lenis with lerp:0.12 (no duration easing = no jitter)
│   │   ├── Splash.tsx            # Preloader: name reveal + progress bar, once per session
│   │   └── Typewriter.tsx        # Cycling typewriter: type → hold → delete → next word
│   └── sections/
│       ├── About.tsx         # Bio, trait cards (Engineering/Design/Cinema), stats grid, interest pills
│       ├── Contact.tsx       # Email CTA, copy button, social link cards
│       ├── Education.tsx     # Degree cards, coursework pills, awards, languages
│       ├── Experience.tsx    # Vertical timeline with glass body cards
│       ├── Hero.tsx          # Headline, status pill, 2 CTAs, avatar
│       ├── Skills.tsx        # 5-dot proficiency scale, 4 category cards
│       └── Work.tsx          # Filterable project cards (All/ML/Web/UI-UX/Automation)
├── content/
│   ├── education.ts          # Degrees, coursework, certifications, languages, interests
│   ├── experience.ts         # Jobs/internships with highlights + tech
│   ├── profile.ts            # Name, bio, links, availability
│   ├── projects.ts           # Project entries with slug, category, highlights, tech, links
│   └── skills.ts             # Categorized skills with 1-5 proficiency levels
├── docs/
│   ├── SRS.md                # Full Software Requirements Specification (from Claude CLI)
│   └── IMPLEMENTATION_PLAN.md # Path B pragmatic plan
├── lib/
│   └── utils.ts              # cn() helper (clsx + tailwind-merge)
├── public/                   # Static assets (resume.pdf, og-image when ready)
├── tailwind.config.ts        # Custom colors (bg/fg/accent/border tokens), fonts, animations
├── next.config.ts            # Minimal Next.js config
├── tsconfig.json             # Strict TS, path aliases (@/*)
└── package.json              # Dependencies + scripts
```

---

## Design System

### Color Tokens (CSS custom properties in globals.css)

| Token | Value | Usage |
|-------|-------|-------|
| `--bg` | `220 18% 5%` | Page background (near-black with blue tint) |
| `--bg-subtle` | `220 16% 7%` | Section alternate bg |
| `--bg-elevated` | `220 14% 10%` | Card surfaces |
| `--fg` | `30 20% 96%` | Primary text (warm off-white) |
| `--fg-muted` | `30 8% 70%` | Secondary text |
| `--fg-subtle` | `30 6% 50%` | Tertiary text, labels |
| `--accent` | `28 95% 60%` | Warm amber (CTA, highlights, accent glow) |
| `--accent-fg` | `220 18% 5%` | Text on accent bg |
| `--border` | `220 10% 18%` | Card/section borders |

### Fonts

| Variable | Font | Role |
|----------|------|------|
| `--font-sans` | Geist Sans | Body text |
| `--font-mono` | Geist Mono | Code, labels, monospace details |
| `--font-display` | Instrument Serif (italic) | Display headings, accent words |

### Key CSS Utilities

- `.glass` — Frosted card surface (opaque bg + inner highlight, NO backdrop-filter to avoid jank)
- `.glass-hover` — Adds translateY(-2px) + accent border glow on hover
- `.container-page` — Centered max-w-72rem with responsive padding
- `.section` — Standard vertical padding (py-20/28/32)
- `.text-display` — Instrument Serif italic tracking
- `.text-balance` — CSS text-wrap:balance

---

## Visual Effects Stack

Layers from back to front:

| z-index | Element | Technique |
|---------|---------|-----------|
| `-10` | AuroraBackground | CSS: 6-blob nebula mesh (background-position animation 36s), 4 aurora orbs (transform animation), vignette (radial-gradient), grain (SVG noise multiply) |
| `-5` | ParticleField (canvas) | JS: 140 stars, 3 size tiers, per-star twinkle (sin phase), cursor constellation lines within 220px, warm-white color |
| `10` | Main content | All sections + nav |
| `40` | Navbar | Glass surface, always visible (bg/30 at top, bg/75 scrolled) |
| `60` | (reserved for future overlays) | — |
| `100` | CustomCursor | Dot follows raw mouseX/Y, label uses spring |
| `200` | Splash | Full-screen preloader, once per session |

### Performance Notes

- `.glass` cards do NOT use `backdrop-filter` (causes scroll jank when stacked over animated bg)
- Gradient mesh uses `translateZ(0)` + `will-change` to isolate to own compositor layer
- Mesh blur reduced to 48px (from 70px) to save GPU pixels per frame
- Lenis uses `lerp: 0.12` instead of `duration` easing (no growing easing-debt on long pages)
- Star field canvas uses DPR-aware scaling, single rAF loop for all 140 stars

---

## Content Model

All content lives in `/content/*.ts` as typed TypeScript exports. No runtime parsing, no API calls. Edit the file → push → Vercel rebuilds in ~40s.

### profile.ts
```ts
{ name, shortName, title, tagline, location, email, phone, bio[], socials{}, resumeUrl, availability }
```

### projects.ts
```ts
{ slug, title, subtitle, category, period, status, summary, highlights[], tech[], links?, featured? }
```

### experience.ts
```ts
{ role, company, location?, period, summary, highlights[], tech[] }
```

### skills.ts
```ts
{ name: string, items: { name, level: 1-5 }[] }[] // Categorized
```

### education.ts
```ts
{ degree, institution, period, details?, coursework?[] }[]
// + certifications[], interests[], languages[]
```

---

## What Has Been Built (v1)

### Completed ✅

- [x] Next.js 15 App Router scaffold with TypeScript strict mode
- [x] Cinematic dark space theme (single theme, no light mode)
- [x] Splash preloader (name reveal + progress bar, session-only)
- [x] 6-color nebula gradient mesh (animated 36s loop)
- [x] 4 aurora orbs (amber, saffron, ember, gold)
- [x] 140-star canvas field with cursor constellation lines
- [x] Custom cursor (inner dot only, zero-lag raw position)
- [x] Cursor hover labels on interactive elements
- [x] Lenis smooth scroll (lerp-based, no jitter)
- [x] Glass card system (no backdrop-filter, hover lift)
- [x] Hero: animated headline, status pill, 2 CTAs, avatar
- [x] Avatar: film-viewfinder frame, corner brackets, cursor-tracking eyes
- [x] Typewriter: cycling roles below avatar (4 strings, blinking caret)
- [x] Marquee: real resume verbs scrolling infinitely
- [x] About: bio, 3 trait cards, 4 stat cards, interest pills
- [x] Work: filterable projects (All/ML/Web/UI-UX/Automation), glass cards
- [x] Skills: 5-dot proficiency scale, 4 category cards
- [x] Experience: vertical timeline with glass body
- [x] Education: degree cards, coursework pills, awards, languages
- [x] Contact: email CTA, copy button, social link cards
- [x] Footer: giant outline wordmark, social pills, back-to-top
- [x] Navbar: always-visible glass, mobile menu
- [x] SEO: meta tags, OG, robots, viewport
- [x] Mobile responsive across all sections
- [x] Accessibility: prefers-reduced-motion, aria labels, keyboard nav
- [x] Dark grain texture (sparse, multiply blend)
- [x] Deployed to Vercel (auto-deploy on push)

### Content populated ✅
- Real resume data from Vineet's actual CV
- 3 projects (Deepfake Detection, Resource Platform, ERP Automation)
- 1 internship (DAC, GBU)
- 2 degrees (B.Tech + IIT-M BS)
- Full skills inventory with honest levels

---

## Known Issues & Decisions

| Issue | Status | Decision |
|-------|--------|----------|
| Avatar is SVG placeholder, not real photo | Open | Waiting for Vineet to provide a portrait |
| Hero tagline ("patience of a filmmaker") is AI-written | Open | Waiting for Vineet to write his own line |
| No project screenshots | Open | Waiting for Vineet to provide Figma exports / terminal shots |
| "Top — SIH Semi-Finalist" was duplicate | Fixed | Replaced with "5+ Languages" stat, SIH stays in Education awards |
| Light mode looked bad with space theme | Fixed | Removed entirely, dark-only |
| Scroll jitter at bottom of page | Fixed | Lenis duration → lerp, removed backdrop-filter from cards, isolated mesh layer |
| Grain was invisible (behind content) | Fixed | Moved to separate layer, then reverted to subtle static grain |
| Typewriter invisible on mobile | Fixed | Wider caption, smaller tracking |
| Cursor had lag | Fixed | Raw mouseX/Y position, no spring on dot |
| Splash replayed on tab switch | Fixed | sessionStorage flag |

---

## What's Next (v2 Roadmap)

### Priority 1 — Content (blocks shipping quality)
- [ ] Real portrait photo in avatar frame
- [ ] Vineet writes his own hero tagline
- [ ] At least 1 screenshot per project (Figma frame, terminal, browser)
- [ ] Add more projects as Vineet builds them

### Priority 2 — AI Features
- [ ] AI chatbot widget (Groq + Llama 3.3 70B, free tier)
  - RAG over resume + projects content
  - Floating widget, streaming responses
  - System prompt with portfolio context
- [ ] AI portfolio guide (suggest relevant projects based on visitor interest)

### Priority 3 — Polish
- [ ] Shooting star animation (random streak every ~30s)
- [ ] Page transition animations between scroll sections
- [ ] Contact form with Supabase (free tier) for message storage
- [ ] Resume PDF auto-generation from content files
- [ ] OG image generation (Satori/Vercel OG)
- [ ] Analytics (Vercel Analytics, free)
- [ ] Custom domain (vineetv.dev or similar)

### Priority 4 — Future
- [ ] Blog/Notes section (MDX)
- [ ] Photography gallery (cinematic interest showcase)
- [ ] 3D avatar (Three.js/Spline) replacing SVG silhouette
- [ ] Admin dashboard via Sanity Studio (if needed)

---

## Development Commands

```bash
# Install dependencies
npm install

# Run dev server
npm run dev          # → http://localhost:3000

# Production build
npm run build

# Start production server
npm start

# Lint
npm run lint
```

---

## Content Update Workflow

1. Edit a file in `/content/*.ts`
2. `git add . && git commit -m "update: ..." && git push`
3. Vercel auto-deploys in ~40 seconds
4. Live.

That's the entire CMS. No admin panel, no database, no API keys.

---

## Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| next | ^15.1.0 | Framework (App Router, SSR, static export) |
| react / react-dom | ^19.0.0 | UI library |
| framer-motion | ^12.0.0 | Scroll reveals, layout animations, AnimatePresence |
| lenis | ^1.1.18 | Smooth scroll (lerp-based) |
| lucide-react | ^0.469.0 | Icons |
| clsx + tailwind-merge | latest | Utility class composition |
| tailwindcss | ^3.4.17 | Styling |
| typescript | ^5.7.2 | Type safety |

---

## For AI Assistants Reading This

If you're a new AI model picking up this project:

1. **Don't add light mode.** It was tried and removed. The space/nebula theme is dark-only by design decision.
2. **Don't add `backdrop-filter: blur()` to `.glass` cards.** It was the #1 cause of scroll jitter. The current opaque-ish bg approach fakes glass without the GPU cost.
3. **Lenis uses `lerp`, not `duration`.** Duration-based easing causes cumulative lag on long pages. Don't switch back.
4. **Content is in `/content/*.ts`, not a database.** Don't suggest MongoDB/Postgres/Supabase for content storage. Only use a DB if adding chat history or contact form submissions.
5. **The SRS in `docs/SRS.md` is the original spec but v1 intentionally diverges** (see `docs/IMPLEMENTATION_PLAN.md` for Path B decisions).
6. **The accent color is warm amber (28° 95% 60%).** Don't change it without explicit user request.
7. **Star field is in a single canvas at z-[-5].** It uses warm white (`245, 240, 230`) for starlight. Don't re-add the light-mode navy branch.
8. **The splash plays once per session** (sessionStorage). Don't remove this guard.
9. **Vineet's identity: ML & Software Developer, filmmaker/photographer, "Vandiator" alias.** The cinematic angle is real (not a gimmick) — he actually does filmmaking.
10. **The site is deployed on Vercel, branch `feat/v1-portfolio-foundation`.** Push to this branch = auto-deploy.
