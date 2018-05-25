const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    output: {
        path: path.resolve(__dirname, "dist"),
    },
    devtool: "inline-source-map",

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
		new HtmlWebpackPlugin({
			title: "Jazzbit",
			template: "src/index.html"
		})
    ]
}