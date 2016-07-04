const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'ui', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'client.js',
  },
  resolve: {
    extensions: ['.js', ''],
    modulesDirectories: ['node_modules'],
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
  devtool: 'sourcemap',
};
