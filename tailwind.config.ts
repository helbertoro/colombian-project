import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "#c37f3b",
      secondary: "#6d6b30",
      tertiary: "#bab8ab",
      "hover-accent": "#e9eae5",
      black: "#706d61",
      whatsapp: "#25d366",
    },
    container: {
      center: true,
      padding: "0.5rem",
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-barlow)"],
        serif: ["var(--font-cardo)"],
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#c37f3b",
          secondary: "#6d6b30",
          tertiary: "#bab8ab",
          accent: "#ffffff",
          black: "#706d61",
          neutral: "#6e6f6a",
          "base-100": "#f7f8f3",
          "hover-accent": "#e9eae5",
          info: "#0ca6e9",
          success: "#2bd4bd",
          warning: "#f4c152",
          error: "#fb6f84",
          whatsapp: "#25d366",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
export default config;
