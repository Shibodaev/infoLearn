const path = require("path");
const styleResourcesLoader = require('style-resources-loader');

module.exports = {
    pluginOptions: {
        "style-resources-loader": {
            preProcessor: "scss",
            patterns: [
                path.resolve(__dirname, "./src/assets/scss/mixins.scss"),
                // path.resolve(__dirname, './src/assets/scss/fonts.css')
                // path.resolve(__dirname, 'node_modules/bootstrap-vue/src/index.scss'),
            ]
        }
    }
};