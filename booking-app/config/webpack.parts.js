const path = require("path")

module.exports = (env, argv) => {
	const options = {
		// All your other custom config...
		devtoolDev: "inline-source-map",
		// devtoolDev: "eval-source-map",
		devtoolProd: "source-map",
		devServerDev: {
			static: {
				directory: path.join(__dirname, "dist"),
			},
			// compress: true,
			hot: true,
		},
		devServerProd: {
			static: {
				directory: path.join(__dirname, "dist"),
			},
		},
	}
	return options
}
