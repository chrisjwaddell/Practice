module.exports = {
	env: {
		browser: true,
		node: true,
		es2021: true,
	},

	extends: ["airbnb", "prettier"],
	plugins: ["react", "prettier"],

	// parser: "babel-eslint",

	overrides: [
		{
			files: [".eslintrc.{js,cjs}"],
		},
	],

	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
		ecmaFeatures: {
			blockBindings: true,
			jsx: true,
			modules: true,
		},
	},

	rules: {
		// these rules are used in combination with airbnb style guide and overwrite them
		// They also are the same as some specific Prettier settings I prefer

		"prettier/prettier": ["error"],

		// WHITESPACE
		// Javascript whitespace and spacing options
		"no-tabs": ["error", { allowIndentationTabs: true }],
		// indent: ["error", "tab"],
		// "prettier.tabWidth": 4,
		// "prettier.useTabs": true,
		indent: 0,
		// If you get an error for linebreak-style and you are in VS Code on Windows,
		// Press Ctrl + Shift + P, Change End of Line Sequence, switch to LF
		// "prettier.endOfLine": "lf",
		"linebreak-style": ["error", "unix"],

		// "prettier.semi": false,
		semi: ["error", "never"],

		// "prettier.singleQuote": false,
		quotes: [
			2,
			"double",
			{ allowTemplateLiterals: true, avoidEscape: false },
		],

		"no-unused-vars": "warn",
		"func-names": "off",

		"arrow-body-style": "off",
		"prefer-arrow-callback": "off",

		// React options
		"react/jsx-filename-extension": [
			1,
			{
				extensions: [".js", ".jsx"],
			},
		],
		// "prettier.jsxSingleQuote": false,
		// "jsx-quotes": [2, "prefer-double"],
	},
}
