const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: {
        index: './src/index.js',
        
    },
    mode: 'development',
    module: {
        rules: [{
            test: /\.css$/, // Tipo de arquivo, no caso aqui o ponto só vai funcionar $ é para indicar que procuramos no final do arquivo.
            use: [MiniCssExtractPlugin.loader,'css-loader'] // Tipo de loader que iremos usar
        }]
    },
    plugins: [
        new MiniCssExtractPlugin()
    ]
    
    }


