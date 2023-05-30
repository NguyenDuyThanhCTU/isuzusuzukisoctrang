/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        sora: ["Sora", "sans-serif"],
      },
      colors: {
        violetf9: "#6347F9",
      },
      textColor: {
        gray4a: "#23364A",
        gray5a: "#434E5A",
      },
    },
  },
  plugins: [],
};
