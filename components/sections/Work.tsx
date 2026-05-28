"use client";

import { projects } from "@/content/projects";

export function Work() {
  return (
    <section id="work" className="reveal">
      <div className="section-head">
        <p className="section-tag">02 &mdash; Selected work</p>
        <h2>Recent <span className="accent-text">trajectories.</span></h2>
        <p className="section-sub">A handful of missions across product design, development, and creative coding.</p>
      </div>
      <div className="projects">
        {projects.map((p, i) => (
          <article key={p.slug} className={`project${p.featured ? " featured" : ""}`}>
            <div className="project-visual">
              <div className="glyph" />
              <span className="tag">{p.category}</span>
              <span className="pnum">// {String(i + 1).padStart(3, "0")}</span>
            </div>
            <div className="project-body">
              <h3>{p.title}</h3>
              <p>{p.summary}</p>
              <div className="stack">
                {p.tech.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
