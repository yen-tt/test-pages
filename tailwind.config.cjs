module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}",
  // "./node_modules/@yext/chat-ui-react/**"
],
  theme: {
    extend: {
      colors: {
        orange: "#ff9500",
        "dark-orange": "#db8000",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
