module.exports = {
  prefix: 'ny-',
  content: [
     '_site/*.html',
    '_site/**/*.html'
    // '_site/limited-view-template/index.html'  
  ],
  theme: {
    fontFamily: {
      sans: [ "Proxima Nova", 'sans-serif' ]
     },
    extend: {
      colors: {
        'admin-first': '#ac3f14',
        'admin-second': '#cf7954',
        'admin-third': '#f3d3c1',
        'business-first': '#0b5d66',
        'business-second': '#65999e',
        'business-third': '#e5eded',
        'ny-accent-first': '#f4a71c',
        'ny-accent-second': '#f3dd6d',
        'ny-links': '#004DD1',
        'ny-dark': '#62666a',
        'ny-mid': '#d0d0ce',
        'ny-light': '#ededed',
        'ny-gold': '#face00',
        'ny-blue': '#154973',
        'ny-blue-second': '#457AA5'
      },
      spacing: {
        '25': '25px',
      }
    }
  },
  plugins: [],
}
