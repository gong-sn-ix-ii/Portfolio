/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          'rich-black': '#020617',
          'dark-navy': '#0B0E23',
          'dark-indigo': '#1E1B4B',
          'electric-purple': '#A855F7',
          'neon-pink': '#F472B6',
          'cyan-blue': '#22D3EE',
          'text-pri': '#F3F4F6',
          'text-sec': '#D1D5DB',
        }
      },
      boxShadow: {
        'neon-purple': '0 0 15px 1px #A855F7, 0 0 5px 0 #A855F7',
        'neon-pink': '0 0 15px 1px #F472B6, 0 0 5px 0 #F472B6',
        'neon-cyan': '0 0 15px 1px #22D3EE, 0 0 5px 0 #22D3EE',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-10deg)' },
          '50%': { transform: 'rotate(15deg)' },
        },
      },
      animation: {
        wiggle: 'wiggle 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}