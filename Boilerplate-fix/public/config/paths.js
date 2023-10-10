import path from "path"

module.exports = {
	root: path.resolve(__dirname, "../", "../"),
	outputPath: path.resolve(__dirname, "../", "../", "dist"),
	entry: path.resolve(__dirname, "../", "../", "src", "index.js"),
	templatePath: path.resolve(__dirname, "../", "../", "src", "index.html"),
	imagesFolder: "img",
	fontsFolder: "fonts",
	cssFolder: "style",
	jsFolder: "scripts",
}
