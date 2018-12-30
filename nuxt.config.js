const pkg = require('./package')

module.exports = {
  /*
   **  Render mode
   */
  mode: 'spa',

  /*
   ** Environment variables that will be shared for the client and server-side.
   */
  env: {
    // Application title
    title: 'Nancys',
  },

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: pkg.description
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~plugins/vue-lazyload'
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [,
    // Doc: https://bootstrap-vue.js.org/docs/
    // add bootstrap with custom css
    ['bootstrap-vue/nuxt', {
      css: false
    }],
    // parse markdown files
    '@nuxtjs/markdownit'
  ],

  /*
   ** Global CSS
   */
  css: [
    // add custom SCSS file to the project
    '@/assets/scss/custom.scss'
  ],

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, {isDev}) {
      // debug settings
      if (isDev) {
        config.devtool = 'source-map';
      }

    }
  },

  /*
   ** Customize the loading progress-bar and SPA spinner
   */
  loading: {
    color: '#3B8070',
    height: '2px',
    duration: 5000
  },

  loadingIndicator: {
    name: 'cube-grid',
    color: '#3B8070',
    background: 'white'
  }

}
