/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        offWhite: "#f5f5f7",
        darkGray: "#1d1d1f",
        lightGray: "#2F2F25",
        blueDark: "#0066cc",
        blueLight: "#2977ff",
      },
      borderRadius: {
        "4xl": "36px",
      },
    },
  },
  plugins: [],
};
