const path = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HTMLWevpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const isProd = process.env.NODE_ENV === 'prodaction'
const isDev =!isProd

const filename = ext => isDev ? `bundle.${ext}` : `bundle.[hash].${ext}`

const jsLoaders = () =>{
    const loaders = [
        {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
            }
        }
    ]
    if (isDev) {
        loaders.push('eslint-loader')
    }
}

module.exports = {
    context: path.resolve(__dirname, 'src'), //  где лежат исходники
    mode: 'development', // мод разработки
    entry: ['@babel/polyfill', './index.js'],  // точка входа для приложения
    output: {   // выходные параметры
        filename: filename('js'),
        path: path.resolve(__dirname, 'dist')    //  куда складывать
    },
    resolve: {
        extensions: ['.js'],
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '@core': path.resolve(__dirname, 'src/core')
        }
    },
    devtool: isDev ? 'source-map' : false,
    devServer: {
        port: 3000,
        hot: isDev
    },
    plugins: [      //  https://webpack.js.org/plugins/copy-webpack-plugin/ все плагины
        new CleanWebpackPlugin(), //    очищаем dist
        new HTMLWevpackPlugin({  // добавление script js в index
            template: 'index.html',
            minify: {
                removeComments: isProd,
                collapseWhiteSpace: isProd
            }
        }),
        new CopyPlugin({  //    копируем из ... в ...
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/favicon.ico'),
                    to: path.resolve(__dirname, 'dist')
                },
            ]
        }),
        new MiniCssExtractPlugin({   // храним все css в одном месте
            filename: filename('css')
        })
    ],
    module: {
        rules: [   //   правила обрабатыввается снизу вверх
            {
                test: /\.s[ac]ss$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: isDev,
                            reloadAll: true
                        }
                    },
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: jsLoaders(),
            }
        ],
    }
}
