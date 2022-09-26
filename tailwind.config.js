module.exports = {
  content: ['index.html', './src/**/*.{js,jsx,ts,tsx,vue,html}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/img/hero-pattern.svg')",
        'home-neko': "url('/src/images/bg-home-neko.png')",
        'home-dog': "url('/src/images/bg-home-dog.png')",
        'home-food': "url('/src/images/bg-home-food.png')",
        'home-claw': "url('/src/images/bg-home-claw.png')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
    },
  },
  plugins: [],
};
