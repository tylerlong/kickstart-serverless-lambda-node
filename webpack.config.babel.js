const config = {
  target: 'node',
  entry: {
    '{{ serviceName }}': ['babel-polyfill', './{{ serviceName }}/index.js']
  },
  output: {
    path: __dirname,
    filename: '[name]/handler.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
}

export default [config]
