export default {
  content: [
    './app/components/**/*.{vue,js,ts}',
    './app/pages/**/*.{vue,js,ts}',
    './app/app.vue',
    './app/layouts/**/*.{vue,js,ts}'
  ],
  theme: {
    extend: {
      colors: {
        ink: '#030509',
        'navy-deep': '#060c1c',
        navy: '#0c1c3d',
        'blue-core': '#1c3f7a',
        frost: '#a9c6ff',
        accent: '#5b8def',
        muted: '#8ea3c9',
        paper: '#eef2fb'
      },
      fontFamily: {
        display: ['"Fraunces"', 'ui-serif', 'Georgia', 'serif'],
        sans: ['"Manrope"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"Space Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace']
      },
      letterSpacing: {
        widest2: '0.35em'
      },
      keyframes: {
        drift: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0) scale(1)' },
          '50%': { transform: 'translate3d(2%, -3%, 0) scale(1.05)' }
        },
        twinkle: {
          '0%, 100%': { opacity: '0.15' },
          '50%': { opacity: '0.65' }
        },
        rise: {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      animation: {
        drift: 'drift 18s ease-in-out infinite',
        'drift-slow': 'drift 26s ease-in-out infinite',
        twinkle: 'twinkle 5s ease-in-out infinite',
        rise: 'rise 1s cubic-bezier(0.16, 1, 0.3, 1) both'
      }
    }
  },
  plugins: []
}