/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      borderColor: {
        'subtle': 'hsla(var(--border-subtle))',
      },
      backgroundColor: {
        'default': 'hsla(var(--bg-default))',
        'subtle': 'hsla(var(--bg-subtle))',
      },
      textColor: {
        'default': 'hsla(var(--text-default))',
        'subtle': 'hsla(var(--text-subtle))',
      },
    },
  },
  plugins: [],
}

