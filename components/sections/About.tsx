"use client";

import { motion } from "framer-motion";
import { Camera, Code2, Sparkles } from "lucide-react";
import { profile } from "@/content/profile";
import { interests } from "@/content/education";

const traits = [
  {
    icon: Code2,
    title: "Engineering",
    body: "Frontend, ML pipelines, ERP automation, and the glue in between.",
  },
  {
    icon: Sparkles,
    title: "Design",
    body: "Figma-first systems, accessibility, and details people feel before they notice.",
  },
  {
    icon: Camera,
    title: "Cinema",
    body: "Photography and filmmaking are how I learned to compose anything — including software.",
  },
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
          className="font-mono text-xs uppercase tracking-[0.25em] text-fg-subtle"
        >
          01 — About
        </motion.p>

        <div className="mt-6 grid gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="text-balance text-3xl font-medium leading-tight md:text-5xl"
            >
              An ML undergrad who treats every interface like a
              <span className="text-display italic text-accent"> frame</span> —
              composed, intentional, and quiet enough to disappear into the work.
            </motion.h2>

            <div className="mt-8 space-y-5 text-base text-fg-muted md:text-lg">
              {profile.bio.map((p, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="text-balance"
                >
                  {p}
                </motion.p>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-2">
              {interests.map((i) => (
                <span
                  key={i}
                  className="rounded-full border border-border/70 bg-bg-elevated/50 px-3 py-1 text-xs text-fg-muted"
                >
                  {i}
                </span>
              ))}
            </div>
          </div>

          <div className="md:col-span-5">
            <ul className="space-y-3">
              {traits.map((t, i) => (
                <motion.li
                  key={t.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: 0.1 + i * 0.08 }}
                  className="group rounded-2xl border border-border/60 bg-bg-elevated/30 p-5 transition-colors hover:border-accent/40 hover:bg-bg-elevated/60"
                >
                  <div className="flex items-start gap-4">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-fg">
                      <t.icon size={18} />
                    </div>
                    <div>
                      <h3 className="font-medium">{t.title}</h3>
                      <p className="mt-1 text-sm text-fg-muted">{t.body}</p>
                    </div>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
