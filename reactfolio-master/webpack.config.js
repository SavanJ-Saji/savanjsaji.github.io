const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // Entry point of your application
  output: {
	path: path.resolve(__dirname, 'dist'), // Output directory
	filename: 'bundle.js', // Output bundle file name
	publicPath: '/', // Public URL of the output directory when referenced in a browser
  },
  module: {
	rules: [
	  {
		test: /\.(js|jsx)$/, // Transpile .js and .jsx files using Babel
		exclude: /node_modules/,
		use: {
		  loader: 'babel-loader',
		  options: {
			presets: ['@babel/preset-env', '@babel/preset-react'],
		  },
		},
	  },
	  {
		test: /\.css$/, // Load and bundle CSS files
		use: ['style-loader', 'css-loader'],
	  },
	  {
		test: /\.(png|jpg|gif|svg)$/, // Load image files
		use: [
		  {
			loader: 'file-loader',
			options: {
			  name: '[name].[ext]',
			  outputPath: 'images/',
			},
		  },
		],
	  },
	],
  },
  resolve: {
	extensions: ['.js', '.jsx'], // Resolve these extensions
  },
  plugins: [
	new HtmlWebpackPlugin({
	  template: './public/index.html', // HTML template to use
	  filename: 'index.html',
	}),
	new HtmlWebpackPlugin({
	  template: './public/index.html', // HTML template to use
	  filename: 'index.html',
	  publicPath: '/', // Add this line to handle %PUBLIC_URL%
	}),
  ],
  devServer: {
	static: {
	  directory: path.join(__dirname, 'dist'), // Serve content from the output directory
	},
	compress: true, // Enable gzip compression
	port: 3000, // Port to run the dev server
	historyApiFallback: true, // Fallback to index.html for single-page applications
  },
  mode: 'development', // Set the mode to development
};
