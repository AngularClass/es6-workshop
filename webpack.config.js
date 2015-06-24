module.exports = {
  entry: './client/app/app.js',
  output: {
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel', excludes: [/\.node_modules/] }
    ]
  }
};
