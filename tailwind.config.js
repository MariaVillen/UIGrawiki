/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    fontFamily: {
      sans: ["Lato", ...fontFamily.sans],
    },

    borderRadius: {
      rdsm: "4px",
      rdmd: "8px",
      rdlg: "16px",
      rdxl: "32px",
      rd2xl: "128",
      rd3xl: "360",
      minimal: "4px",
      rounded: "8px",
      full: "50%",
    },
    extend: {
      screens: {
        mobile: "360px",
        // => @media (min-width: 360px) { ... }

        mobilepp: "375px",
        // => @media (min-width: 375px) { ... }

        deskLg: "1920px",
        // => @media (min-width: 1920px) { ... }
      },
      boxShadow: {
        input: "0px 1px 4px 0px rgba(0, 0, 0, 0.25) inset",
        inputReverse: "0px -2px 4px -1px rgba(0,0,0,0.25) inset",
      },
      width: {
        bigBtn: "17.5rem",
        normalBtn: "12.8125rem",
        smallBtn: "7.375rem",
      },
      height: {
        mediumBtn: "2.875rem",
        smallBtn: "2.0625rem",
      },
      colors: {
        surface: {
          primary: {
            DEFAULT: "rgba(var(--color-blue-ligth), <alpha-value> )",
            hover: "rgba(var(--color-blue), <alpha-value>)",
          },
          background: {
            dark: "rgba(var(--color-blue-dark), <alpha-value> )",
          },
          negative: {
            DEFAULT: "rgba(var(--color-red-light), <alpha-value> )",
            hover: "rgba(var(--color-red), <alpha-value> )",
            pressed: "rgba(var(--color-red-dark), <alpha-value> )",
          },
          positive: {
            DEFAULT: "rgba(var(--color-green), <alpha-value> )",
            hover: "rgba(var(--color-green-light), <alpha-value> )",
          },
          warning: {
            DEFAULT: "rgba(var(--color-yellow-ligth), <alpha-value> )",
            hover: "rgba(var(--color-yellow-dark), <alpha-value> )",
          },
          black: {
            DEFAULT: "rgba(var(--color-black), <alpha-value> )",
            50: "rgba(var(--color-black), 0.5 )",
            30: "rgba(var(--color-black), 0.3 )",
            10: "rgba(var(--color-black), 0.1 )",
            light: "rgba(var(--color-black-light), <alpha-value> )",
          },
          triarty: {
            white: "rgba(var(--color-white), <alpha-value> )",
            hover: "rgba(var(--color-grey-light), <alpha-value> )",
            disable: "rgba(var(--color-grey), <alpha-value> )",
          },
        },
        border: {
          grey: "rgba(var(--color-grey-light), <alpha-value> )",
          primary: "rgba(var(--color-blue-ligth), <alpha-value> )",
          positive: "rgba(var(--color-green), <alpha-value> )",
          negative: "rgba(var(--color-red-light), <alpha-value> )",
        },
        text: {
          primary: {
            DEFAULT: "rgba(var(--color-blue-ligth), <alpha-value> )",
            dark: "rgba(var(--color-blue), <alpha-value> )",
          },
          black: "rgba(var(--color-black), <alpha-value> )",
          negative: "rgba(var(--color-red-light), <alpha-value> )",
          white: "rgba(var(--color-white), <alpha-value> )",
          disable: "rgba(var(--color-grey), <alpha-value> )",
        },
      },

      // gradientColorStopPositions: {
      //   bannersm:
      //     "linear-gradient(9.42deg, var(--color-red-light) 23.19%, var(--color-blue-dark) 85.18%)",
      //   bannermd:
      //     "linear-gradient(270deg, var(--color-red-light), var(--color-blue-dark) 98.21%)",
      // },
      gap: {
        0.625: "0.625rem",
      },
      spacing: {
        xs: "var(--spacing-05)",
        sm: "var(--spacing-1)",
        md: "var(--spacing-3)",
        lg: "var(--spacing-4)",
        xl: "var(--spacing-6)",
        s2xl: "var(--spacing-13)",
      },
      fontSize: {
        small: ["14px", { lineHeight: "16.8px" }],
        base: ["16px", { lineHeight: "19.2px" }],
        medium: ["18px", { lineHeight: "21.6px" }],
        big: ["32px", { lineHeight: "38.4px" }],
      },
    },
  },
  plugins: [],
  prefix: "gwk-",
};
