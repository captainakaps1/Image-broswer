/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {},
  },
  plugins: [
    require("@fortawesome/fontawesome-free"),
    function ({ addBase, addUtilities, addComponents, e, prefix, config }) {
      addBase({
        "@font-face": {
          fontFamily: "Font Awesome\\ 5 Free",
          fontWeight: "400",
          fontStyle: "normal",
          src: 'url("data:application/x-font-woff2;charset=utf-8;base64,{{ YOUR BASE64 ENCODED FONT DATA HERE }}") format("woff2")',
        },
        ".fa": {
          fontFamily: "Font Awesome\\ 5 Free",
          fontWeight: "400",
          fontStyle: "normal",
          fontVariant: "normal",
          textRendering: "auto",
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
        },
        ".fas:before": {
          content: "attr(data-icon)",
        },
        ".far:before": {
          content: "attr(data-icon)",
        },
        ".fal:before": {
          content: "attr(data-icon)",
        },
        ".fad:before": {
          content: "attr(data-icon)",
        },
      });
    },
  ],
};
