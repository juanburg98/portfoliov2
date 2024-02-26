/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        mono: '"Montserrat", sans-serif',
      },
      colors: {
        primary: "#ededed", // title
        secondary: "#a1a1a1", // text
        tertiary: "#333333", // borders
        quaternary: "#ffffff", // hover
        quinary: "#0a0a0a", // text
        sixtenary: "#0070f3", // detail
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
      width: {
        100: "650px",
      },
    },
  },
  plugins: [],
};
