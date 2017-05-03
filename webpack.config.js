var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
      'script!jquery/dist/jquery.min.js',
      'script!foundation-sites/dist/foundation.min.js',
      './app/app.jsx',
  ],
  externals: {
      jquery: 'jQuery'
  },
  plugins: [
      new webpack.ProvidePlugin({
          '$': 'jquery',
          'jQuery': 'jquery'
      })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
    // publicPath: __dirname
  },
  resolve: {
    root: __dirname,
    modulesDirectories: [
        'node_modules',
        './app/components'
    ],
    alias: {
        applicationStyles: 'app/styles/app.scss'
    },
    extensions: ['','.js','.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react','es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: 'url-loader'
    //      [
    //         '// 'file?hash=sha512&digest=hex&name=[hash].[ext]',
    //         'file-loader?name=public/img/[name].[ext]',
    //         'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false''
    //  ]
      }
    ]
    },
    sassLoader: {
        includePaths: [
            path.resolve(__dirname, './node_modules/foundation-sites/scss')
        ]
    },
    devtool: 'cheap-module-eval-source-map'
};
