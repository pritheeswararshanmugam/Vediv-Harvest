/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        turmeric: '#FDB813',
        chili: '#D32F2F',
        dough: '#FAF9F6',
        clay: '#F4EFEA',
        clove: '#3E2723',
        primary: '#FDB813',
        accent: '#D32F2F',
        background: '#FAF9F6',
        surface: '#F4EFEA',
        text: '#3E2723',
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
