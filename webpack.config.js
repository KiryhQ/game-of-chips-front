const { resolve } = require('path');

module.exports = {
    entry: resolve('test.js'),
    mode: 'production',
    watch: true,
    output: {
        path: resolve('./'),
        filename: 'test.min.js'
    },
}