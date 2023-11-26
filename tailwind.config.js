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
        'primary-blue': '#005EFF',
        'secondary-gray': '#262626',
        'primary-teal': '#00BFBF',
        'primary-mint': '#9EE493',

      },
    },
  },
  plugins: [require("daisyui")],
}
