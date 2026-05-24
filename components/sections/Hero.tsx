"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { profile } from "@/content/profile";
import { Avatar } from "@/components/Avatar";

export function Hero() {
  const heroDelay = 1.6; // wait for splash
  const w = (text: string, base = heroDelay) =>
    text.split(" ").map((word, i) => (
      <motion.span
        key={`${text}-${i}`}
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: base + i * 0.06,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="inline-block whitespace-pre"
      >
        {word}{" "}
      </motion.span>
    ));

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden pb-12 pt-24 md:pt-28"
    >
      <div className="container-page relative">
        <div className="grid items-center gap-10 md:grid-cols-12 md:gap-12">
          {/* LEFT — copy */}
          <div className="md:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: heroDelay - 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-fg-muted"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              <span className="font-mono tracking-wider">{profile.availability}</span>
            </motion.div>

            <h1 className="mt-6 text-balance text-[2.5rem] font-medium leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5rem]">
              {w("I build software")}
              <br />
              {w("with the", heroDelay + 0.18)}{" "}
              <motion.span
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.9,
                  delay: heroDelay + 0.36,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="text-display italic text-accent"
              >
                patience
              </motion.span>{" "}
              {w("of a filmmaker.", heroDelay + 0.46)}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: heroDelay + 0.65 }}
              className="mt-6 max-w-xl text-balance text-base text-fg-muted md:text-lg"
            >
              {profile.bio[0]}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: heroDelay + 0.8 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href="#work"
                className="group inline-flex items-center gap-2 rounded-full bg-fg px-5 py-3 text-sm font-medium text-bg transition-transform hover:scale-[1.03]"
                data-cursor-text="explore"
              >
                See selected work
                <ArrowDown
                  size={14}
                  className="transition-transform group-hover:translate-y-0.5"
                />
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full glass glass-hover px-5 py-3 text-sm font-medium text-fg transition-colors"
                data-cursor-text="say hi"
              >
                Get in touch
                <ArrowUpRight
                  size={14}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
              <span className="ml-1 inline-flex items-center gap-1.5 text-xs text-fg-subtle">
                <Sparkles size={12} className="text-accent" />
                <span className="font-mono uppercase tracking-wider">
                  AI-enabled · v1
                </span>
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: heroDelay + 1 }}
              className="mt-10 flex items-center gap-5 text-fg-muted"
            >
              {[
                { icon: Github, href: profile.socials.github, label: "GitHub" },
                { icon: Linkedin, href: profile.socials.linkedin, label: "LinkedIn" },
                { icon: Mail, href: profile.socials.email, label: "Email" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener"
                  aria-label={s.label}
                  className="transition-colors hover:text-accent"
                  data-cursor-text={s.label.toLowerCase()}
                >
                  <s.icon size={18} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              delay: heroDelay + 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mb-12 md:col-span-5 md:mb-0"
          >
            <Avatar />
          </motion.div>
        </div>

        {/* Meta strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: heroDelay + 1.2 }}
          className="mt-14 hidden items-center justify-between border-t border-border/40 pt-6 font-mono text-xs uppercase tracking-widest text-fg-subtle md:flex"
        >
          <span>{profile.location}</span>
          <span className="hidden md:inline">
            scroll · cinematic portfolio · 2026
          </span>
          <span>{new Date().getFullYear()}</span>
        </motion.div>
      </div>
    </section>
  );
}
