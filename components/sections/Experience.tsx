"use client";

import { motion } from "framer-motion";
import { experience } from "@/content/experience";

export function Experience() {
  return (
    <section id="experience" className="section relative">
      <div className="container-page">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="font-mono text-sm text-fg-subtle"
        >
          // Experience
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-3 text-balance text-2xl font-medium sm:text-3xl md:text-5xl"
        >
          Professional <span className="text-display accent-text">Journey</span>
        </motion.h2>

        <div className="relative mt-14">
          {/* Timeline line */}
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
                {/* Left side: date/period */}
                <div className="md:pr-12 md:text-right">
                  {/* Timeline dot */}
                  <span className="absolute left-3 top-1.5 grid h-3 w-3 -translate-x-1/2 place-items-center rounded-full bg-accent ring-4 ring-bg md:left-1/2" />
                  <p className="font-mono text-sm text-fg-subtle md:pt-1">
                    {exp.period}
                  </p>
                </div>

                {/* Right side: card */}
                <div className="md:pl-12">
                  <div className="glass rounded-2xl p-6">
                    <h3 className="text-xl font-sans font-medium">{exp.role}</h3>
                    <p className="mt-1 text-fg-muted">{exp.company}</p>
                    <p className="mt-4 text-sm text-fg-muted">
                      {exp.summary}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-border/60 px-2.5 py-1 font-mono text-[11px] text-fg-subtle"
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
