var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader'
            },
                  // Additional configuration to handle *.css files
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },

            {
                test: /\.(png|svg|jpg|gif)$/,
                loader: 'file-loader',
            },
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: './dist/index.html'
    })],
    devServer: {
        historyApiFallback: true
    },
    externals: {
        // global app config object
        config: JSON.stringify({
            apiUrl: '/api'
        })
    }
}

