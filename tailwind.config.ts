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
          DEFAULT: "oklch(var(--tw-bg) / <alpha-value>)",
          subtle: "oklch(var(--tw-bg-subtle) / <alpha-value>)",
          elevated: "oklch(var(--tw-bg-elevated) / <alpha-value>)",
        },
        fg: {
          DEFAULT: "oklch(var(--tw-fg) / <alpha-value>)",
          muted: "oklch(var(--tw-fg-muted) / <alpha-value>)",
          subtle: "oklch(var(--tw-fg-subtle) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "oklch(var(--tw-accent) / <alpha-value>)",
          fg: "oklch(var(--tw-accent-fg) / <alpha-value>)",
          2: "oklch(var(--tw-accent-2) / <alpha-value>)",
        },
        cyan: "oklch(var(--tw-accent-3) / <alpha-value>)",
        border: "oklch(var(--tw-border) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["var(--font-space-grotesk)", "ui-sans-serif", "system-ui"],
        body: ["var(--font-inter)", "ui-sans-serif", "system-ui"],
        mono: ["var(--font-jetbrains)", "ui-monospace", "monospace"],
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
