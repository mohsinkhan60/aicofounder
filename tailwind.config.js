/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F2F1EC",
      },
      keyframes: {
        cursorRight: {
          "0%": {
            transform: "translate3d(0, 0, 0)",
          },
          "100%": {
            transform: "translate3d(40px, -30px, 30px)",
          },
        },
        float1: {
          "0%, 100%": {
            transform: "translate3d(0, 0, 0)",
          },
          "50%": {
            transform: "translate3d(20px, -20px, 20px)",
          },
        },
      },
      animation: {
        "cursor-right": "cursorRight 8s linear alternate infinite",
        "translate-z-ne":
          "translateZNorthEast 6s ease-in-out alternate infinite",
        "float-1": "float1 8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
