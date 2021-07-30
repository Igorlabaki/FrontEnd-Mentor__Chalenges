module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens:{
        'mobile': '375px',
        'desktop':' 1440px'
       },
      fontFamily:{
        'kumbh':[ "'Kumbh Sans'", 'sans-serif']
      },
      gradientColorStops:{
        'sViolet': 'hsl(273, 75%, 66%)',
        'sBlue':' hsl(240, 73%, 65%)'
      },
      textColor:{
        'vdBlue'  : 'hsl(237, 12%, 33%)',
        'dBlue'   : 'hsl(240, 6%, 50%)',
        'vdsBlue' : 'hsl(238, 29%, 16%)',
        'sRed'    : 'hsl(14, 88%, 65%)'
      },
      inset:{
          '92' : '20.5rem',
      },
      spacing: {
        '22' :  '5.5rem'
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
