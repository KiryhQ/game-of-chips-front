const { resolve } = require('path');

module.exports = {
    entry: resolve('loader.js'),
    mode: 'development',
    watch: true,
    output: {
        path: resolve('./'),
        filename: 'loader.min.js'
    }
}