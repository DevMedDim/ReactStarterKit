const CaseSensitivePathsWebpackPlugin = require('case-sensitive-paths-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, '/dist'),
        filename: './bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.css$/,
                use: [

                    { loader: 'style-loader' },
                    
                    { loader: 'css-loader'}
                ],

            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)(\?v=.+)?$/,
                use: [
                    {
                        loader:'file-loader',
                        options:{plugin:['lodash']},
                    },
                ],
            },
        ],
    },
    devServer: {
        historyApiFallback: true,
      },
      plugins: [
        new HtmlWebpackPlugin({
          title: 'Production',
          template: './src/index.html',
        }),
        new CaseSensitivePathsWebpackPlugin(),
      ],
}