export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'bop24 — Доставка продуктов по Москве и Московской области',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'bop24 — Доставка продуктов по Москве и Московской области'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#18d4c9' },
  /*
   ** Global CSS
   */
  css: [{ src: '~assets/sass/app.scss', lang: 'scss' }],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ['bootstrap-vue/nuxt', '@nuxtjs/svg-sprite'],
  /*
   ** Build configuration
   */

  bootstrapVue: {
    bootstrapCSS: false,
    bootstrapVueCSS: false,
    componentPlugins: [
      'LayoutPlugin',
      'ImagePlugin',
      'LinkPlugin',
      'ButtonPlugin',
      'ButtonGroupPlugin',
      'NavbarPlugin',
      'FormPlugin',
      'FormGroupPlugin',
      'FormInputPlugin',
      'FormRadioPlugin',
      'FormCheckboxPlugin',
      'FormTextareaPlugin',
      'FormSpinbuttonPlugin',
      'DropdownPlugin',
      'CardPlugin',
      'CollapsePlugin',
      'ModalPlugin',
      'SpinnerPlugin',
      'ToastPlugin'
    ]
  },

  svgSprite: {
    input: '~/assets/images/icons'
  },

  build: {
    extractCSS: true,
    filenames: {
      app: '[name].js',
      chunk: '[name].js',
      css: '[name].css'
    },
    html: {
      minify: {
        collapseBooleanAttributes: true,
        decodeEntities: true,
        minifyCSS: false,
        minifyJS: false,
        processConditionalComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        trimCustomFragments: true,
        useShortDoctype: true
      }
    },
    optimization: {
      minimize: false
    },

    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
