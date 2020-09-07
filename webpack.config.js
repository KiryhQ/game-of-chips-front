const { resolve } = require('path');

module.exports = {
    entry: resolve('loader.js'),
    mode: 'production',
    watch: true,
    output: {
        path: resolve('./dist'),
        filename: 'bundle.min.js'
    },
}