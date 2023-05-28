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
      backgroundImage: {
        Anastasiia: "url('./assets/Anastasia.jpg')",
        Anna: "url('/assets/Anna.jpeg')",
        Sergij: "url('/assets/Sergij.jpeg')",
      },
      animation: {
        grow: 'grow .5s forwards',
      },
      keyframes: {
        grow: {
          '0%': { top: '100%', transform: 'scale(0) translateX(-50%)' },
          '100%': { top: '50%', transform: 'scale(1) translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
