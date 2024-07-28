/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: [
    // Or if using `src` directory:
    "./src/**/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",

  theme: {
    extend: {},
  },
  plugins: [],
};
