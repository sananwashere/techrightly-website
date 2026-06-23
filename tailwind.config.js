/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0B1F3A',
          50: '#F1F4F9',
          100: '#DCE3EE',
          700: '#142C4F',
          900: '#0B1F3A',
        },
        indigo: {
          DEFAULT: '#1E3A8A',
        },
        teal: {
          DEFAULT: '#14B8A6',
          400: '#2DD4BF',
          500: '#14B8A6',
          600: '#0D9488',
        },
      },
      fontFamily: {
        heading: ['Sora', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #0B1F3A 0%, #1E3A8A 60%, #14B8A6 100%)',
      },
    },
  },
  plugins: [],
};
