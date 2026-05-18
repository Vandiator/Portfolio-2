"use client";

import { motion } from "framer-motion";
import { skills } from "@/content/skills";

function levelLabel(level: number) {
  return ["", "Learning", "Working", "Confident", "Strong", "Expert"][level];
}

export function Skills() {
  return (
    <section id="skills" className="section relative bg-bg-subtle">
      <div className="container-page">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-fg-subtle">
              03 — Toolkit
            </p>
            <h2 className="mt-3 text-balance text-3xl font-medium md:text-5xl">
              Things I reach for{" "}
              <span className="text-display italic text-accent">often</span>.
            </h2>
          </div>
          <p className="max-w-md text-sm text-fg-muted">
            A working snapshot — not a checklist. Levels are honest, not aspirational.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {skills.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="rounded-3xl border border-border/60 bg-bg-elevated/40 p-6 backdrop-blur"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-medium">{cat.name}</h3>
                <span className="font-mono text-xs text-fg-subtle">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <ul className="mt-5 space-y-3">
                {cat.items.map((item) => (
                  <li
                    key={item.name}
                    className="grid grid-cols-[1fr_auto_120px] items-center gap-3"
                  >
                    <span className="text-sm">{item.name}</span>
                    <span className="font-mono text-[11px] uppercase tracking-wider text-fg-subtle">
                      {levelLabel(item.level)}
                    </span>
                    <div
                      aria-hidden
                      className="relative h-1 w-full overflow-hidden rounded-full bg-fg/[0.06]"
                    >
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${(item.level / 5) * 100}%` }}
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-accent/70 to-accent"
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
