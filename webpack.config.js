var path = require('path');
module.exports = {
    entry:"./index.js",
    output:{
        path:path.join(__dirname,'dist'),
        publicPath:'/dist/',
        filename:'index.js'
    },
    module:{
        loaders:[
            {
                test:/\.js$/,
                loader:'babel-loader',
                exclude: /node_modules/,
                query:{
                    presets:['es2015']
                }
            }
        ]
    }
}