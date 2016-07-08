module.exports = {
    styleLoader: require('extract-text-webpack-plugin').extract('style-loader', 'css-loader!less-loader'),
    styles: {
        "mixins": true,
        "core": true,
        "icons": false,
        "larger": false,
        "path": true
    }
};