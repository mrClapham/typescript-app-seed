module.exports = {
    entry: './src/js/index.ts',
    output: {
        path: __dirname + "/dist",
        filename: 'output.js',
        libraryTarget: 'umd',
        library: 'Kinematics'
    },
    module: {
        loaders: [
            // note that babel-loader is not required
            {
                test: /\.ts(x?)$/,
                loader: 'babel-loader!ts-loader',
                exclude: /node_modules/
            }
        ]
    }
}