/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'shoe-bg': "url('/assets/show-bg.svg')",
      },
      colors: {
        primary: '#9869ff',
        // primary: '#40BFFF',
        // primary: '#DC143C',
        // primary: '#fde047',
      },
    },
    plugins: [require('@tailwindcss/forms')],
  },
};
