const path = require('path'),
	webpack = require('webpack'),
	NODE_ENV = process.env.NODE_ENV || 'development';
var ExtractTextPlugin = require ('extract-text-webpack-plugin'),


module.exports = {
	context: path.resolve(__dirname, './app'),

	entry: {
		app: './main.js'
	},

	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'bundle.js',
		library:  "main"
	},

	resolve: {
		modules: ['node_modules']
	},

	module: {
		rules: [
		    {
		    	test: /\.js$/,
		 		exclude: [/node_modules/],
				use: [{
					loader: 'babel-loader',
					options: { presets: ['es2015'] }
				}]	
		    },
		    {
		    	test: /\.sass$/,
		 		include: [path.resolve(__dirname, "./app")],
	 		 	use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1
						}
					},
					{
						loader: 'sass-loader',
						options: {
							noIeCompat: true
						}
					}
				]
		    }
       	],
    },



	plugins: [
		new ExtractTextPlugin({
			filename: 'build.min.css',
    		allChunks: true,
		})
	],
		    

	devtool: "source-map",

	devServer: {
		contentBase: './app',
		historyApiFallback: true,
		port: 8080,
		compress: false,
		inline: true,
		hot: true,
		stats: {
			assets: true,
			warnings: true,
			hash: false,
			modules: false,
			publicPath: false,
			timings: true
		}
	}

	watch: true
};

