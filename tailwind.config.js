/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "0 0 30px 0 hsl(150, 100%, 66%)",
      },
    },

    colors: {
      "primary-cyan": "hsl(193, 38%, 86%)",
      "primary-neon": "hsl(150, 100%, 66%)",
      "grayish-blue": "hsl(217, 19%, 38%)",
      "dark-grayish-blue": "hsl(217, 19%, 24%)",
      "dark-blue": "hsl(218, 23%, 16%)",
    },
  },
  plugins: [],
};
