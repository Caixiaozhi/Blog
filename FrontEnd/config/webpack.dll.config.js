'use strict';

const path = require('path');
const webpack = require('webpack');
const ManifestPlugin = require('webpack-manifest-plugin');
const paths = require('./paths');

const publicPath = process.env.NODE_ENV === 'production' ? ('./' + paths.servedPath) : '/';

// This is the production configuration.
// It compiles slowly and is focused on producing a fast and minimal bundle.
// The development configuration is different and lives in a separate file.
module.exports = {
    entry: {
        vendor: ['axios',
            'react',
            'react-dom',
            'react-redux'
        ]
    },
    output: {
        // The build folder.
        path: path.resolve(__dirname, '../build/static/dll'),
        // Generated JS file names (with nested folders).
        // There will be one main bundle, and one file per asynchronous chunk.
        // We don't currently advertise code splitting but Webpack supports it.
        filename: '[name].js',
        library: '[name]_library'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
              NODE_ENV: JSON.stringify('production'),
            },
          }),
        new webpack.DllPlugin({
            context: __dirname,
            path: path.resolve(__dirname, '../build/static/dll/[name]-manifest.json'),
            name:'[name]_library',
        })
    ]
};
