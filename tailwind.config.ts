import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      colors: {
        ls: {
          bg: "var(--ls-bg)",
          surface: "var(--ls-surface)",
          alt: "var(--ls-alt)",
          text: "var(--ls-text)",
          muted: "var(--ls-muted)",
          accent: "var(--ls-accent)",
          "accent-strong": "var(--ls-accent-strong)",
          border: "var(--ls-border)",
        },
      },
    },
  },
  plugins: [],
};
export default config;
