var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CircularDependencyPlugin = require('circular-dependency-plugin');
module.exports = {
    entry: {
        thirdparty: [
            'es6-shim',
            'reflect-metadata',
            'zone.js',
            '@angular/common',
            '@angular/compiler',
            '@angular/core',
            '@angular/http',
            '@angular/platform-browser',
            '@angular/platform-browser-dynamic',
            '@angular/router',
            '@angular/forms',
            //'rxjs',
        ],

        app: './app/main.ts',
        tests: './tests/tests.js'
    },
    output: {
        filename: './build/[name].js',
        pathinfo: true
    },
    // Turn on sourcemaps
    devtool: 'source-map',
    resolve: {
        extensions: ['', '.ts', '.js',]
    },
    plugins: [
        new CircularDependencyPlugin({
            //exclude: /a\.js/
        }),

        // remove 3rd patry from app and tests bundles
        new webpack.optimize.CommonsChunkPlugin({ name: 'thirdparty', chunks: ['app'] }),
        new webpack.optimize.CommonsChunkPlugin({ name: 'thirdparty', chunks: ['tests'] }),

        // Separate CSS to another bundle
        new ExtractTextPlugin('./build/[name].css'),

        // Add minification
        //new webpack.optimize.UglifyJsPlugin(),
    ],
    externals: {
        // added to forcely not include 'crypto' module to bundles because it is referecced
        // by 'reflect-metadata' module only for server-side version
        'crypto': 'crypto',
    },
    module: {
        preLoaders: [
            {
                test: /\.ts$/,
                loader: "tslint"
            }
        ],
        loaders: [
            { test: /\.ts$/, loader: 'ts-loader' },
            { test: /\.html$/, loader: 'html' },
            { test: /\.txt$/, loader: 'raw' },
            { test: /\.css$/, loader: 'style!css' },

            /**
             * https://github.com/webpack/extract-text-webpack-plugin
             * It moves every require("style.css") in entry chunks into a separate css output file.
             * So your styles are no longer inlined into the javascript, but separate in a css bundle file (styles.css).
             *  If your total stylesheet volume is big, it will be faster because the stylesheet bundle is loaded in parallel to the javascript bundle.
             *
             *  - Disabled because our styles volume is not that big
             */
            //{ test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css') },
            //{ test: /\.scss$/, loader: ExtractTextPlugin.extract('style', 'css!sass') },

            { test: /\.(png|jpe?g|gif)$/, loader: 'url?limit=100000' },
        ]
    }
}
