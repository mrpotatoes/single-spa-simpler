const Koa = require('koa')
const cors = require('@koa/cors');

const app = module.exports = new Koa()

app.use(cors())

app.use(async (ctx) => {
  // ctx.is('application/json')

  // if (ctx.path === imports.json) {
  // 
  // }

  ctx.body = {
    imports: {
      '@medium/root-config': '//cdn.jsdelivr.net/gh/mrpotatoes/single-spa-simpler@main/.imports/medium-root-config.js',
      '@medium/dashboard': '//cdn.jsdelivr.net/gh/mrpotatoes/single-spa-simpler@main/.imports/medium-dashboard.js',
      '@medium/navbar': '//cdn.jsdelivr.net/gh/mrpotatoes/single-spa-simpler@main/.imports/medium-navbar.js',
      '@andric/locally-developed': '//localhost:8500/andric-locally-developed.js',

      // '@medium/vue-app': '',

      'vue': 'https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.common.prod.js',
      'react' : 'https://cdn.jsdelivr.net/npm/react@17.0.1/umd/react.production.min.js',
      'react-dom': 'https://cdn.jsdelivr.net/npm/react-dom@17.0.1/umd/react-dom.production.min.js'
    }
  }
})

app.listen(7777)