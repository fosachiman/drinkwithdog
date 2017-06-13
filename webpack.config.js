const path = require('path');
const webpack = require('webpack');


module.exports = {
  entry: "./public/reactApp.js",
  output: {
    path: path.join(__dirname, "/public"),
    filename: "bundle.js",
    publicPath: '/public'
  },
  resolve: {
    alias: {
      'mapbox-gl/js/mapbox-gl.js': 'mapbox-gl/dist/mapbox-gl.js'
    }
  },
  module: {
    loaders: [
    {
        exclude: /(node_modules)/,
        loader: "babel-loader",
        query: {
          presets: ['es2015', 'react']
        }
    }
    ]
  },
  watch: true,
  target: "node",
  plugins: [
        new webpack.DefinePlugin({
            'process.env': {
              'NODE_ENV': `"production"`
            },
            'global': {},
        }),
    ]
}
