const path = require("path")

// webpack --watch
// http://localhost:8080
// It's like nodemon
// But it uses the dependency graph to refresh

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
		],
	},
	devServer: {
		static: {
			directory: path.join(__dirname, "dist"),
		},
	},
}
