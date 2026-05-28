"use client";

import { motion } from "framer-motion";

const stats = [
  { n: "3+", l: "Years building" },
  { n: "20+", l: "Projects shipped" },
  { n: "\u221E", l: "Cups of coffee" },
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
          className="font-mono text-sm uppercase tracking-wider text-fg-subtle"
        >
          01 — Origin story
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 text-balance text-2xl font-medium leading-tight sm:text-3xl md:text-5xl"
        >
          Made of <span className="accent-text">stardust</span>
          <br />
          and stubborn curiosity.
        </motion.h2>

        <div className="mt-12 grid gap-12 md:grid-cols-2">
          {/* LEFT - portrait placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-start justify-center"
          >
            <div
              className="relative w-full max-w-[400px] overflow-hidden rounded-[24px]"
              style={{ aspectRatio: "4/5" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/30 via-accent-2/20 to-bg-elevated" />
              {/* Badge at bottom */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 rounded-xl border border-border/60 bg-bg/80 px-4 py-3 backdrop-blur-sm">
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-accent to-accent-2" />
                <div>
                  <p className="text-sm font-medium text-fg">Vineet V.</p>
                  <p className="font-mono text-xs text-fg-muted">
                    Dev / Design
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT - text content */}
          <div>
            <div className="space-y-5 text-base leading-relaxed text-fg-muted">
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className="text-lg text-fg"
              >
                I&apos;m a self-taught developer with a designer&apos;s eye and a
                builder&apos;s hands. My work sits at the intersection of clean
                engineering and visual storytelling.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Over the years I&apos;ve shipped portfolios, dashboards, landing
                pages, and prototypes for clients and personal experiments. I
                obsess over the small details — the easing of an animation, the
                rhythm of typography, the moment a static layout starts to feel
                alive.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                When I&apos;m not writing code, you&apos;ll find me studying
                generative art, sketching interfaces, or staring at the sky for
                ideas.
              </motion.p>
            </div>

            {/* Stats row */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.08 } },
              }}
              className="mt-10 grid grid-cols-3 gap-6"
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
                  <p className="text-3xl font-sans font-semibold text-accent">
                    {s.n}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-fg-subtle">
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
