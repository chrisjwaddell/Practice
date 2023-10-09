const { merge } = require("webpack-merge")
const path = require("path")
const paths = require("./paths")
const loaders = require("./loaders")
const plugins = require("./plugins")
const developmentConfig = require("./webpack.development")
const productionConfig = require("./webpack.production")
const parts = require("./webpack.parts")

// mode is given in the CLI, this way we can switch
// between development and production through the CLI
// with the --mode switch

// webpack --watch
// http://localhost:8080
// It's like nodemon
// But it uses the dependency graph to refresh

const commonConfig = {
	entry: paths.entry,
	output: { path: paths.outputPath, filename: "index.js" },
	module: {
		rules: loaders.JSLoader,
	},
	plugins: [
		plugins.CleanWebpackPlugin,
		// plugins.HtmlWebpackPlugin,
		// plugins.ESLintPlugin,
		// plugins.StyleLintPlugin,
		// plugins.MiniCssExtractPlugin,
	],
}

// Choose the parts in webpack.parts that you want to add
const developmentParts = {
	devtool: parts().devtool,
	devServer: parts().devServer,
}

const productionConfigCombined = productionConfig()
const developmentConfigCombined = merge(developmentConfig(), developmentParts)

const getConfig = (mode) => {
	switch (mode) {
		case "production":
			return merge(commonConfig, productionConfigCombined, { mode })
		case "development":
			return merge(commonConfig, developmentConfigCombined, { mode })
		default:
			throw new Error(`Trying to use an unknown mode, ${mode}`)
	}
}

module.exports = (env, argv) => {
	const MODE = argv.mode || "development"
	const result = getConfig(MODE)
	return result
}
