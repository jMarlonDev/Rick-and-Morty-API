/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./*.html"],
  theme: {
    extend: {
      fontFamily: {
        jetbrains: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}

