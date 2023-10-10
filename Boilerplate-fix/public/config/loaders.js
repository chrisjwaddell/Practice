const JSLoader = [
	{
		test: /\.js$/i,
		exclude: /node_modules/,
		use: {
			loader: "babel-loader",
		},
	},
]

module.exports = {
	JSLoader,
}
