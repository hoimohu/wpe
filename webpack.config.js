const MonacoWebpackPlugin = require('./monaco-editor-localize/core');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.js'
    },
    module: {
        rules: [
            {
                test: /\.js/,
                enforce: 'pre',
                include: /node_modules[\\\/]monaco-editor[\\\/]esm/,
                use: MonacoWebpackPlugin.loader
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new MonacoWebpackPlugin()
    ]
};