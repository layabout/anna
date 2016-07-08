module.exports = {
    styleLoader: require('extract-text-webpack-plugin').extract('style-loader', 'css-loader!less-loader', {
        publicPath: '../'
    }),
    styles: {
        "mixins": true,
        "core": true,
        "icons": true,
        "larger": false,
        "path": true
    }
};