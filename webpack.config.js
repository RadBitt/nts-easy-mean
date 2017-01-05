var webpack = require('webpack');
var path = require('path'); 

module.exports = {
  entry: {
    app: './app/index.js',
    vendor: ['react', 'react-dom', 'react-router', 're-base']
  },
  output: {
    // path: __dirname,
    filename: './public/scripts/bundle.js'
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