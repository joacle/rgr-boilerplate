module.exports = {
    entry: "./src/app.js",
    output: {
        path: __dirname + "/public",
        filename: "bundle.min.js"
    },
    module: {
        loaders: [
            {
                test: /\.(js)$/, 
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets:['react', 'es2015', 'stage-0'],
                    plugins: [__dirname + '/babelRelayPlugin']
                }
            }
        ]
    }
}