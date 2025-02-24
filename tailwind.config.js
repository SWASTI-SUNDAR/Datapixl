/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3b82f6",
        secondary: "#0F62FE",
        tertiary: "#0A0A0A",
      },
    },
  },
  plugins: [],
};
