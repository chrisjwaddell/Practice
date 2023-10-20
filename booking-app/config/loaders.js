const JSLoader = [
	// Loads css files from import statement in js
	{
		test: /\.css$/i,
		use: ["file-loader"],
	},
	{
		test: /\.css$/i,
		exclude: /node_modules/,
		use: ["css-loader"],
	},
	{
		test: /\.css$/i,
		exclude: /node_modules/,
		use: ["style-loader"],
	},
	// {
	// test: /\.scss$/i,
	// use: ["style-loader", "css-loader", "sass-loader"],
	// },
	{
		test: /\.js$/i,
		// exclude: /node_modules/,
		use: {
			loader: "babel-loader",
		},
	},
]

module.exports = {
	JSLoader,
}
