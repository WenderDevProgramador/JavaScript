
module.exports = {
    entry: {
        index: './src/index.js',
        
    },
    mode: 'development',
    module: {
        rule: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }]
    }
    
}