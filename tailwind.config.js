/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        title: '#192843ff',
        description: '#99a4b6ff',
        button: '#279affff',
        hoverBlue: '#147cc9ff'
      }
    }
  },
  plugins: []
}
