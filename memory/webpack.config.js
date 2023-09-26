const path = require("path")

const CopyPlugin = require("copy-webpack-plugin")

module.exports = {
	mode: "development",
	entry: path.join(__dirname, "src", "index.js"),
	output: { path: path.resolve(__dirname, "dist"), filename: "index.js" },
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
				},
			},
		],
	},
	plugins: [
		new CopyPlugin({
			patterns: [
				{
					from: path.resolve(__dirname, "src", "style"),
					to: path.resolve(__dirname, "dist", "style"),
				},
				{
					from: path.resolve(__dirname, "src", "index.html"),
					to: path.resolve(__dirname, "dist"),
				},
				{
					from: path.resolve(__dirname, "src", "img"),
					to: path.resolve(__dirname, "dist", "img"),
				},
			],
		}),
	],
	devServer: {
		static: "./dist",
	},
}
