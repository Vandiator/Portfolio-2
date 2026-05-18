import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/content/profile";

export function Footer() {
  return (
    <footer className="relative border-t border-border/60 bg-bg-subtle">
      <div className="container-page py-16">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="text-display text-2xl italic">{profile.name}.</p>
            <p className="mt-2 max-w-xs text-sm text-fg-muted">
              {profile.tagline}
            </p>
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
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border/40 pt-6 text-xs text-fg-subtle md:flex-row md:items-center">
          <p>
            © {new Date().getFullYear()} {profile.name}. Crafted with intent.
          </p>
          <p className="font-mono">v1.0 · Built with Next.js + Framer Motion</p>
        </div>
      </div>
    </footer>
  );
}
