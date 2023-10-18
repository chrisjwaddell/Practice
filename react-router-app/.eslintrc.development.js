// This ESLint config is for develop
// Some rules turn off or give a warnings

const base = require("./.eslintrc")

const developmentRules = {
	"no-console": "warn",
	"no-debugger": "warn",
	"import/no-extraneous-dependencies": [
		"error",
		{
			devDependencies: ["**/webpack.*.js"],
			// devDependencies: ["**/webpack.*.js", "react-router-dom"],
		},
	],
}

const objDevRules = { rules: { ...base.rules, ...developmentRules } }
const newBase = base

newBase.rules = { ...base.rules, ...objDevRules.rules }

module.exports = newBase
