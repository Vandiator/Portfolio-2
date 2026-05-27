"use client";

import { motion } from "framer-motion";
import { experience } from "@/content/experience";

export function Experience() {
  return (
    <section id="experience" className="section relative">
      <div className="container-page">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-fg-subtle">
          04 — Experience
        </p>
        <h2 className="mt-3 text-balance text-2xl font-medium sm:text-3xl md:text-5xl">
          Where I&apos;ve been{" "}
          <span className="text-display accent-text">building</span>.
        </h2>

        <div className="relative mt-14">
          <div
            aria-hidden
            className="absolute left-3 top-0 h-full w-px bg-border md:left-1/2"
          />
          <ul className="space-y-12">
            {experience.map((exp, i) => (
              <motion.li
                key={exp.company + exp.period}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="relative grid gap-6 md:grid-cols-2"
              >
                <div className="md:pr-12 md:text-right">
                  <span className="absolute left-3 top-1.5 grid h-3 w-3 -translate-x-1/2 place-items-center rounded-full bg-accent ring-4 ring-bg md:left-1/2" />
                  <p className="font-mono text-xs uppercase tracking-wider text-fg-subtle md:pt-1">
                    {exp.period}
                  </p>
                  <p className="mt-1 text-fg-muted">{exp.location}</p>
                </div>

                <div className="md:pl-12">
                  <div className="rounded-3xl glass p-6 md:p-8">
                    <h3 className="text-xl font-medium md:text-2xl">{exp.role}</h3>
                    <p className="mt-1 text-fg-muted">{exp.company}</p>
                    <p className="mt-4 text-sm text-fg-muted md:text-base">
                      {exp.summary}
                    </p>

                    <ul className="mt-4 space-y-2">
                      {exp.highlights.map((h) => (
                        <li
                          key={h}
                          className="flex gap-3 text-sm text-fg-muted md:text-[15px]"
                        >
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-border/60 bg-bg-elevated/40 px-2.5 py-1 font-mono text-[11px] text-fg-subtle"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
