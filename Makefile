update :
	npm install

test :


production :
	yui-compressor public/d/css/screen.css -o public/d/c.css
	cat node_modules/socket.io/node_modules/socket.io-client/dist/socket.io.js \
	node_modules/lodash/lodash.js \
	node_modules/backbone/backbone.js \
	public/d/js/init.js \
	public/d/js/locale.js \
	public/d/js/router.js \
> public/d/all.js
	yui-compressor --line-break 0 public/d/all.js -o public/d/j.js
	rm public/d/all.js

	coffee -c app_dev.coffee
	coffee -c app.coffee

