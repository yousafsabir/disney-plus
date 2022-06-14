/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'login-bg': "url('../src/assets/images/login-background.jpg')",
        'home-bg': "url('../src/assets/images/home-background.png')",
      },
      colors: {
        'login-btn': "#0063E4",
        'body-bg': "#040417"
      }
    },
  },
  plugins: [],
}
