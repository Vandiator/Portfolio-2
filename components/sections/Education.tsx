"use client";

import { motion } from "framer-motion";
import { Award, GraduationCap } from "lucide-react";
import {
  certifications,
  education,
  languages,
} from "@/content/education";

export function Education() {
  return (
    <section id="education" className="section relative bg-bg-subtle">
      <div className="container-page">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-fg-subtle">
          05 — Studies
        </p>
        <h2 className="mt-3 text-balance text-2xl font-medium sm:text-3xl md:text-5xl">
          Always a{" "}
          <span className="text-display accent-text">student</span> first.
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {education.map((e, i) => (
            <motion.article
              key={e.degree}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="rounded-3xl glass p-6"
            >
              <div className="flex items-start gap-3">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent">
                  <GraduationCap size={18} />
                </div>
                <div>
                  <h3 className="text-lg font-medium">{e.degree}</h3>
                  <p className="text-sm text-fg-muted">{e.institution}</p>
                  <p className="mt-1 font-mono text-xs uppercase tracking-wider text-fg-subtle">
                    {e.period}
                  </p>
                </div>
              </div>

              {e.details && (
                <p className="mt-4 text-sm text-fg-muted">{e.details}</p>
              )}

              {e.coursework && (
                <div className="mt-5">
                  <p className="font-mono text-[11px] uppercase tracking-wider text-fg-subtle">
                    Relevant Coursework
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {e.coursework.map((c) => (
                      <span
                        key={c}
                        className="rounded-full border border-border/60 bg-bg-elevated/60 px-2.5 py-1 text-xs text-fg-muted"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </motion.article>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl glass p-6"
          >
            <div className="flex items-center gap-2">
              <Award size={16} className="text-accent" />
              <h3 className="font-mono text-xs uppercase tracking-widest text-fg-subtle">
                Awards & Certifications
              </h3>
            </div>
            <ul className="mt-4 space-y-3">
              {certifications.map((c) => (
                <li key={c} className="flex gap-3 text-sm text-fg-muted">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="rounded-3xl glass p-6"
          >
            <h3 className="font-mono text-xs uppercase tracking-widest text-fg-subtle">
              Languages
            </h3>
            <ul className="mt-4 space-y-3">
              {languages.map((l) => (
                <li
                  key={l.name}
                  className="flex items-center justify-between text-sm"
                >
                  <span>{l.name}</span>
                  <span className="font-mono text-xs text-fg-subtle">
                    {l.level}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
