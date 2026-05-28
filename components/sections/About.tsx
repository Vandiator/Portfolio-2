"use client";

import { motion } from "framer-motion";
import { profile } from "@/content/profile";

const stats = [
  { n: "2+", l: "Years Experience" },
  { n: "10+", l: "Projects Completed" },
  { n: "5+", l: "Happy Clients" },
  { n: "3+", l: "Awards Won" },
];

export function About() {
  return (
    <section id="about" className="section relative">
      <div className="container-page">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="font-mono text-sm text-fg-subtle"
        >
          // About Me
        </motion.p>

        <div className="mt-8 grid gap-12 md:grid-cols-2">
          {/* LEFT - portrait placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-center"
          >
            <div className="flex aspect-square w-full max-w-[360px] items-center justify-center rounded-2xl border-2 border-accent/30 bg-gradient-to-br from-bg-elevated to-bg-subtle">
              <span className="text-4xl font-sans text-accent/40">VV</span>
            </div>
          </motion.div>

          {/* RIGHT - text content */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="text-balance text-2xl font-medium leading-tight sm:text-3xl md:text-4xl"
            >
              Passionate about creating{" "}
              <span className="accent-text">meaningful</span> digital
              experiences
            </motion.h2>

            <div className="mt-6 space-y-4 text-base text-fg-muted">
              {profile.bio.map((p, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                >
                  {p}
                </motion.p>
              ))}
            </div>

            {/* Stats grid */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.08 } },
              }}
              className="mt-8 grid grid-cols-2 gap-4"
            >
              {stats.map((s) => (
                <motion.div
                  key={s.l}
                  variants={{
                    hidden: { opacity: 0, y: 12 },
                    show: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <p className="text-2xl font-sans font-semibold text-accent">
                    {s.n}
                  </p>
                  <p className="text-xs uppercase tracking-wider text-fg-subtle">
                    {s.l}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
