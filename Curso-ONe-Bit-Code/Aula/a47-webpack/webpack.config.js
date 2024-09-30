const path = require('path')

module.exports = {
    entry: {
        main: './src/index.js',
        
    },
    mode: 'production',
    output: {
        path: path.resolve(__dirname,'public'),
        filename:'budle.min.js'
    }


}