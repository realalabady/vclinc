import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}'
  ],
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
      }
    }
  },
  plugins: []
};

export default config;
