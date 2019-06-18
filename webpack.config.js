// quando for colocado no terminal npm run build sera declarada a variavel NODE_ENV = 'production' (para o servidor rodar no modo produção)
// caso seja colocado npm start sera rodado no modo desenvolvimento
const modoDev = process.env.NODE_ENV !== 'production' //verificando se a variavel NODE_ENV esta setada
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin') //extrair css e scss para arquivo expecifico, para ele não ficar junto com o arquivo principal.js
const UglifyJsPlugin = require('uglifyjs-webpack-plugin') //minificar js
const OptmizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin') //minificar css e scss

module.exports = {
    mode: modoDev ? 'development' : 'production', // se modoDev for true o modo de desenvolvimento sera 'development' se nao, sera 'production'
    entry: './src/principal.js', //arquivo de entrada (ponto de entrada)
    output: { //configurando arquivo de saida e a pasta de saida
        filename: 'principal.js',
        path: __dirname + '/public' //__dirname - variavel de ambiente , aponta para pasta raiz
    },
    devServer: { //Servidor de desenvolvimento
        contentBase: "./public",
        port: 9000
    },
    optimization: { //Area optimização dos arquivos
        minimizer: [ //plugins para minimizar arquivos
            new UglifyJsPlugin({
                cache: true,
                parallel: true  //executar da forma mais rapida possivel
            }),
            new OptmizeCSSAssetsPlugin({})
        ]
    },
    plugins: [ //Area expecifica para colocar os plugins
        new MiniCssExtractPlugin({ //Função construtora
            filename: "estilo.css" //Nome do arquivo que sera gerado apartir da interpretação dos arquivos css e scss
        })
    ],
    module: {
        rules: [{ // regras - onde seram colocados os loaders do css e sass
            test: /\.s?[ac]ss$/, // criterio para o ler os arquivos, nesse caso arquivos .css , .sass e scss (https://regex101.com/)
            use: [
                MiniCssExtractPlugin.loader,// Responsavel por colocar o css e o sccs interpretado dentro de um arquivo a parte (estilo.css)
                // 'style-loader', //Responsavel por adicionar CSS a DOM injetando a tag <style> // nesse caso o css esta sendo jogado dentro do arquivo principal.js
                'css-loader', // Responsavel por interpretar os @imports, url() etc...
                'sass-loader',
            ]
        },{ //regras dos arquivos imagem
            test: /\.(png|svg|jpg|gif)$/, //criterio dos tipos de imagem
            use: ['file-loader']
        }]
    }
}