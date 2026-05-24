"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Copy, Github, Linkedin, Mail } from "lucide-react";
import { useState } from "react";
import { profile } from "@/content/profile";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section id="contact" className="section relative">
      <div className="container-page">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-fg-subtle">
              06 — Contact
            </p>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="mt-3 text-balance text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl md:text-6xl"
            >
              Let&apos;s build something{" "}
              <span className="text-display italic text-accent">
                worth remembering
              </span>
              .
            </motion.h2>

            <p className="mt-6 max-w-xl text-base text-fg-muted md:text-lg">
              Internships, collaborations, and conversations welcome. Easiest way
              to reach me is email — I read everything.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href={profile.socials.email}
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-medium text-accent-fg transition-transform hover:scale-[1.02]"
                data-cursor-text="email"
              >
                <Mail size={14} />
                {profile.email}
                <ArrowUpRight
                  size={14}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
              <button
                onClick={copyEmail}
                className="inline-flex items-center justify-center gap-2 rounded-full glass glass-hover px-5 py-3 text-sm font-medium text-fg transition-colors"
                data-cursor-text={copied ? "copied!" : "copy"}
              >
                <Copy size={14} />
                {copied ? "Copied" : "Copy email"}
              </button>
            </div>
          </div>

          <div className="md:col-span-5">
            <ul className="space-y-3">
              {[
                {
                  icon: Github,
                  label: "GitHub",
                  value: "@Vandiator",
                  href: profile.socials.github,
                },
                {
                  icon: Linkedin,
                  label: "LinkedIn",
                  value: "in/vineet-vandiator",
                  href: profile.socials.linkedin,
                },
                {
                  icon: Mail,
                  label: "Phone",
                  value: profile.phone,
                  href: `tel:${profile.phone.replace(/\s+/g, "")}`,
                },
              ].map((row, i) => (
                <motion.li
                  key={row.label}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: 0.05 * i }}
                >
                  <a
                    href={row.href}
                    target={row.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener"
                    className="group flex items-center justify-between rounded-2xl glass glass-hover px-5 py-4 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="grid h-9 w-9 place-items-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-fg">
                        <row.icon size={16} />
                      </div>
                      <div>
                        <p className="font-mono text-[11px] uppercase tracking-widest text-fg-subtle">
                          {row.label}
                        </p>
                        <p className="text-sm">{row.value}</p>
                      </div>
                    </div>
                    <ArrowUpRight
                      size={16}
                      className="text-fg-subtle transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-fg"
                    />
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
