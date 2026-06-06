/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        popIn: "popIn 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards",
        flicker: "flicker 0.6s infinite alternate",
        floatSlices: "floatSlices 2s ease-in-out infinite alternate",
        floatUp: "floatUp 6s linear infinite",
        bubbleUp: "bubbleUp 6s ease-in infinite",
        fallAndFade: "fallAndFade 4s ease-in-out infinite",
      },
      keyframes: {
        popIn: {
          "0%": { opacity: "0", transform: "scale(0.7)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        flicker: {
          from: { transform: "scale(1) rotate(-2deg)" },
          to: { transform: "scale(1.15) rotate(3deg)" },
        },
        floatSlices: {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(-15px)" },
        },
        floatUp: {
          "0%": { transform: "translateY(0) rotate(0deg)", opacity: "0" },
          "10%": { opacity: "1" },
          "100%": {
            transform: "translateY(-120vh) rotate(360deg)",
            opacity: "0",
          },
        },
        bubbleUp: {
          "0%": { transform: "translateY(0)", opacity: "0" },
          "10%": { opacity: "0.8" },
          "100%": { transform: "translateY(-110vh)", opacity: "0" },
        },
        fallAndFade: {
          "0%": {
            transform: "translateY(-100vh) scale(0.5) rotate(15deg)",
            opacity: "0",
          },
          "15%": {
            opacity: "1",
            transform: "translateY(0) scale(1.1) rotate(-10deg)",
          },
          "30%, 75%": {
            opacity: "1",
            transform: "translateY(0) scale(1) rotate(0deg)",
          },
          "100%": {
            transform: "translateY(100vh) scale(0.8) rotate(20deg)",
            opacity: "0",
          },
        },
      },
    },
  },
  plugins: [],
};
