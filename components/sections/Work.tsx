"use client";

import { motion } from "framer-motion";

const projects = [
  {
    num: "001",
    title: "Project Aurora \u2014 Brand & Product Site",
    description:
      "A full brand identity and marketing site for an early-stage startup. Focus on motion, storytelling, and conversion.",
    tag: "Featured",
    tech: ["NEXT.JS", "FRAMER MOTION", "FIGMA", "SANITY"],
    featured: true,
  },
  {
    num: "002",
    title: "Stellar Analytics",
    description:
      "Real-time analytics dashboard with interactive data visualizations and a dark-first design system.",
    tag: "Web \u00B7 Dashboard",
    tech: ["REACT", "D3", "TAILWIND"],
    featured: false,
  },
  {
    num: "003",
    title: "Nebula \u2014 Meditation App",
    description:
      "A calming meditation experience with breath-synced animations and adaptive soundscapes.",
    tag: "Mobile \u00B7 Concept",
    tech: ["SWIFTUI", "FIGMA", "RIVE"],
    featured: false,
  },
  {
    num: "004",
    title: "Voyage Magazine",
    description:
      "An editorial platform with rich typography, long-form reading modes, and scroll-driven animations.",
    tag: "Web \u00B7 Editorial",
    tech: ["ASTRO", "MDX", "GSAP"],
    featured: false,
  },
];

export function Work() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="work" className="section relative">
      <div className="container-page">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="font-mono text-sm uppercase tracking-wider text-fg-subtle"
        >
          02 — Selected work
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 text-balance text-2xl font-medium sm:text-3xl md:text-5xl"
        >
          Recent <span className="accent-text">trajectories.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 max-w-2xl text-base text-fg-muted"
        >
          A handful of recent missions across product design, web development,
          and creative coding. Each one taught me something new about shape,
          pace, and restraint.
        </motion.p>

        <div className="mt-14 grid grid-cols-12 gap-6">
          {/* Featured project - full width */}
          {featured.map((p, i) => (
            <motion.article
              key={p.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="col-span-12 group overflow-hidden rounded-2xl glass glass-hover p-6"
            >
              <div
                className="relative rounded-xl bg-gradient-to-br from-accent/20 via-accent-2/10 to-bg-elevated flex items-center justify-center"
                style={{ aspectRatio: "21/9" }}
              >
                {/* Decorative glyph */}
                <div className="h-16 w-16 rounded-full border-2 border-accent/30" />
                {/* Project number */}
                <span className="absolute top-4 right-4 font-mono text-xs text-fg-subtle">
                  // {p.num}
                </span>
              </div>
              <div className="mt-5 flex items-center gap-3">
                <span className="rounded-full bg-accent/15 px-3 py-1 font-mono text-[11px] uppercase text-accent">
                  {p.tag}
                </span>
              </div>
              <h3 className="mt-4 text-2xl font-sans font-semibold">
                {p.title}
              </h3>
              <p className="mt-2 text-fg-muted">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border/60 px-2.5 py-1 font-mono text-[11px] text-fg-subtle"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}

          {/* Remaining projects - 6 cols each */}
          {rest.map((p, i) => (
            <motion.article
              key={p.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="col-span-12 md:col-span-6 group overflow-hidden rounded-2xl glass glass-hover p-6"
            >
              <div
                className="relative rounded-xl bg-gradient-to-br from-accent/20 via-accent-2/10 to-bg-elevated flex items-center justify-center"
                style={{ aspectRatio: "16/10" }}
              >
                <div className="h-12 w-12 rounded-full border-2 border-accent/30" />
                <span className="absolute top-4 right-4 font-mono text-xs text-fg-subtle">
                  // {p.num}
                </span>
              </div>
              <div className="mt-4 flex items-center gap-3">
                <span className="rounded-full bg-accent/15 px-3 py-1 font-mono text-[11px] uppercase text-accent">
                  {p.tag}
                </span>
              </div>
              <h3 className="mt-3 text-xl font-sans font-semibold">
                {p.title}
              </h3>
              <p className="mt-2 text-sm text-fg-muted">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border/60 px-2.5 py-1 font-mono text-[11px] text-fg-subtle"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
