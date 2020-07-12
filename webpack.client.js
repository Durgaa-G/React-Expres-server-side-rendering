const path = require('path');
const merge  = require('webpack-merge');
const baseConfig = require('./webpack.base.js')

const config = {
    mode: 'development',
    //inform webpack entry path
    entry: './src/client/client.js',
    //inform webpack where to put bundle file
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    }
}
module.exports=merge(baseConfig, config)