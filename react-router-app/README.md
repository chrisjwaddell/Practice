# React Webpack Babel Boilerplate

This is a boilerplate for projects that use React.
It uses Webpack as the builder.

Some main packages of react-webpack-babel boilerplate are:
Webpack v5
ESLint
- with Airbnb style guide
SASS
Express
Prettier
Jest



React Webpack Babel Boilerplate has some nice features to distinguish between development and production mode.
ESLint is already set up with Airbnb style guide. You can have different rules for development or production.

The Webpack configuration is set up so that you can easily add and remove features you don't need.
It also has a sensible file layout and makes a great base setup for any React Webpack project.


Prettier package is used so that we can use the .prettierrc config file to allow multiple developers to have the same settings.


## To get started with this boilerplate
Clone this repo
- npm install
- npm start
- Visit `http://localhost:8080/`




## NPM Scripts
Some npm scripts are already set up, such as:

_start, watch-dev, 
build-dev, build-prod, build-css, build-html,
build-dev-watch, build-css-watch,
lint in the terminal, lint-dev,
format-fix
clean-dist_

Development and production modes are done through the NPM scripts rather than through changing the _mode_ property in Webpack because it's easier.
Build Javscript and/or CSS seperately.

_npm run start 
This creates a live http://localhost:8080 development environment.

Some of the main npm scripts you need are all here for you.
You can use ES Lint through a terminal to make things easier. It's also handy to have a SASS watcher that builds your SASS when it's changed.





