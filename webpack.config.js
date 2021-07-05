const path = require('path');

module.exports = {
  entry: './src/App.jsx',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            modules: true
          }
        }
      ]
      }
    ]
  }
};