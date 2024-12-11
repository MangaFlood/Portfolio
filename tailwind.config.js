/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Sniglet-Regular': ['Sniglet-Regular', 'sans-serif'],
        'LeagueSpartan-Black': ['LeagueSpartan-Black', 'sans-serif'],
        'LeagueSpartan-bold': ['LeagueSpartan-bold', 'sans-serif'],
        'LeagueSpartan-Medium': ['LeagueSpartan-Medium', 'sans-serif'],
        'LeagueGothic-Regular': ['LeagueGothic-Regular', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
