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
        'login-btn': "#065DE4"
      }
    },
  },
  plugins: [],
}
