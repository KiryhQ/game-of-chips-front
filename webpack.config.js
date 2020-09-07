const { resolve } = require('path');

module.exports = {
    entry: resolve('loader.js'),
    mode: 'development',
    output: {
        path: resolve('./'),
        filename: 'loader.min.js'
    }
}