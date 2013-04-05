var Tank = new Class({
//	Binds: ['attachLinkEvent', 'setNewContent'],
	Extends: Canvas
	, movePeriod: []
	, moveDirection:[]
	, initialize: function(options){
		this.parent(options);
	}
	, move: function(id, direction){
		this.stop(id);
		var param = direction==0|direction==2 ? 'y' : 'x';
		var value = direction==0|direction==1 ? -1 : 1;
		this.update(id, {
			'r':direction
		});
		this.movePeriod[id]=(function(){
			this.rise(id, param, value*this.objects[id]['s']/this.options.keyPerSecond);
		}).periodical(1000/this.options.keyPerSecond, this);
		this.moveDirection[id]=direction;
	}
	, update: function(id, params){
//		this.parent(id, params);
		$each(params, function(value, param){
			if(param=='r'&&this.objects[id][param]!=value){
				this.roundCoors(id);
			}
		}.bind(this));
		this.parent(id, params);
	}
	, roundCoors: function(id){
		var step = 16;
		$each({
			'width':'x'
			, 'height':'y'
		}, function(v, p){
			for(var i=0; i<this.options[p]; i+=step){
				if(this.objects[id][v]<=i){
					if((this.objects[id][v])>=(i-step/2)){
						this.objects[id][v]=i;
					} else {
						this.objects[id][v]=i-step;
					}
					break;
				}
			}
		}.bind(this));
	}
	, stop: function(id, dir){
		if(dir!=undefined&&this.moveDirection[id]!=dir){
			return false;
		}
		$clear(this.movePeriod[id]);
	}
});
