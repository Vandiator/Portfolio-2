"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Code2, Github } from "lucide-react";
import { projects } from "@/content/projects";

export function Work() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="work" className="section relative">
      <div className="container-page">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="font-mono text-sm text-fg-subtle"
        >
          // Featured Projects
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-3 text-balance text-2xl font-medium sm:text-3xl md:text-5xl"
        >
          Selected <span className="text-display accent-text">Works</span>
        </motion.h2>

        <div className="mt-14 space-y-6">
          {/* Featured projects - full width */}
          {featured.map((p, i) => (
            <motion.article
              key={p.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group overflow-hidden rounded-2xl glass glass-hover p-6"
            >
              <div className="h-64 rounded-xl bg-gradient-to-br from-accent/20 via-accent-2/10 to-bg-elevated flex items-center justify-center">
                <Code2 size={48} className="text-accent/30" />
              </div>
              <h3 className="mt-6 text-2xl font-sans font-semibold">{p.title}</h3>
              <p className="mt-2 text-fg-muted">{p.summary}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border/60 px-2.5 py-1 font-mono text-[11px] text-fg-subtle"
                  >
                    {t}
                  </span>
                ))}
              </div>
              {(p.links?.github || p.links?.demo) && (
                <div className="mt-4 flex items-center gap-4">
                  {p.links.github && (
                    <a
                      href={p.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-fg-muted hover:text-fg transition-colors"
                    >
                      <Github size={14} />
                      Code
                    </a>
                  )}
                  {p.links.demo && (
                    <a
                      href={p.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-fg-muted hover:text-fg transition-colors"
                    >
                      <ArrowUpRight size={14} />
                      Live
                    </a>
                  )}
                </div>
              )}
            </motion.article>
          ))}

          {/* Remaining projects - 2 column grid */}
          <div className="grid gap-6 md:grid-cols-2">
            {rest.map((p, i) => (
              <motion.article
                key={p.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group overflow-hidden rounded-2xl glass glass-hover p-6"
              >
                <div className="h-40 rounded-xl bg-gradient-to-br from-accent/20 via-accent-2/10 to-bg-elevated flex items-center justify-center">
                  <Code2 size={36} className="text-accent/30" />
                </div>
                <h3 className="mt-4 text-xl font-sans font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-fg-muted">{p.summary}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border/60 px-2.5 py-1 font-mono text-[11px] text-fg-subtle"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                {(p.links?.github || p.links?.demo) && (
                  <div className="mt-4 flex items-center gap-4">
                    {p.links.github && (
                      <a
                        href={p.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm text-fg-muted hover:text-fg transition-colors"
                      >
                        <Github size={14} />
                        Code
                      </a>
                    )}
                    {p.links.demo && (
                      <a
                        href={p.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm text-fg-muted hover:text-fg transition-colors"
                      >
                        <ArrowUpRight size={14} />
                        Live
                      </a>
                    )}
                  </div>
                )}
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
