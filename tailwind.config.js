/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blue_primary: "#3470FF",
        blue_secondary: "#0B44CD",
        text_header: "#121417",
        text_primaty: "rgba(18, 20, 23, 0.5)",
      },
    },
  },
  plugins: [],
};
