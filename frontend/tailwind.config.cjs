module.exports = {
  purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
  // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "at-medium-blue": "#1C86EE",
        "at-light-blue": "#499DF5",
        "at-super-light-blue": "#60AFFE",
        primary: {"50":"#eff6ff","100":"#dbeafe","200":"#bfdbfe","300":"#93c5fd","400":"#60a5fa","500":"#3b82f6","600":"#2563eb","700":"#1d4ed8","800":"#1e40af","900":"#1e3a8a"}
      },
      screens : {
        'xs':'319px',
      }
    },
    fontFamily: {
      Poppins: ["Poppins, sans-serif"],
    },
    flex: {
      "1": "1 1 0%",
      "2": "2 2 0%",
    },
    container: {
      center: true,
      screens: {
        lg: "1024px",
        xl: "1280px",
        "2xl": "1300px",
      },
    },
  },
  variants: {
 
  },
  plugins: [],
  future: {
    purgeLayersByDefault: true,
  },
};