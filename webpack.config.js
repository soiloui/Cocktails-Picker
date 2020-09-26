const path = require('path');

module.exports = {
	entry: {
		main: './src/Cocktails/main.tsx',
	},
	output: {
		filename: '[name].bundle.js',
		path: __dirname + '/dist',
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: ['ts-loader'],
			},
			{
				test: /\.(jpg|png)$/,
				use: ['url-loader'],
			},
		],
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js'],
	},
};
