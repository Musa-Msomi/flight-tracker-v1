const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    mode: 'development',
    entry: {
        home: path.resolve(__dirname, 'src/index.js'),
        flights: path.resolve(__dirname, 'src/flights.js')

    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        clean: true,
        assetModuleFilename: '[name][ext]' // allows file to be loaded same as its in the assets folder
    },
    devtool: 'source-map', // for debugging
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        port: 3000, // overiding default use of port 8080 to desired port
        open: true, // opens browser automatically
        hot: true, //hot reload
        compress: true, // enable gz compressinon
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource'
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Home Page',
            filename: 'index.html',
            template: 'src/index.html',
            chunks: ['home'],
        }),
        new HtmlWebpackPlugin({
            title: 'Flights Page',
            filename: 'flights.html',
            template: 'src/flights.html',
            chunks: ['flights']
        })
    ]
}