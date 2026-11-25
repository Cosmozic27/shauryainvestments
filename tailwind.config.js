/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Midnight Navy & Slate Navy (Primary Dark Foundations)
        midnight: {
          950: '#060B14',
          DEFAULT: '#0B1424', // Primary background: #0B1424 (Midnight Navy)
          900: '#0B1424',
          850: '#0F1A2D',
          800: '#14243B',
        },
        slate: {
          950: '#0B1424',
          900: '#101D31',
          DEFAULT: '#14243B', // Secondary dark backgrounds & cards: #14243B (Slate Navy)
          800: '#14243B',
          700: '#1C3252',
          600: '#27446E',
        },
        navy: {
          950: '#060B14',
          900: '#0B1424',
          DEFAULT: '#0B1424', // Default navy maps to Midnight Navy #0B1424
          800: '#14243B',     // Secondary dark maps to Slate Navy #14243B
          700: '#1C3252',
          600: '#27446E',
        },
        // Antique Gold & Champagne Gold (Accents)
        gold: {
          light: '#D8C7A5',   // Secondary gold accent: #D8C7A5 (Champagne Gold)
          champagne: '#D8C7A5',
          DEFAULT: '#C6A66B', // Primary gold accent: #C6A66B (Antique Gold)
          antique: '#C6A66B',
          dark: '#A6864B',
          muted: 'rgba(198, 166, 107, 0.14)',
        },
        // Warm Stone & Soft Ivory (25% Warm Neutral Sections)
        stone: {
          light: '#F0EAE0',
          DEFAULT: '#E6DED0', // Warm Stone: #E6DED0 (Light contrasting sections)
          dark: '#D2C7B6',
        },
        ivory: {
          light: '#FAF7F2',
          DEFAULT: '#F5F0E7', // Soft Ivory: #F5F0E7 (Selective light backgrounds & light text)
          dark: '#E6DED0',
        },
        cream: {
          light: '#FAF7F2',
          DEFAULT: '#F5F0E7', // Mapped to Soft Ivory #F5F0E7
          dark: '#E6DED0',
        },
        sand: {
          light: '#F0EAE0',
          DEFAULT: '#E6DED0', // Mapped to Warm Stone #E6DED0
          dark: '#D2C7B6',
        },
        champagne: {
          light: '#FAF7F2',
          DEFAULT: '#E6DED0', // Legacy champagne maps to Warm Stone
          dark: '#D2C7B6',
        },
        // Typography Color Tokens
        text: {
          light: '#F5F0E7',     // Primary light text: #F5F0E7
          muted: '#B8C0CC',     // Secondary light text: #B8C0CC
          dark: '#17243A',      // Dark text on light surfaces: #17243A
        },
        brand: {
          primary: '#17243A',   // Dark text on light surfaces
          secondary: '#596477', // Secondary dark text
          light: '#F5F0E7',     // Primary light text: #F5F0E7
          subtle: '#B8C0CC',    // Secondary light text: #B8C0CC
        },
      },
      textColor: {
        primary: '#17243A',
        secondary: '#596477',
        'light-primary': '#F5F0E7',
        'light-secondary': '#B8C0CC',
      },
      borderColor: {
        stone: '#E6DED0',
        gold: '#C6A66B',
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
