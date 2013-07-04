var Canvas = new Class({
//	Binds: [],
	Implements: [Options, Events]
	, options: {
		'el':'canvas'
		, 'width': 416
		, 'height': 416
	}
	, ctx: null//canvas ctx
	, images: {}
	, objects:[]
	, initialize: function(options){
		this.setOptions(this.options, options);
		if(!$(this.options.el)){
			new Element('canvas', {
				'id': this.options.el
				, 'width':this.options.width
				, 'height':this.options.height
			}).inject($pick(this.options.parent, document.body));
		}
		this.ctx = $(this.options.el).getContext("2d");
	}
	, preload: function(images, callback){
		var i=0;
		var loaded=0;
		$each(images, function(src, name){
			i++;
			this.images[name]=new Image().addEvent('load', function(){
				loaded++;
				if(loaded>=i&&callback){
					callback();
				}
			}).set('src', src);

		}.bind(this));
	}
	, draw: function(){
		var i = arguments[0];
		var c = Array.slice(arguments, 1);
		if(c[2]){
			var trX = c[0]+this.images[i].width/2;
			var trY = c[1]+this.images[i].height/2;
			this.ctx.save();
			this.ctx.translate(trX, trY);
			this.ctx.rotate(c[2]*90*Math.PI/180);
			this.ctx.drawImage(this.images[i], -this.images[i].width/2, -this.images[i].height/2);
			this.ctx.restore();
//			this.ctx.rotate(-c[2]*90*Math.PI/180);
//			this.ctx.translate(-trX, -trY);
		} else {
			this.ctx.drawImage(this.images[i], c[0], c[1]);
		}
		var objId = this.objects.length;
		this.objects[objId]={
			'img':i
			, 'x': c[0]
			, 'y': c[1]
			, 'r': $pick(c[2], 0)
		};
		return objId;
	}
	, reDraw: function(){
		
	}
});

