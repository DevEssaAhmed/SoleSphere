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
    plugins: [
      require('@tailwindcss/forms'),
      require('@tailwindcss/typography'),
      require('@tailwindcss/aspect-ratio'),
    ], safelist:[
      'text-yellow-200',
      'text-red-200',
      'text-green-200',
      'text-blue-500',
      'bg-blue-600',
      'bg-red-600',
      'bg-green-600',
      'bg-yellow-600',
      
    ]
  },
};
