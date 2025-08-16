/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx,scss}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          main: '#333333',
          light: '#ebebeb',
          dark: '#333333',
          hover: '#d9d9d9',
          border: '#d9d9d9',
        },
        text: {
          dark: '#333333',
          light: '#ffffff',
          subtle: '#d9d9d9',
          accent: '#d9d9d9'
        }
      }
    },
  },
  plugins: [],
}

