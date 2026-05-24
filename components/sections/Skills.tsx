"use client";

import { motion } from "framer-motion";
import { skills } from "@/content/skills";

export function Skills() {
  return (
    <section id="skills" className="section relative bg-bg-subtle">
      <div className="container-page">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-fg-subtle">
              03 — Toolkit
            </p>
            <h2 className="mt-3 text-balance text-2xl font-medium sm:text-3xl md:text-5xl">
              Things I reach for{" "}
              <span className="text-display italic text-accent">often</span>.
            </h2>
          </div>
          <p className="max-w-md text-sm text-fg-muted">
            A working snapshot. Five dots, honest scale.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {skills.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className="rounded-3xl glass p-6"
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
                    className="flex items-center justify-between gap-4"
                  >
                    <span className="text-sm">{item.name}</span>
                    <DotScale level={item.level} />
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

/** 5-dot proficiency scale. Filled = accent, empty = muted ring. */
function DotScale({ level }: { level: number }) {
  return (
    <div
      role="img"
      aria-label={`Proficiency ${level} out of 5`}
      className="flex items-center gap-1.5"
    >
      {[1, 2, 3, 4, 5].map((n) => {
        const filled = n <= level;
        return (
          <motion.span
            key={n}
            initial={{ scale: 0.6, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.3, delay: 0.04 * n, ease: "easeOut" }}
            className={
              "h-1.5 w-1.5 rounded-full transition-colors " +
              (filled
                ? "bg-accent shadow-[0_0_6px_hsl(var(--accent)/0.6)]"
                : "bg-fg/15")
            }
          />
        );
      })}
    </div>
  );
}
