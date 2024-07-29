export default {

  css: ['@/assets/css/tailwind.css'],
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },

  buildModules: [
    '@nuxtjs/vuetify',
  ],
  
  modules: [
    '@nuxtjs/axios',
  ],
  axios: {
  
    baseURL: '/',
  },
  vuetify: {
    
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        light: {
          primary: '#1976D2',
          accent: '#424242',
          secondary: '#FF8F00',
          info: '#26A69A',
          warning: '#FFC107',
          error: '#FF5252',
          success: '#4CAF50'
        }
        
      }
    }
  }
}
