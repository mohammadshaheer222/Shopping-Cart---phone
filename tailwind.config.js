/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
    },
  },
  variants: {
    extends: {
      lineClamp: ['hover'],
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio'),],
};
