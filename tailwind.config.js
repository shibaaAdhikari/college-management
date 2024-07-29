
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'background-color': '#ffffff',
        'secondary': '#042954',
        'primary':'#EEEDEB',
        'ternary':'#f0f1f3',

      },
    },
  },
  plugins: [],
};
