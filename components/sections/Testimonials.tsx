"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Prof. Rajesh Kumar",
    role: "Faculty Advisor, GBU",
    quote:
      "Vineet brings a rare combination of technical skill and creative vision to every project. His work on the Smart Campus initiative was exceptional.",
  },
  {
    name: "Ankit Sharma",
    role: "Team Lead, SIH 2024",
    quote:
      "Working with Vineet on the deepfake detection project was a great experience. His frontend skills and attention to detail elevated our entire presentation.",
  },
  {
    name: "Priya Mehta",
    role: "Design Collaborator",
    quote:
      "Vineet has an incredible eye for design. He understands that good UX is about empathy, not just aesthetics. Every interaction feels thoughtful.",
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
          className="font-mono text-sm text-fg-subtle"
        >
          // Testimonials
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-3 text-balance text-2xl font-medium sm:text-3xl md:text-5xl"
        >
          What People <span className="text-display accent-text">Say</span>
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1 } },
          }}
          className="mt-12 grid gap-6 md:grid-cols-3"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="glass rounded-2xl p-6"
            >
              <p className="text-4xl text-accent/40 mb-4">&ldquo;</p>
              <p className="text-sm italic leading-relaxed text-fg-muted">
                {t.quote}
              </p>
              <div className="mt-6">
                <p className="text-sm font-medium text-fg">{t.name}</p>
                <p className="text-xs text-fg-subtle">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
