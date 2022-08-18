const webpack = require('webpack');
const nodeEnv = process.ENV.NODE_ENV || 'production';

module.exports = {
  mode: process.env.NODE_ENV || 'production',
  devtool: 'source-map',
  entry: './app.js',
  output: {
    filename: 'bundle.js',
  },
  module: {
	  // take all JS file and run through Babel 
	loaders: [
		{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel', // convert to ES5
			query: {
				presets: ['es2015-native-modules']
			}			
		}
	]
  },
  plugins: [
	  // uglify js - compress JS
	  new webpack.optimize.UglifyJsPlugin({
		  compress: {warnings: false},
		  output: {comments: false},
		  sourceMap: true
	  })
	  // env plugin - set the actual environment
	  new webpack.DefinePlugin({
		  'process.env': {NODE_ENV: JSON.stringify(nodeEnv)}
	  })
  ]
};
