const plugin = require("tailwindcss/plugin");

const Myclass = plugin(function ({ addUtilities }) {
  addUtilities({
    ".my-rotate-y-180": {
      transform: "rotateY(180deg)",
    },
    ".preserve-3d": {
      transformStyle: "preserve-3d",
    },
    ".backface-hidden": {
      backfaceVisibility: "hidden",
    },
  });
});

module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      colors: {
        red: "#FF0000",
        darkred: "#CC0000",
        blue: "#3B4CCA",
        yellow: "#ffDE00",
        darkyellow: "#B3A125",
      },
      fontFamily: {
        sans: ["Inter var", "sans-serif"],
        serif: ["Georgia", "serif"],
      },

    },
  },
  plugins: [Myclass],
}