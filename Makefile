install :
	npm install
	bower install
upgrade :
	ncu -a
	npm update
	bcu -a
	bower update

compile :
	grunt compile

run :
	coffee app.coffee

test-server :
	mocha --compilers coffee:coffee-script/register --reporter dot ./game/test/
	mocha --compilers coffee:coffee-script/register --reporter dot ./room/test/
	mocha --compilers coffee:coffee-script/register --reporter dot ./router/test/

test :
	make test-server
	mocha-phantomjs -R dot public_test/js/index.html

production :
	uglifycss public/d/css/screen.css > public/d/c.css
	cat bower_components/jquery/dist/jquery.js \
	public/d/js/plugins/primus.js \
	bower_components/lodash/dist/lodash.min.js \
	node_modules/backbone/backbone.js \
	public/d/js/backbone-patch.js \
    bower_components/babylonjs/dist/preview\ release/babylon.js \
    node_modules/Order/index.js \
	public/d/js/init.js \
	public/d/locale/en.js \
	game/index.js \
	game/client.js \
	public/d/js/objects.js \
	public/d/js/rooms.js \
	public/d/js/router.js \
	public/d/js/run.js \
> public/d/all.js
	uglifyjs --beautify "indent-level=0" public/d/all.js -o public/d/j.js
	rm public/d/all.js


