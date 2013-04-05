var Key = new Class({
	Binds: ['down', 'up']
	, Implements: [Options, Events]
	, options: {
		container: null
		, delay:50
	}
	, keyStatus:{}
	, keyDelay:{}
	, initialize: function(options){
		this.setOptions(this.options, options);
		$pick(this.options.container, window).addEvents({
			'keydown':function(e){
				this.down(e);
			}.bind(this)
			, 'keyup':function(e){
				this.up(e);
			}.bind(this)
		});
	}
	, down: function(e){
		var key = e.key;
		$clear(this.keyDelay[key]);
		if(!this.keyStatus[key]){
			this.fireEvent('down', e);
		}
		this.keyStatus[key]=true;
	}
	, up: function(e){
		var key = e.key;
		$clear(this.keyDelay[key]);
		this.keyDelay[key] = (function(){
			if(this.keyStatus[key]){
				this.keyStatus[key]=false;
				this.fireEvent('up', e);
			}
		}.delay(this.options.delay, this));
	}
});