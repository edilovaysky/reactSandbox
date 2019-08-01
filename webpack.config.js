const path = require('path');

module.exports = {
  entry: './src/app.jsx',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      layouts: path.resolve(__dirname, 'src', 'app', 'layouts'),
      components: path.resolve(__dirname, 'src', 'app', 'components'),
      pages: path.resolve(__dirname, 'src', 'app', 'pages'),
    },
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, 'dist'),
  },
};
