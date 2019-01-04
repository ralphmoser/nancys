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
    '~/plugins/vue-lazyload',
    //'~/plugins/fontawesome.js',
    {
      src: '~/plugins/vue-masonry',
      ssr: false
    },
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [,
    // Doc: https://bootstrap-vue.js.org/docs/
    // add bootstrap with custom css
    ['bootstrap-vue/nuxt', {css: false}],
    // parse markdown content files
    '@nuxtjs/markdownit'
  ],

  /*
   ** Global CSS
   */
  css: [
    // add bootstrap css
    '@/node_modules/bootstrap/dist/css/bootstrap.min.css',
    // add fontawesome css
    //'@fortawesome/fontawesome-svg-core/styles.css',
  ],

  // [optional] markdownit options
  // See https://github.com/markdown-it/markdown-it
  markdownit: {
    preset: 'default',
    html: true,
    linkify: true,
    breaks: true,
  },

  /*
   ** Router configuration
   */
  router: {
    base: '/',
    linkActiveClass: 'active',
    linkExactActiveClass: 'active-exact',
  },

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
    color: '#fd7e14',
    height: '2px',
    duration: 5000
  },

  loadingIndicator: {
    name: 'cube-grid',
    color: '#fd7e14',
    background: '#333'
  },

}
