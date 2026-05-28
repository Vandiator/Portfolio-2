"use client";

import { motion } from "framer-motion";

const timeline = [
  {
    period: "2024 \u2014 PRESENT",
    title: "Freelance Developer & Designer",
    company: "Independent \u00B7 Remote",
    description:
      "Working with founders and small teams to ship marketing sites, product surfaces, and design systems. Focus on speed without sacrificing craft.",
  },
  {
    period: "2023 \u2014 2024",
    title: "Frontend Developer",
    company: "Studio Project \u00B7 Contract",
    description:
      "Built custom web experiences for early-stage startups. Owned implementation from Figma handoff to deploy, with emphasis on motion and accessibility.",
  },
  {
    period: "2022 \u2014 2023",
    title: "UI Engineer (Intern)",
    company: "Local Agency",
    description:
      "Cut my teeth on production codebases, design tokens, and the discipline of shipping. Learned that good defaults beat clever exceptions.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="section relative">
      <div className="container-page">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="font-mono text-sm uppercase tracking-wider text-fg-subtle"
        >
          04 — Trajectory
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 text-balance text-2xl font-medium sm:text-3xl md:text-5xl"
        >
          Where I&apos;ve <span className="accent-text">orbited.</span>
        </motion.h2>

        {/* LEFT-aligned timeline */}
        <div className="relative mt-14 pl-8">
          {/* Vertical line */}
          <div
            aria-hidden
            className="absolute left-3 top-0 h-full w-px bg-border"
          />

          <ul className="space-y-14">
            {timeline.map((item, i) => (
              <motion.li
                key={item.period}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="relative"
              >
                {/* Dot on the line */}
                <span className="absolute -left-8 top-1.5 grid h-3 w-3 translate-x-[9px] place-items-center rounded-full bg-accent ring-4 ring-bg" />

                {/* Date */}
                <p className="font-mono text-sm text-accent">{item.period}</p>

                {/* Title */}
                <h3 className="mt-2 text-xl font-sans font-medium text-fg">
                  {item.title}
                </h3>

                {/* Company */}
                <p className="mt-1 text-sm text-fg-muted">{item.company}</p>

                {/* Description */}
                <p className="mt-3 text-base leading-relaxed text-fg-muted">
                  {item.description}
                </p>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
