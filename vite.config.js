import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  content: ["*.{html,js,jsx}"],
  theme: {
    fontFamily: {
      'eaves': ['mrs-eaves-roman-lining', 'serif']
    },
    borderRadius: {
      '6xl': '3rem'
    },
    boxShadow: {
      'button-shadow': '4px 4px 1px -1px #A89E93'
    },
    extend: {
      backgroundImage: {
        'hero': "url('/assets/images/hero.jpg')"
      },
      colors: {
        'beige': '#F3EFE6',
        'button-text': '#946B4D',
        'button-shadow': '#A89E93'
      },
    },
  },
  plugins: [react()],
})
