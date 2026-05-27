"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { projects, type Project } from "@/content/projects";
import { cn } from "@/lib/utils";

const categories: (Project["category"] | "All")[] = [
  "All",
  "ML",
  "Web",
  "UI/UX",
  "Automation",
];

export function Work() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");

  const filtered = useMemo(
    () =>
      active === "All"
        ? projects
        : projects.filter((p) => p.category === active),
    [active]
  );

  return (
    <section id="work" className="section relative">
      <div className="container-page">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-fg-subtle">
              02 — Selected work
            </p>
            <h2 className="mt-3 text-balance text-2xl font-medium sm:text-3xl md:text-5xl">
              Projects, in chapters of{" "}
              <span className="text-display accent-text">care</span>.
            </h2>
          </div>

          <div className="flex flex-wrap gap-1 rounded-full glass p-1">
            {categories.map((c) => {
              const isActive = active === c;
              return (
                <button
                  key={c}
                  onClick={() => setActive(c)}
                  className={cn(
                    "relative rounded-full px-3 py-1.5 text-xs font-medium transition-colors",
                    isActive
                      ? "text-accent-fg"
                      : "text-fg-muted hover:text-fg"
                  )}
                  data-cursor-text="filter"
                >
                  {isActive && (
                    <motion.span
                      layoutId="filter-pill"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      className="absolute inset-0 -z-0 rounded-full bg-accent"
                    />
                  )}
                  <span className="relative z-10">{c}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.article
                key={p.slug}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className={cn(
                  "group relative overflow-hidden rounded-3xl glass glass-hover p-6 transition-colors",
                  p.featured && "md:col-span-2"
                )}
              >
                <div className="flex items-center justify-between font-mono text-xs text-fg-subtle">
                  <span>{p.category}</span>
                  <span>{p.period}</span>
                </div>

                <h3 className="mt-6 text-balance text-2xl font-medium md:text-3xl">
                  {p.title}
                </h3>
                <p className="mt-1 text-sm text-fg-muted">{p.subtitle}</p>

                <p className="mt-5 max-w-2xl text-fg-muted">{p.summary}</p>

                <ul className="mt-5 space-y-2">
                  {p.highlights.slice(0, p.featured ? 4 : 2).map((h) => (
                    <li
                      key={h}
                      className="flex gap-3 text-sm text-fg-muted"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border/60 px-2.5 py-1 font-mono text-[11px] text-fg-subtle"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {(p.links?.github || p.links?.demo) && (
                  <div className="mt-6 flex flex-wrap gap-3">
                    {p.links?.github && (
                      <a
                        href={p.links.github}
                        target="_blank"
                        rel="noopener"
                        className="inline-flex items-center gap-1.5 text-sm text-fg-muted transition-colors hover:text-fg"
                      >
                        <Github size={14} /> Code
                      </a>
                    )}
                    {p.links?.demo && (
                      <a
                        href={p.links.demo}
                        target="_blank"
                        rel="noopener"
                        className="inline-flex items-center gap-1.5 text-sm text-fg-muted transition-colors hover:text-fg"
                      >
                        <ArrowUpRight size={14} /> Live
                      </a>
                    )}
                  </div>
                )}

                {/* hover accent */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(600px circle at var(--x, 50%) var(--y, 50%), hsl(var(--accent) / 0.08), transparent 40%)",
                  }}
                />
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
