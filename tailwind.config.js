/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      bgLight: '#d4d8f7',
      textLight: '#06081e',
      buttonLight: '#2031b1',
      accentLight: '#2437c6',


      bgDark: '#010809',
      textDark: '#d9f5fc',
      buttonDark: '#21c4ed',
      accentDark: '#12b9e2',

    },
    extend: {
      keyframes: {
        slideInDown: {
          '0%': {
            transform: 'translateY(-50%)',
            opacity: 0,
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: 1,
          }
        },

        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '15%': { transform: 'rotate(14.0deg)' },
          '30%': { transform: 'rotate(-8.0deg)' },
          '40%': { transform: 'rotate(14.0deg)' },
          '50%': { transform: 'rotate(-4.0deg)' },
          '60%': { transform: 'rotate(10.0deg)' },
          '70%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
      },

      animation: {
        'wave': 'wave 1.5s infinite',
        'slide-down-1': 'slideInDown 0.2s ease-out',
        'slide-down-2': 'slideInDown 0.4s ease-out',
        'slide-down-3': 'slideInDown 0.6s ease-out',
      },

    },
  },
  plugins: [],
}