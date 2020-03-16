const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackPwaManifestPlugin = require('webpack-pwa-manifest')
const path = require('path')
const WorkboxWebpackPlugin = require('workbox-webpack-plugin')

module.exports = {
  output: {
    filename: 'app.bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: [require('@babel/plugin-transform-runtime')]
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/public/index.html'
    }),
    new WebpackPwaManifestPlugin({
      name: 'Petgram | Tu app de fotos',
      shortname: 'Petgram 🐶',
      description: 'Encuentra fotos de animales domesticos',
      background_color: '#fff',
      theme_color: '#b1a',
      icons: [
        {
          src: path.resolve('src/assets/icon.png'),
          sizes: [96, 128, 192, 256, 384, 512]
        }
      ]
    }),
    new WorkboxWebpackPlugin.GenerateSW({
      runtimeCaching: [
        {
          urlPattern: new RegExp(
            'https://(res.clouginary.com)|(images.unsplash.com)'
          ),
          handler: 'CacheFirst',
          options: {
            cacheName: 'images'
          }
        },
        {
          urlPattern: new RegExp(
            'https://petgram-server-alpha.now.sh'
          ),
          handler: 'NetworkFirst',
          options: {
            cacheName: 'API'
          }
        }
      ]
    })
  ]
}
