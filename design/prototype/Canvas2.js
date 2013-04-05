var Canvas = new Class({
//	Binds: ['attachLinkEvent', 'setNewContent'],
	Implements: [Options, Events],
	options: {
		container: null
		, 'width': 416
		, 'height': 416
		, keyPerSecond: 20
	},
	images:{},
	objects: [],
	periods:{},
	objectsUpdated:false,
	initialize: function(options){
		this.setOptions(this.options, options);
		this.canvas = new Element('canvas', {
			'width': this.options.width
			, 'height': this.options.height
		}).inject(this.options.container);
		this.ctx = this.canvas.getContext('2d');
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
	//image, x, y, r,
	//health, speed, shoot speed, shoot power
	, draw: function(){
		var obj = {
			'img':arguments[0]
			, 'x':arguments[1]
			, 'y':arguments[2]
			, 'r': $pick(arguments[3], 0)
				, 'h': $pick(arguments[4], 1)
				, 's': $pick(arguments[5], 0)//pixel by second
				, 'ss': $pick(arguments[6], 0)
				, 'sp': $pick(arguments[7], 0)
		};
		this.toctx(obj);
		this.objects[this.objects.length]=obj;
	}
	, toctx: function(p){
		var i = p['img'];
		if(p['r']>0){
			var trX = p['x']+this.images[i].width/2;
			var trY = p['y']+this.images[i].height/2;
			this.ctx.save();
			this.ctx.translate(trX, trY);
			this.ctx.rotate(-p['r']*90*Math.PI/180);
			this.ctx.drawImage(this.images[i], -this.images[i].width/2, -this.images[i].height/2);
			this.ctx.restore();
		} else {
			this.ctx.drawImage(this.images[i], p['x'], p['y']);
		}
	}
	, reDraw: function(){
		this.ctx.clearRect(0 ,0 , this.options.width, this.options.height);
		this.objects.each(function(arg){
			this.toctx(arg);
		}.bind(this));
		this.objectsUpdated = false;
	}
	, update: function(id, params){
		$each(params, function(value, param){
			this.objects[id][param]=value;
		}.bind(this));
		this.objectsUpdated = true;
	}
	, rise: function(id, param, value){
		var up = {}
		up[param]=this.objects[id][param]+value;
		this.update(id, up);
	}
	, updatePerioddical: function(){
		(function(){
			if(this.objectsUpdated){
				this.reDraw();
			}
		}).periodical(1000/this.options.keyPerSecond, this);
	}
});