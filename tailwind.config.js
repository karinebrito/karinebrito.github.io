/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.html", 
    "./src/**/*.{js,ts,jsx,tsx}", 
    "./*.tsx", 
    ],  
    theme: {
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      extend: {
        spacing: {
          '128': '32rem',
          '144': '36rem',
        },
        borderRadius: {
          '4xl': '2rem',
        }
      },
      screens: {
        xs: '320px',
        ssm: '375px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
      },
    },
    plugins: [],
}

