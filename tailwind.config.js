/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1E2640",
        main: "#FAFAFA",
        input: "#F2F2F2",
      },
    },
  },
  plugins: [],
};
