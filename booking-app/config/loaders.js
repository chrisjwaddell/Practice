const path = require("path")

const JSLoader = [
	{
		test: /\.js$/i,
		exclude: /node_modules/,
		use: {
			loader: "babel-loader",
		},
	},
	// Loads css files from import statement in js
	// {
	// 	test: /\.css$/i,
	// 	exclude: /node_modules/,
	// 	use: ["file-loader"],
	// },
	// {
	// 	test: /\.css$/i,
	// 	exclude: /node_modules/,
	// 	use: ["css-loader"],
	// },
	// {
	// 	test: /\.css$/i,
	// 	exclude: /node_modules/,
	// 	use: ["style-loader"],
	// },
	// {
	// 	test: /\.scss$/i,
	// 	exclude: /node_modules/,
	// 	use: ["css-loader", "file-loader"],
	// },

	// CSS rules
	{
		test: /\.css$/,
		include: path.join(__dirname, "..", "node_modules", "react-date-range"),
		use: [
			"style-loader",
			{
				loader: "css-loader",
				options: {
					modules: false,
				},
			},
		],
	},

	// {
	// 	test: /\.scss$/i,
	// 	use: ["style-loader", "css-loader", "sass-loader"],
	// },
]

module.exports = {
	JSLoader,
}
