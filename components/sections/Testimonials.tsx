"use client";

import { motion } from "framer-motion";

const quotes = [
  {
    text: "Vineet ships work that feels considered from the first frame. The kind of attention you usually have to fight for \u2014 he just brings it.",
    name: "Aria Mehta",
    role: "FOUNDER \u00B7 LUNAR LABS",
  },
  {
    text: "Rare combination of strong taste and strong execution. He pushes back when it matters and ships clean code I\u2019m not afraid to inherit.",
    name: "Marcus Chen",
    role: "ENG. LEAD \u00B7 ORBIT INC",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="section relative">
      <div className="container-page">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="font-mono text-sm uppercase tracking-wider text-fg-subtle"
        >
          05 — Signals from Earth
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 text-balance text-2xl font-medium sm:text-3xl md:text-5xl"
        >
          Kind words from
          <br />
          <span className="accent-text">collaborators.</span>
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1 } },
          }}
          className="mt-12 grid gap-6 md:grid-cols-2"
        >
          {quotes.map((q, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="glass rounded-2xl p-8"
            >
              {/* Large quotation mark */}
              <p className="text-5xl leading-none text-accent/50">
                &ldquo;
              </p>

              {/* Quote text */}
              <p className="mt-4 text-base italic leading-relaxed text-fg-muted">
                {q.text}
              </p>

              {/* Author */}
              <div className="mt-8 flex items-center gap-3">
                {/* Avatar circle */}
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-accent to-accent-2" />
                <div>
                  <p className="text-sm font-medium text-fg">{q.name}</p>
                  <p className="font-mono text-xs uppercase text-fg-subtle">
                    {q.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
