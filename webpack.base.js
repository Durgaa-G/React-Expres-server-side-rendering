module.exports = {
    mode: process.env.PORT,
    // inform webpack to run babel on each file
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {

                    presets: [
                        "@babel/preset-react",
                        [
                            "@babel/env"
                        ]
                    ]

                }
            }
        ]
    }

}