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
          600: '#FE7E02'
        },
      fontFamily: {
        sans: 'var(--font-plexSans)',
        alt: 'var(--font-notoSans)'
      },
      
    },
  },
  plugins: [],
}
}