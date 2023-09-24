/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    fontFamily: {
      sans: ["Lato", ...fontFamily.sans],
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "rgba(var(--color-primary), <alpha-value>)",
          hover: "rgba(var(--color-primary-hover), <alpha-value>)",
          dark: "rgba(var(--color-primary-dark), <alpha-value>)",
        },
        positive: {
          DEFAULT: "rgba(var(--color-positive), <alpha-value>)",
          hover: "rgba(var(--color-positive-hover), <alpha-value>)",
        },
        negative: {
          DEFAULT: "rgba(var(--color-negative), <alpha-value>)",
          hover: "rgba(var(--color-negative-hover), <alpha-value>)",
          pressed: "rgba(var(--color-negative-pressed), <alpha-value>)",
        },
        warning: {
          DEFAULT: "rgba(var(--color-warning), <alpha-value>)",
          hover: "rgba(var(--color-warning-hover), <alpha-value>)",
        },
        triarty: {
          white: "rgba(var(--color-triarty), <alpha-value>)",
          hover: "rgba(var(--color-triarty-hover), <alpha-value>)",
          disable: "rgba(var(--color-triarty-disable), <alpha-value>)",
        },
        blacky: {
          DEFAULT: "rgba(var(--color-black), <alpha-value>)",
          50: "rgba(var(--color-black), 0.5)",
          30: "rgba(var(--color-black), 0.3)",
          10: "rgba(var(--color-black), 0.1)",
        },
      },
    },
  },
  plugins: [],
  prefix: "gwk-",
};
