const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    output: {
        path: path.resolve(__dirname, "dist"),
    },
	devtool: "source-map",
	mode: process.env.WEBPACK_SERVE ? 'development' : 'production',
	
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [ 'style-loader', 'css-loader' ]
			},
			{
				test: /\.(ico|gif|png|jpg|jpeg|svg|webp)$/,
				use: ['file-loader']
			},
			// {
			// 	test: /\.js$/,
			// 	exclude: /(node_modules|bower_components)/,
			// 	use: {
			// 	  loader: 'babel-loader',
			// 	  options: {
			// 		presets: ['@babel/preset-env'],
			// 		cacheDirectory: true
			// 	  }
			// 	}
			//   }
		]
	},

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
			template: "src/index.html",
		})
    ]
}