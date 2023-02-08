/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "slide-in": "slide-in .5s ease-in-out",
        "slide-out": "slide-in .5s ease-in-out reverse",
      },
      keyframes: {
        "slide-in": {
          "0%": { transform: "translate(100%)" },
          "100%": { transform: "translate(0%)" },
        },
      },
      transitionProperty: {
        'width': 'width',
      },
      screens: {
        xs: "425px",
        ...defaultTheme.screens,
      },
    },
    colors: {
      "soft-orange": "hsl(35, 77%, 62%)",
      "soft-red": "hsl(5, 85%, 63%)",
      "off-white": "hsl(36, 100%, 99%)",
      "grayish-blue": "hsl(233, 8%, 79%)",
      "dark-grayish-blue": "hsl(236, 13%, 42%)",
      "very-dark-blue": "hsl(240, 100%, 5%)",
      black: "hsl(0, 0%, 0%)",
    },
  },
  plugins: [],
};
