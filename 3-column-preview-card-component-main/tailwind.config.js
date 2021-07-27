module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'bigShoulders': ["'Big Shoulders Display'",'cursive'],
        'lexend': ['Lexend','sans-serif']
       },
      backgroundColor:{
        'bOrange': 'hsl(31, 77%, 52%)',
        'dCyan': 'hsl(184, 100%, 22%)',
        'vDCyan': 'hsl(179, 100%, 13%)',
        'bgButton': 'hsl(0, 0%, 95%)',
       },
       textColor:{
        'paragraphs': 'hsla(0, 0%, 100%, 0.75)',
        'general': 'hsl(0, 0%, 95%)',
        'bOrange': 'hsl(31, 77%, 52%)',
        'bdCyan': 'hsl(184, 100%, 22%)',
        'bvdCyan': 'hsl(179, 100%, 13%)',
       },
       screens:{
        'mobile': '375px',
        'desktop':' 1440px'
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
