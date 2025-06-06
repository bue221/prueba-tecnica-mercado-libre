/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'ml-yellow': '#ffe600',
        'ml-blue': '#3483fa',
        'ml-gray': '#ebebeb',
        'ml-dark-gray': '#333333',
      },
      ringColor: {
        'ml-yellow': '#ffe600',
      },
    },
  },
  plugins: [
    function ({ addBase }) {
      addBase({
        'input:focus': {
          outline: 'none',
          ring: '2px',
          'ring-color': '#ffe600',
          'ring-offset': '2px',
        },
      });
    },
  ],
}