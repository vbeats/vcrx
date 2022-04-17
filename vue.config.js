const CopyWebpackPlugin = require('copy-webpack-plugin')
const {resolve} = require('path')
const path = require('path')

const pages = {}

const items = [
  {name: 'popup', title: 'Popup'},
  {name: 'options', title: 'Options'},
  {name: 'tab', title: 'Tab'},
]

items.forEach((item) => {
  pages[item.name] = {
    entry: `src/${item.name}/main.ts`,
    template: 'public/index.html',
    filename: `${item.name}.html`,
    title: item.title,
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
    plugins: [new CopyWebpackPlugin({patterns})],
  },
  chainWebpack: (config) => {
    config.resolve.alias.set('@$', path.resolve(__dirname, 'src'))

    config.optimization.splitChunks({
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 128 * 1024,
      maxSize: 500 * 1024,
      automaticNameDelimiter: '-',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            const packageNames = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)
            if (packageNames && packageNames.length > 1) {
              return `chunk.${packageNames[1].replace('@', '')}`
            }
          },
          priority: 10,
        },
      },
    })
  },
}
