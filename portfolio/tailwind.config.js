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
          100: '#f5f5f5',
          200: '#e0e0e0',
          300: '#cccccc',
          400: '#2563eb',
          500: '#1d4ed8',
          600: '#1e40af',
          700: '#1e3a8a',
          800: '#172554',
        },
        secondary: {
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        accent: '#000000',
        dark: '#111111',
        light: '#FFFFFF',
      },
      boxShadow: {
        '3d': '5px 5px 0 0 #111111',
        '3d-lg': '8px 8px 0 0 #111111',
        '3d-white': '5px 5px 0 0 rgba(255, 255, 255, 0.8)',
        '3d-white-lg': '8px 8px 0 0 rgba(255, 255, 255, 0.8)',
        'neumorphic': '5px 5px 10px rgba(0, 0, 0, 0.1), -5px -5px 10px rgba(255, 255, 255, 0.8)',
        'neumorphic-pressed': 'inset 5px 5px 10px rgba(0, 0, 0, 0.1), inset -5px -5px 10px rgba(255, 255, 255, 0.8)',
        'neumorphic-dark': '5px 5px 10px rgba(0, 0, 0, 0.3), -5px -5px 10px rgba(255, 255, 255, 0.05)',
        'neumorphic-dark-pressed': 'inset 5px 5px 10px rgba(0, 0, 0, 0.3), inset -5px -5px 10px rgba(255, 255, 255, 0.05)',
      },
    },
  },
  plugins: [],
} 