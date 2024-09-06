/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "pulse-md": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow": "spin 3s linear infinite",
      },
      backgroundImage: {
        "black-to-transparent":
          "linear-gradient(to bottom, rgba(0, 0, 0, 0.82), rgba(0, 0, 0, 0))",
      },
    },
  },
  plugins: ["@tailwindcss/typography"],
};
