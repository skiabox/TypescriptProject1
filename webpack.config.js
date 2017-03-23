const path = require('path');

module.exports = {
    devtool: 'source-map',
    entry: './src/app.ts',
    output: {
        path: __dirname + '/dist',
        filename: 'app.js'
    },
    module: {
        rules: [
            {
            test:/\.ts$/,
            include: path.resolve(__dirname, "src"),
            loader: 'ts-loader'
        },
            {
                test:/\.ts$/,
                enforce: "pre",
                loader: 'tslint-loader'
            }
            ]
    },
    resolve: {
        extensions: [".webpack.js", ".web.js", ".ts", ".js"]
    },
    watch: true
}