/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          50: '#effcfb',
          100: '#d6f7f5',
          200: '#b1f0ed',
          300: '#7ce4e1',
          400: '#40d0ce',
          500: '#1fb5b3',
          600: '#159392',
          700: '#157576',
          800: '#165e60',
          900: '#174d4f',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Clash Display', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}