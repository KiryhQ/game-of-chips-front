const { resolve } = require('path');

module.exports = {
    entry: resolve('loader.js'),
    mode: 'production',
    watch: true,
    output: {
        path: resolve('./'),
        filename: 'loader.min.js'
    },
    optimization: {
        flagIncludedChunks: false,
        occurrenceOrder: false,
        concatenateModules: false,
    },
    splitChunks: {
        hidePathInfo: false,
        minSize: 30000,
        maxAsyncRequests: 5,
        maxInitialRequests: 3,
   
      },
   
}