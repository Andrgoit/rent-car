/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blue_primary: "#3470FF",
        blue_secondary: "#0B44CD",
        text_header: "#121417",
        text_primaty: "rgba(138, 138, 137, 1)",
        select_bg: "#F7F7FB",
      },
    },
  },
  plugins: [],
};
