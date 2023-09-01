/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./components/**/*.html",
  ],
  plugins: [
    require("flowbite/plugin")
  ],
  theme: {},
};