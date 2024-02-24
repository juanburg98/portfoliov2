const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        serif: '"Source Code Pro", monospace',
      },
      colors: {
        primary: "#ededed", // title
        secondary: "#a1a1a1", // text
        tertiary: "#000000", // bg
        quaternary: "#ffffff", // hover
        quinary: "#0a0a0a",
        sextenary: "#0070f3", // detail
        window1: "#ff5f56",
        window2: "#ffbd2e",
        window3: "#27c93f",
        borderWindow: "#333333",
      },
      borderWidth: {
        1: "1px",
      },
      letterSpacing: {
        title: "-0.80px",
        text: "-0.2px",
      },
      padding: {
        0: "2px",
      },
    },
  },
  plugins: [],
};
