/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mare: {
          nude: '#F5F0E8',
          cream: '#E8DDD4',
          brown: '#8F6A50',
          dark: '#6B4E37',
          accent: '#D4B5A0',
          light: '#FAF7F2',
          warm: '#E6D8CC'
        }
      },
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui'],
        'serif': ['Playfair Display', 'ui-serif', 'Georgia'],
        'elegant': ['Lora', 'ui-serif', 'Georgia']
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 6s ease-in-out infinite'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.1)',
        'elegant': '0 8px 30px rgba(107, 78, 55, 0.15)'
      }
    },
  },
  plugins: [],
}