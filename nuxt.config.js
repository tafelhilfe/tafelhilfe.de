/* eslint-disable nuxt/no-cjs-in-config */
module.exports = {
  mode: 'universal',
  srcDir: 'src/',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://api.mapbox.com/mapbox-gl-js/v1.9.1/mapbox-gl.css'}
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['@/assets/scss/custom.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/plugins/mapbox', mode: 'client' },
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    // '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    'bootstrap-vue/nuxt',

    '@nuxtjs/axios',

    'svg-to-vue-component/nuxt',

    'nuxt-fontawesome',

    'nuxt-webfontloader',
  ],
  bootstrapVue: {
    icons: true,
    css: false,
    bvCSS: false
  },
  fontawesome: {
    component: 'fa',
    imports: [
      {
        set: '@fortawesome/free-brands-svg-icons',
        icons: ['fab']
      }
    ]
  },
  webfontloader: {
    typekit: {
      id: 'yvj2fue'
    }
  },
  /* Layout Transitions */
  layoutTransition: {
    name: "fade",
    mode: "out-in"
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    vendor: ['axios', 'map-promisify'],
  }
}
