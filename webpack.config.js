const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    mode: 'development',
    entry: {
        home: path.resolve(__dirname, 'src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        clean: true,
        assetModuleFilename: '[name][ext]'
    },
    devtool: 'source-map',
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        port: 3000,
        open: true,
        hot: true,
        compress: true,
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
        })
    ]
}