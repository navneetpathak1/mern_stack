<!-- npm init
npm vite
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init

create postcss.config.js and add
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}

in tailwind.congig.js put
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // adjust based on your project
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} -->
