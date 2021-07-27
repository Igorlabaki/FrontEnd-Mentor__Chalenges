module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'mobile'  : '375px',
        'desktop' : '1440px'
      },
      backgroundColor:{
        'vdBlue': 'hsl(233, 47%, 7%)',
        'dBlue' : 'hsl(244, 38%, 16%)',
        'accent': ' hsl(277, 34%, 36%)'
      },
      textColor:{
        'main'        : 'hsl(0, 0%, 100%)',
        'paragraph'   : 'hsla(0, 0%, 100%, 0.75)',
        'statHeadings':'hsla(0, 0%, 100%, 0.6)',
        'accent': ' hsl(277, 64%, 61%)'
      },
      fontFamily:{
        'inter' :['Inter', 'sans-serif'],
        'lexend':['Lexend', 'sans-serif']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
