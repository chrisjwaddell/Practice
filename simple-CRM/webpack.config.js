const path = require("path")

module.exports = {
	mode: "development",
	entry: path.join(__dirname, "src", "index.js"),
	output: { path: path.resolve(__dirname, "dist"), filename: "index.js" },
	module: {
		rules: [
			{
				test: /\.js/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
				},
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},
		],
	},
	devServer: {
		static: {
			directory: path.join(__dirname, "dist"),
		},
		// hot: true,
		// devMiddleware: {
		// 	publicPath: "/dist",
		// 	writeToDisk: true,
		// },
	},
}
