const { CleanWebpackPlugin } = require("clean-webpack-plugin")
// const paths = require("./paths")

// const { templatePath } = require("./paths")
// import HtmlWebpackPlugin from "html-webpack-plugin"

module.exports = {
	CleanWebpackPlugin: new CleanWebpackPlugin(),

	// HtmlWebpackPlugin: new HtmlWebpackPlugin({
	// template: paths.templatePath,
	// minify: {
	// collapseInlineTagWhitespace: true,
	// collapseWhitespace: true,
	// preserveLineBreaks: true,
	// minifyURLs: true,
	// removeComments: true,
	// removeAttributeQuotes: true,
	// },
	// }),
}
