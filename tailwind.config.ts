import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/flowbite/**/*.js",
    "./public/**/*.html",
  ],
  theme: {
    extend: {

    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
export default config
