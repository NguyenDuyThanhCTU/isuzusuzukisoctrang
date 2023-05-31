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
        blueAdmin: "#006AFF",
        yelloAdmin: "#F8F7F1",
        grayAdmin: "#A3A3A3",
        grayAdmin1: "#525256",
      },
      textColor: {
        gray4a: "#23364A",
        gray5a: "#434E5A",
      },
    },
  },
  plugins: [],
};
