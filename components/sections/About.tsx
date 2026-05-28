"use client";

import { profile } from "@/content/profile";

const stats = [
  { n: "3+", l: "Years building" },
  { n: "20+", l: "Projects shipped" },
  { n: "\u221E", l: "Cups of coffee" },
];

export function About() {
  return (
    <section id="about" className="reveal">
      <div className="section-head">
        <p className="section-tag">01 &mdash; Origin story</p>
        <h2>Made of <span className="accent-text">stardust</span> and stubborn curiosity.</h2>
        <p className="section-sub">A quick look behind the curtain.</p>
      </div>
      <div className="about-grid">
        <div className="about-portrait">
          <div className="badge">
            <div>
              <strong style={{ color: "var(--fg)", fontSize: ".85rem" }}>Vineet V.</strong>
              <span style={{ display: "block", fontFamily: "var(--fm)", fontSize: ".7rem", color: "var(--dim)" }}>Dev / Design</span>
            </div>
          </div>
        </div>
        <div className="about-body">
          {profile.bio.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <div className="stats">
            {stats.map((s) => (
              <div className="stat" key={s.l}>
                <strong>{s.n}</strong>
                <span>{s.l}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
