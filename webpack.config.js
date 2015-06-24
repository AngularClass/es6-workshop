module.export = {
  entry: 'client/app/app.js',
  output: {
    fileName: 'bundle.js'
  },

  module: {
    loaders: [
      { test: /\.js$/, loaders: 'babel', excludes: /\.node_modules/ }
    ]
  }
};
