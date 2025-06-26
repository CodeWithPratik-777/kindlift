import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      width: {
        'fill': '-webkit-fill-available',
      },
      animation: {
        progress: 'progress 4s linear forwards',
      },
      keyframes: {
        progress: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
      },
      screens: {
        'max-xs': { max: '580px' },
        'max-lg': { max: '1080px' },
        'min-1080': '1080px',
        'xl-desktop': { min: '1440px' },
        'uhd-2k': { min: '2560px' },
        'uhd-8k': { min: '7680px' }
      },
    },
  },
  plugins: [],
}
