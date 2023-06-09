/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        custom: {
          "almostWhatsapp-1": "#00a884",
          "almostWhatsapp-2": "#008069",
          "owner-message": "#d9fdd3",
          "chat-bg": "#f2f2f2",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms"),],
};