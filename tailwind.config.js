/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb',
        'primary-dark': '#1d4ed8',
        text: '#1f2937',
        'text-light': '#6b7280',
        bg: '#ffffff',
        'bg-alt': '#f3f4f6',
        border: '#e5e7eb',
      },
    },
  },
  plugins: [],
};