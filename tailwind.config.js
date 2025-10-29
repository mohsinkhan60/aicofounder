/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        cursorRight: {
          "0%": {
            transform: "translate3d(0, 0, 0)",
          },
          "100%": {
            transform: "translate3d(40px, -30px, 30px)",
          },
        },
      },
      animation: {
        "cursor-right": "cursorRight 3s linear alternate infinite",
        "translate-z-ne":
          "translateZNorthEast 2s ease-in-out alternate infinite",
      },
    },
  },
  plugins: [],
};
