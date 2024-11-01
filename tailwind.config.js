/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      textColor: ["hover"],
      backgroundColor: ["hover"],
      borderColor: ["hover"],
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
