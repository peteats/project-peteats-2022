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
      animation: {
        typing: 'typing 2s steps(14), blink 0.1s infinite',
        // typing: 'typing 2s steps(14)',
        wiggle: 'wiggle 1s ease-in-out infinite',
        shake: 'shake 1.5s infinite',
      },
      keyframes: {
        typing: {
          from: { width: '0' },
          to: { width: '14ch' },
        },
        blink: {
          from: { 'border-right-color': 'transparent' },
          to: { 'border-right-color': 'black' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-5deg)' },
          '50%': { transform: 'rotate(5deg)' },
        },
        shake: {
          '0%': { transform: 'translateX(0)' },
          '20%': { transform: 'translateX(5px)' },
          '40%': { transform: 'translateX(-5px)' },
          '60%': { transform: 'translateX(4px)' },
          '80%': { transform: 'translateX(-4px)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
};
