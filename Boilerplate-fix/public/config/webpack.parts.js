const path = require("path")

module.exports = (env, argv) => {
	const options = {
		// All your other custom config...
		devtool: "inline-source-map",
		devServer: {
			static: {
				directory: path.join(__dirname, "dist"),
			},
			compress: true,
			hot: true,
		},
	}
	return options
}
