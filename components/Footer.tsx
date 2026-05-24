import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/content/profile";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border/60 bg-bg-subtle">
      {/* Giant outline mark — fills the footer with personality */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -bottom-[10vw] flex select-none justify-center"
      >
        <span
          className="text-display block whitespace-nowrap text-[22vw] italic leading-none text-transparent"
          style={{
            WebkitTextStroke: "1px hsl(var(--fg) / 0.06)",
          }}
        >
          vandiator.
        </span>
      </div>

      <div className="container-page relative py-16">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="text-display text-2xl italic">{profile.name}.</p>
            <p className="mt-2 max-w-xs text-sm text-fg-muted">
              {profile.tagline}
            </p>

            {/* Social row */}
            <div className="mt-6 flex items-center gap-3">
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
                  className="grid h-9 w-9 place-items-center rounded-full border border-border/60 text-fg-muted transition-colors hover:border-accent/50 hover:text-accent"
                >
                  <s.icon size={14} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-fg-subtle">
              Elsewhere
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a
                  href={profile.socials.github}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-2 text-fg-muted transition-colors hover:text-fg"
                >
                  <Github size={14} /> github.com/Vandiator
                </a>
              </li>
              <li>
                <a
                  href={profile.socials.linkedin}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-2 text-fg-muted transition-colors hover:text-fg"
                >
                  <Linkedin size={14} /> linkedin.com/in/vineet-vandiator
                </a>
              </li>
              <li>
                <a
                  href={profile.socials.email}
                  className="inline-flex items-center gap-2 text-fg-muted transition-colors hover:text-fg"
                >
                  <Mail size={14} /> {profile.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-fg-subtle">
              Now
            </p>
            <p className="mt-3 text-sm text-fg-muted">
              {profile.availability}. Based in {profile.location}.
            </p>
            <a
              href="#top"
              className="mt-4 inline-flex items-center gap-1.5 text-sm text-fg-muted transition-colors hover:text-accent"
            >
              Back to top
              <ArrowUpRight size={14} className="-rotate-45" />
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border/40 pt-6 text-xs text-fg-subtle md:flex-row md:items-center">
          <p>
            © {new Date().getFullYear()} {profile.name}. Crafted with intent.
          </p>
          <p className="font-mono">v1.0 · Next.js · Framer Motion · Vercel</p>
        </div>
      </div>
    </footer>
  );
}
