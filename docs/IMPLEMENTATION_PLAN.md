# Implementation Plan — Path B (Pragmatic v1)

**Status:** Active
**Owner:** Vineet Vishwakarma
**Last updated:** 2026-05-18

This document describes how the [SRS](./SRS.md) is being implemented for v1.
It deliberately diverges from the SRS in a few places to ship faster and
cheaper. All visitor-facing requirements remain unchanged.

---

## 1. Scope of v1

### Included
- Hero section with cursor-reactive intro and animated typography (FR-001)
- Projects showcase with category filters (FR-002)
- Resume showcase: timeline view + downloadable PDF (FR-003)
- Skills section with categorized proficiency display (FR-004)
- Contact section with form + social links (FR-005)
- Cursor effects + smooth animations + page transitions (FR-006, FR-007)
- Dark/light mode toggle (FR-009)
- About section + Education + Certifications
- SEO, sitemap, OG images
- Mobile responsive, WCAG AA, Lighthouse > 90

### Deferred to v2
- AI Chatbot (FR-010) — wired in after v1 ships, using Groq + Llama 3.3 (free)
- AI Portfolio Guide (FR-011)
- Animated 3D avatar (FR-008) — v1 uses cinematic typography + cursor effects;
  3D avatar evaluated in v2 once core site is live
- AI content enhancement (FR-012)
- Admin dashboard (FR-013 to FR-018) — replaced by file-based content
- Analytics dashboard (FR-018) — replaced by Vercel Analytics

---

## 2. Architecture changes vs SRS

| SRS says | v1 actually does | Why |
|---|---|---|
| MongoDB Atlas + Mongoose | MDX/JSON files in `/content` | Static data, no DB call per page, faster, free |
| Express backend | Next.js API routes only | One framework, less to maintain |
| Custom admin dashboard with auth | Edit content files + git push | Deploy in 30s, zero security surface |
| Claude Opus 4.1 for chat | Groq + Llama 3.3 70B (v2) | ~$0/month vs $10–50/month |
| Sentry + LogRocket | Vercel Analytics (free) | Sufficient for portfolio scale |
| MongoDB for analytics | Vercel Analytics + Plausible | Privacy-friendly, free |

The visitor experience is identical. Only the backend approach changes.

---

## 3. Tech stack (final, v1)

- **Framework:** Next.js 15 (App Router) + TypeScript (strict)
- **Styling:** Tailwind CSS v4 + CSS variables for theming
- **Animation:** Framer Motion + Lenis (smooth scroll)
- **Icons:** lucide-react
- **Fonts:** Geist Sans + Geist Mono (cinematic display) — self-hosted
- **Content:** TypeScript files in `/content` (typed, no runtime parsing cost)
- **Deployment:** Vercel free tier
- **Domain:** TBD (placeholder: `vineetv.dev`)
- **AI (v2):** Groq SDK + Llama 3.3 70B
- **DB (v2 only, if chat history needed):** Supabase free tier

Total monthly cost target: **0 INR**.

---

## 4. Folder structure

```
Portfolio-2/
├── docs/
│   ├── SRS.md
│   └── IMPLEMENTATION_PLAN.md
├── app/                      # Next.js App Router
│   ├── layout.tsx
│   ├── page.tsx              # one-page portfolio
│   ├── globals.css
│   └── api/                  # (v2) chat endpoint
├── components/
│   ├── sections/             # Hero, About, Skills, Projects, etc.
│   ├── ui/                   # Buttons, cards, primitives
│   └── effects/              # CustomCursor, SmoothScroll, etc.
├── content/
│   ├── profile.ts            # name, bio, links
│   ├── skills.ts
│   ├── experience.ts
│   ├── projects.ts
│   └── education.ts
├── lib/
│   └── utils.ts
├── public/
│   ├── resume.pdf
│   └── og-image.png
├── tailwind.config.ts
├── next.config.ts
└── tsconfig.json
```

---

## 5. Roadmap (revised)

| Phase | Duration | Outcome |
|---|---|---|
| **1. Foundation + sections** | Week 1 | All sections rendered with real content, dark cinematic theme |
| **2. Polish + interactions** | Week 2 | Cursor effects, page transitions, mobile QA, Lighthouse > 90 |
| **3. Launch** | Week 2 | Deploy to Vercel, hook custom domain, Plausible analytics |
| **4. AI chat (v2)** | Week 3 | Groq + RAG over portfolio content, floating widget |

Total to v1 launch: **~2 weeks**. AI chat ships ~3 days after.

---

## 6. Content update workflow

1. Edit a file in `/content/*.ts`
2. `git push` to main
3. Vercel auto-deploys in ~40 seconds
4. Live

That's the entire CMS. If a hosted dashboard is wanted later, Sanity Studio
can be wired up in a day without changing the visitor-facing site.
