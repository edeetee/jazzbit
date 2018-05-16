const path = require('path')
const webpack = require('webpack')

module.exports = {
    output: {
        path: path.resolve(__dirname, "dist"),
    },
    devtool: "inline-source-map",

	// config.output.chunkFilename = '[name].chunk.js'

	optimization: {
		minimize: false,
		splitChunks: {
		    cacheGroups: {
		        commons: {
		            test: /[\\/]node_modules[\\/]/,
		            name: "vendor",
		            chunks: "all"
		        }
		    }
		}
	},
    
    plugins: [
    ]
}