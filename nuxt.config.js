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
      },
      { name: 'msapplication-TileColor', content: '#0e9f6e' },
      { name: 'theme-color', content: '#ffffff' }
    ],
    link: [
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16'
      },
      { rel: 'manifest', href: 'site.webmanifest' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '0e9f6e' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://api.mapbox.com/mapbox-gl-js/v1.9.1/mapbox-gl.css'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    '@/assets/scss/custom.scss',
    'vue-slick-carousel/dist/vue-slick-carousel.css'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/plugins/mapbox', mode: 'client' },
    { src: './plugins/vue-slick-carousel.js' },
    { src: './plugins/axios' },
    { src: './plugins/vuemq' },
    { src: './mixins/formMixin.js' },
    { src: `~plugins/vee-validate`, ssr: true},
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

    '@nuxtjs/svg',

    'nuxt-fontawesome',

    'nuxt-webfontloader',

    [
      'vue-scrollto/nuxt',
      {
        duration: 500,
        easing: 'ease-in-out',
        cancelable: true,
        offset: -100
      }
    ]
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
    name: 'fade',
    mode: 'out-in'
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
    vendor: ['axios', 'map-promisify']
  },
  env: {
    TAFELHILFE_API_KEY: 'BQFtUCgMdC6bjABxiQ27A1hZBQydwTUv6hvuxXgZ',
    MAPBOX_API_KEY:
      'pk.eyJ1IjoibGdhc3RsZXIiLCJhIjoiY2s5NDNlaW1oMDFtZjNnb2YzczY5ajZqMCJ9.K8kUn4MHA3WhzLFxFfoZFQ'
  }
}
