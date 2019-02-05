
const path = require("path");
const HtmlwebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = (env, argv) =>({
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index_bundle.js'
    },
    module:{
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                },
                
                
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                loader: 'url-loader',
                options: {
                  limit: 10000,
                },
            },
        ]
    },
    devtool: argv.mode === 'development' ? 'source-map' : false,
    
    plugins:[
        new HtmlwebpackPlugin({
            template: './src/index.html'
        })
    ]
})
