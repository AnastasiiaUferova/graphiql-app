/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,html,css}'],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#4285f4',
        'regular-blue': '#669df6',
        'light-blue': '#aecbfa',
        'light-gray': 'rgb(243 244 246)',
        white: 'rgb(255 255 255)',
        black: 'black',
      },
    },
  },
  plugins: [],
};
