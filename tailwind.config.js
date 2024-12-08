/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        olive: '#808000',
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.6s ease-out',
      },
    },
  },
  plugins: [
    function ({addUtilities}) {
      addUtilities({
        '.zoomable': {
          transition: 'transform 0.3s',
          transform: 'scale(1)',
          '&:hover': {
            transform: 'scale(1.05)',
          },
        }
      })
    }
  ],
}

