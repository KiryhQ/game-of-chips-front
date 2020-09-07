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
        minimize: false
    }
}