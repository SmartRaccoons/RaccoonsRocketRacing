window.addEvent('domready', function(){
	var container = document.body;
	var key = new Key();
	key.addEvent('down', function(e){
		var key = e.key;
		var keys = ['up', 'left', 'down', 'right'];
		if(keys.contains(key)){
			canvas.move(2, keys.indexOf(key));
		}
	});
	key.addEvent('up', function(e){
		var key = e.key;
		var keys = ['up', 'left', 'down', 'right'];
		if(keys.contains(key)){
			canvas.stop(2, keys.indexOf(key));
		}
	});
	var canvas = new Tank({
		'container': container
		, 'width': 416
		, 'height': 416
	});
	canvas.preload({
		'brick':'img/brick.png'
		, 'iron':'img/iron.png'
		, 'tank1':'img/tank1.png'
	}, function(){
		canvas.draw('brick'
			, 0, 0
		);
		canvas.draw('brick'
			, 0, 16
		);
		canvas.draw('tank1'
			, 64, 64, 0
			, 50, 80
		);
		canvas.draw('brick'
			, 16, 16
		);
		canvas.draw('iron'
			, 32, 32
		);
		//image, x, y, r,
		//health, speed, shoot speed, shoot power
		
		canvas.updatePerioddical();
		
	});

});
function draw(ctx, img, s){
//	for(var i=0; i<=2; i++){
//		ctx.drawImage(img, 16, 0);
		ctx.drawImage(img, 0, 0, 8, 16, 0, 0, 8, 16);
		ctx.drawImage(img, 0, 0, 8, 16, 8, 0, 8, 16);
//	}
}
function d(v){
	console.info(v);
}


