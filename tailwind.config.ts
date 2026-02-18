import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: '#E7CDAF',
        deep: '#1E363A',
        offwhite: '#F8F5F0',
        charcoal: '#2B2B2B'
      },
      fontFamily: {
        expo: ['"Expo Arabic"', '"Noto Sans Arabic"', '"IBM Plex Sans"', 'sans-serif']
      },
      boxShadow: {
        card: '0 20px 60px rgba(30, 54, 58, 0.12)'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(-4px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      animation: {
        fadeIn: 'fadeIn 150ms ease-out'
      }
    }
  },
  plugins: []
};

export default config;
