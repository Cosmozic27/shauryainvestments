/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        champagne: {
          light: '#F8F6F1',
          DEFAULT: '#F1EEE7', // Main background: #F1EEE7 (Warm Champagne)
          dark: '#EAE5DB',
        },
        sand: {
          light: '#EFEBE2',
          DEFAULT: '#E8E2D7', // Alternate section background: #E8E2D7 (Soft Sand)
          dark: '#DDD5C7',
        },
        cream: {
          light: '#FCFBF8',
          DEFAULT: '#FAF8F3', // Cards and elevated surfaces: #FAF8F3 (Ivory Cream)
          dark: '#F3EFE6',
        },
        stone: {
          light: '#E6E1D7',
          DEFAULT: '#DCD5C8', // Borders and dividers: #DCD5C8 (Warm Stone)
          dark: '#C8BEAE',
        },
        navy: {
          950: '#070C15',
          900: '#0B1423',
          DEFAULT: '#101D32', // Deep sections: #101D32 (Deep Navy)
          800: '#15243D',
          700: '#1E3354',
          600: '#2A4672',
        },
        gold: {
          light: '#DEC79B',
          DEFAULT: '#C9A96E', // Gold accents: #C9A96E (Muted Gold)
          dark: '#A88849',
          muted: 'rgba(201, 169, 110, 0.12)',
        },
        brand: {
          primary: '#17243A', // Primary text: #17243A
          secondary: '#596477', // Secondary text: #596477
        },
        ivory: {
          light: '#FAF8F3',
          DEFAULT: '#F1EEE7',
          dark: '#E8E2D7',
        },
      },
      textColor: {
        primary: '#17243A',
        secondary: '#596477',
      },
      borderColor: {
        stone: '#DCD5C8',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(23, 36, 58, 0.05)',
        'elevated': '0 12px 32px -4px rgba(23, 36, 58, 0.08)',
        'gold-glow': '0 4px 20px -2px rgba(201, 169, 110, 0.25)',
      },
    },
  },
  plugins: [],
}
