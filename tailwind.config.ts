import type { Config } from "tailwindcss";

/**
 * "Timeless Heritage" design system — extracted from the Stitch project
 * (Jane DMC Korea Premium Redesign). Deep forest green primary, muted gold
 * secondary, warm off-white surfaces, Playfair Display + Manrope pairing.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#173124",
        "on-primary": "#ffffff",
        "primary-container": "#2d4739",
        "on-primary-container": "#98b5a3",
        "primary-fixed": "#ccead6",
        "primary-fixed-dim": "#b0cdbb",
        "on-primary-fixed": "#062014",
        secondary: "#755a2c",
        "on-secondary": "#ffffff",
        "secondary-container": "#fdd79f",
        "on-secondary-container": "#785c2f",
        "secondary-fixed": "#ffdead",
        "secondary-fixed-dim": "#e5c18a",
        surface: "#fcf9f8",
        "surface-bright": "#fcf9f8",
        "surface-dim": "#dcd9d9",
        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#f6f3f2",
        "surface-container": "#f0eded",
        "surface-container-high": "#eae7e7",
        "surface-container-highest": "#e5e2e1",
        "surface-variant": "#e5e2e1",
        "on-surface": "#1c1b1b",
        "on-surface-variant": "#424844",
        background: "#fcf9f8",
        "on-background": "#1c1b1b",
        outline: "#727973",
        "outline-variant": "#c2c8c2",
        error: "#ba1a1a",
        "on-error": "#ffffff",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        body: ["var(--font-manrope)", "sans-serif"],
      },
      fontSize: {
        "display-lg": ["48px", { lineHeight: "1.2", letterSpacing: "-0.02em", fontWeight: "700" }],
        "display-lg-mobile": ["36px", { lineHeight: "1.2", fontWeight: "700" }],
        "headline-md": ["32px", { lineHeight: "1.3", fontWeight: "600" }],
        "headline-sm": ["24px", { lineHeight: "1.4", fontWeight: "600" }],
        "body-lg": ["18px", { lineHeight: "1.6", fontWeight: "400" }],
        "body-md": ["16px", { lineHeight: "1.6", fontWeight: "400" }],
        "label-caps": ["12px", { lineHeight: "1.0", letterSpacing: "0.1em", fontWeight: "700" }],
        "label-sm": ["13px", { lineHeight: "1.2", fontWeight: "600" }],
      },
      maxWidth: {
        container: "1280px",
      },
      boxShadow: {
        nav: "0 20px 40px rgba(23,49,36,0.08)",
        soft: "0 10px 30px rgba(23,49,36,0.04)",
        "soft-lg": "0 20px 40px rgba(23,49,36,0.08)",
        card: "0 15px 30px rgba(23,49,36,0.05)",
        cta: "0 10px 20px rgba(0,0,0,0.2)",
      },
      spacing: {
        gutter: "24px",
        "section-gap": "120px",
      },
    },
  },
  plugins: [],
};

export default config;
