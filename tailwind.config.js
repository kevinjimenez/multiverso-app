/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: [
    './App.tsx',
    './src/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#11B0A3',
          50: '#E9F6F4',
          100: '#C9EAE6',
          600: '#11B0A3', // color base
          700: '#0E9A8F',
        },

        secondary: {
          DEFAULT: '#5A626B',
          600: '#5A626B', // color base
        },

        tertiary: {
          DEFAULT: '#E5484D',
          600: '#E5484D', // color base
        },

        // Acento principal (teal) — botones, enlaces, estados activos
        accent: {
          DEFAULT: '#11B0A3',
          50: '#E9F6F4', // fondos suaves (chips de lugar/episodio)
          100: '#C9EAE6',
          600: '#11B0A3', // color base
          700: '#0E9A8F', // hover
        },

        // Tinta / texto
        ink: {
          DEFAULT: '#15181D', // títulos y texto principal
          soft: '#5A626B', // texto secundario fuerte
          muted: '#8A929B', // descripciones
          faint: '#9AA3AD', // metadatos
          ghost: '#A6AEB6', // placeholders / iconos inactivos
        },

        // Superficies y bordes
        surface: {
          page: '#ECEEF0', // fondo de la pantalla contenedora
          card: '#FFFFFF', // tarjetas
          input: '#F4F6F7', // inputs / stats / píldoras
          line: '#EEF0F1', // bordes de tarjeta
          border: '#E6E8EB', // bordes de input
          divider: '#F2F4F5', // separadores internos
        },

        // Estados semánticos
        status: {
          alive: '#2FBF71', // vivo
          dead: '#E5484D', // muerto / error
          unknown: '#9AA3AD', // desconocido
          errorBg: '#FDECEC', // fondo de error
        },
      },

      fontFamily: {
        sans: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },

      borderRadius: {
        card: '18px',
        field: '14px',
        phone: '42px',
      },

      boxShadow: {
        card: '0 1px 2px rgba(20,24,30,0.04)',
        hover: '0 6px 20px rgba(20,24,30,0.08)',
        phone: '0 24px 60px rgba(20,24,30,0.28)',
        accent: '0 8px 20px rgba(17,176,163,0.28)',
      },
    },
  },
  plugins: [],
};
