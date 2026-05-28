"use client";

import { experience } from "@/content/experience";

export function Experience() {
  return (
    <section id="experience" className="reveal">
      <div className="section-head">
        <p className="section-tag">04 &mdash; Trajectory</p>
        <h2>Where I&apos;ve <span className="accent-text">orbited.</span></h2>
        <p className="section-sub">Professional experiences and growth.</p>
      </div>
      <div className="timeline">
        {experience.map((item) => (
          <article key={item.period} className="tl-item">
            <p className="tl-date">{item.period}</p>
            <h3 className="tl-title">{item.role}</h3>
            <p className="tl-company">{item.company}{item.location ? ` \u00B7 ${item.location}` : ""}</p>
            <p className="tl-desc">{item.summary}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
