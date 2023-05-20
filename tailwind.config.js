/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        pink: {
          500: '#FF6489',
        },
        orange: {
          500: '#F9B24E',
          600: '#FE7E02',
        },
        grayBg: {
          300: '#6F6F6F',
          200: '#E0E0E0',
          100: '#EDEDED',
          50: '#FBFBFB',
        },
        blue: {
          400: '#4088CB',
        },
      },
      fontFamily: {
        sans: 'var(--font-plexSans)',
        alt: 'var(--font-notoSans)',
      },
    },
    plugins: [],
  },
}
