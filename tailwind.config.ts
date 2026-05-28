import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "hsl(var(--bg) / <alpha-value>)",
          subtle: "hsl(var(--bg-subtle) / <alpha-value>)",
          elevated: "hsl(var(--bg-elevated) / <alpha-value>)",
        },
        fg: {
          DEFAULT: "hsl(var(--fg) / <alpha-value>)",
          muted: "hsl(var(--fg-muted) / <alpha-value>)",
          subtle: "hsl(var(--fg-subtle) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "hsl(var(--accent) / <alpha-value>)",
          fg: "hsl(var(--accent-fg) / <alpha-value>)",
          2: "hsl(var(--accent-2) / <alpha-value>)",
        },
        cyan: "hsl(var(--accent-3) / <alpha-value>)",
        border: "hsl(var(--border) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui"],
        body: ["var(--font-body)", "ui-sans-serif", "system-ui"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      animation: {
        "fade-in": "fade-in 0.6s ease-out",
        "fade-up": "fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
        "marquee": "marquee 30s linear infinite",
        "shimmer": "shimmer 2s linear infinite",
      },
      keyframes: {
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "marquee": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "shimmer": {
          from: { backgroundPosition: "200% 0" },
          to: { backgroundPosition: "-200% 0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
