/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            fontSize: '1rem',
            h1: {
              fontSize: '2.25rem',
            },
            h2: {
              fontSize: '1.875rem',
            },
            h3: {
              fontSize: '1.5rem',
            },
            p: {
              fontSize: '1rem',
              lineHeight: '1.75',
            },
            li: {
              fontSize: '1rem',
            }
          }
        }
      },
      colors: {
        primary: '#4D7EFF',
        secondary: '#111111',
        'off-white': '#F8F8F8',
        'light-gray': '#E5E5E5',
        'dark-gray': '#333333'
      },
      fontFamily: {
        mono: ['"IBM Plex Mono"', '"IBM Plex Mono Fallback"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco'],
      },
      fontSize: {
        'display': ['64px', '72px'],
        'heading': ['48px', '56px']
      },
      borderRadius: {
        'xl': '16px',
        '2xl': '20px'
      }
    },
    container: {
      center: true,
      padding: '2rem',
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1440px',
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
}