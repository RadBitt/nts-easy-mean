var webpack = require('webpack');

module.exports = {
  entry: {
    app: './app/index.js',
    vendor: ['react', 'react-dom', 'react-router', 're-base']
  },
  output: {
    // path: 'build',
    filename: './public/scripts/nts.bundle.js'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"./public/scripts/vendor.bundle.js")
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel-loader'] 
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader' 
      }
    ]
  }
};