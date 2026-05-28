"use client";

import { testimonials } from "@/content/testimonials";

export function Testimonials() {
  return (
    <section id="testimonials" className="reveal">
      <div className="section-head">
        <p className="section-tag">05 &mdash; Signals from Earth</p>
        <h2>Kind words from <span className="accent-text">collaborators.</span></h2>
        <p className="section-sub">What people say about working together.</p>
      </div>
      <div className="quotes">
        {testimonials.map((q, i) => (
          <article key={i} className="quote">
            <blockquote>&ldquo;{q.quote}&rdquo;</blockquote>
            <div className="quote-by">
              <div className="av" />
              <div>
                <span className="who">{q.name}</span>
                <span className="role" style={{ display: "block" }}>{q.role}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
