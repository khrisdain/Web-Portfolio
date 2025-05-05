/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#ffffff',
          100: '#fafafa',
          200: '#f5f5f5',
          300: '#e5e5e5',
          400: '#d4d4d4',
          500: '#a3a3a3',
          600: '#737373',
          700: '#525252',
          800: '#262626',
          900: '#171717',
        },
        secondary: {
          50: '#fafafa',
          100: '#f4f4f5',
          200: '#e4e4e7',
          300: '#d4d4d8',
          400: '#a1a1aa',
          500: '#71717a',
          600: '#52525b',
          700: '#3f3f46',
          800: '#27272a',
          900: '#18181b',
        },
        accent: '#000000',
        dark: '#000000',
        light: '#ffffff',
      },
      boxShadow: {
        '3d': '6px 6px 0 0 rgba(0, 0, 0, 0.8)',
        '3d-sm': '3px 3px 0 0 rgba(0, 0, 0, 0.8)',
        '3d-lg': '10px 10px 0 0 rgba(0, 0, 0, 0.8)',
        '3d-white': '6px 6px 0 0 rgba(255, 255, 255, 0.8)',
        '3d-white-sm': '3px 3px 0 0 rgba(255, 255, 255, 0.8)',
        '3d-white-lg': '10px 10px 0 0 rgba(255, 255, 255, 0.8)',
        'inner-3d': 'inset 3px 3px 0 0 rgba(0, 0, 0, 0.1)',
        'inner-3d-white': 'inset 3px 3px 0 0 rgba(255, 255, 255, 0.1)',
      },
    },
  },
  plugins: [],
} 