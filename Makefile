install :
	npm install
	bower install
upgrade :
	ncu -a
	bcu -a

compile :
	grunt compile

test :
	mocha --compilers coffee:coffee-script/register --reporter dot ./game/test/
	mocha --compilers coffee:coffee-script/register --reporter dot ./room/test/
	mocha --compilers coffee:coffee-script/register --reporter dot ./router/test/
	mocha-phantomjs -R dot public_test/js/index.html

production :
	yuicompressor public/d/css/screen.css -o public/d/c.css
	cat node_modules/lodash/lodash.js \
	bower_components/jquery/dist/jquery.js \
	node_modules/backbone/backbone.js \
	public/d/js/backbone-patch.js \
	bower_components/pixi.js/bin/pixi.dev.js \
	public/d/js/init.js \
	public/d/locale/en.js \
	game/index.js \
	game/client.js \
	public/d/js/objects.js \
	public/d/js/rooms.js \
	public/d/js/router.js \
	public/d/js/run.js \
> public/d/all.js
	yuicompressor --line-break 0 public/d/all.js -o public/d/j.js
	rm public/d/all.js


