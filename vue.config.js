const CopyWebpackPlugin = require('copy-webpack-plugin')
const { resolve } = require('path')

const pages = {}

const items = ['popup', 'options']

items.forEach((name) => {
  pages[name] = {
    entry: `src/${name}/main.ts`,
    template: 'public/index.html',
    filename: `${name}.html`,
  }
})

const patterns = [
  {
    from: resolve('src/manifest.json'),
    to: `${resolve('dist')}/manifest.json`,
  },
  {
    from: resolve('src/assets'),
    to: `${resolve('dist')}/assets`,
  },
  {
    from: resolve('src/background.js'),
    to: `${resolve('dist')}/background.js`,
  },
  {
    from: resolve('src/content_script.js'),
    to: `${resolve('dist')}/content_script.js`,
  },
]

module.exports = {
  pages,
  productionSourceMap: false,
  configureWebpack: {
    plugins: [new CopyWebpackPlugin({ patterns })],
  },
}
