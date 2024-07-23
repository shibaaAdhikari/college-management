
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'background-color': '#121212',
        'secondary': '#0f0f0f',
        'primary':'#EEEDEB',
        'ternary':'#E0CCBE',

      },
    },
  },
  plugins: [],
};
