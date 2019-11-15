const withSass = require('@zeit/next-sass')
const withLess = require('@zeit/next-less')
const withCSS = require('@zeit/next-css')
const lessToJS = require('less-vars-to-js')
const fs = require('fs')
const path = require('path')


module.exports = () => {
  const themeVariables = lessToJS(fs.readFileSync(path.resolve(__dirname, './assets/custom-theme.less'), 'utf8'))

  if (typeof require !== 'undefined') {
    require.extensions['.less'] = file => {}
  }

  return withLess(
    withSass(
      withCSS({
        lessLoaderOptions: {
          javascriptEnabled: true,
          modifyVars: themeVariables,
        },
        cssLoaderOptions: {
          importLoaders: 1,
          localIdentName: '[local]___[hash:base64:5]',
          url: false
        },
      }),
    ),
  )
}
