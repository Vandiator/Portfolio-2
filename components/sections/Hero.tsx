"use client";

import { Typewriter } from "@/components/effects/Typewriter";

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-grid">
        <div>
          <div className="eyebrow">
            <span className="dot" />
            Available for new orbits &middot; 2025
          </div>
          <h1 className="hero-title">
            Building<br />
            digital <span className="accent-text">universes</span><br />
            one pixel at a time.
          </h1>
          <p className="hero-sub">
            I&apos;m Vineet Vishwakarma — a developer and designer crafting
            interfaces that feel as expansive as the night sky.
          </p>
          <div style={{ marginTop: "1rem", fontFamily: "var(--fm)", fontSize: ".85rem", color: "var(--dim)" }}>
            <Typewriter
              words={["Full-Stack Developer", "UI/UX Designer", "Creative Coder", "Problem Solver"]}
            />
          </div>
          <div className="hero-cta">
            <a href="#work" className="btn btn-primary">
              Explore work <span className="arrow">&rarr;</span>
            </a>
            <a href="#contact" className="btn btn-ghost">Start a project</a>
          </div>
        </div>
        <div className="orbit-stage">
          <div className="orbit-ring" />
          <div className="orbit-ring r2" />
          <div className="orbit-ring r3" />
          <div className="planet" />
        </div>
      </div>
    </section>
  );
}
