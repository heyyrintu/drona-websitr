/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#DE1C1C',
          dark: '#B81616',
          light: '#F04848',
          50: '#FDF2F2',
          100: '#FCE8E8',
          200: '#F9D1D1',
        },
        secondary: {
          DEFAULT: '#FEA418',
          dark: '#E08F10',
          light: '#FFB84D',
        },
        accent: {
          DEFAULT: '#06B6D4',
          light: '#22D3EE',
        },
        dark: '#1E1B4B',
        'dark-2': '#312E81',
        'dark-3': '#3730A3',
        muted: '#6B7280',
        light: '#9CA3AF',
        surface: '#F8FAFC',
        'surface-2': '#F1F5F9',
        border: '#E2E8F0',
        'border-light': '#F1F5F9',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'xs': '0 1px 2px rgba(0,0,0,0.03)',
        'sm': '0 1px 3px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.03)',
        'md': '0 4px 6px -1px rgba(0,0,0,0.05), 0 2px 4px -2px rgba(0,0,0,0.03)',
        'lg': '0 10px 15px -3px rgba(0,0,0,0.06), 0 4px 6px -4px rgba(0,0,0,0.04)',
        'xl': '0 20px 25px -5px rgba(0,0,0,0.07), 0 8px 10px -6px rgba(0,0,0,0.04)',
        '2xl': '0 25px 50px -12px rgba(0,0,0,0.12)',
        'glow': '0 0 40px rgba(222,28,28,0.15)',
        'glowSm': '0 0 20px rgba(222,28,28,0.12)',
        'primary': '0 8px 32px rgba(222,28,28,0.25)',
        'primarySm': '0 4px 16px rgba(222,28,28,0.18)',
        'innerLight': 'inset 0 1px 0 rgba(255,255,255,0.5)',
        'card': '0 1px 3px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.04)',
        'cardHover': '0 4px 8px rgba(0,0,0,0.06), 0 8px 32px rgba(0,0,0,0.06)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'ticker': 'ticker 30s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: 0, transform: 'translateY(20px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        ticker: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
