(function(){
    var BackboneViewRemove = Backbone.View.prototype.remove;
    _.extend(Backbone.View.prototype, {
        //TODO: TDD
        __render: function(data){
            var d = _.extend({}, data)
            d['self'] = this;
            this.$el.html(this.template(_.extend(d, this.__renderData(d))))
            return this;
        },
        __renderData: function(d){
            return {};
        },
        render: function(data){
            if (this.model){
                return this.__render(this.model.toJSON());
            }
            if (this.collection){
                return this.__render(this.collection.toJSON());
            }
            this.__render(data || {});
            return this;
        },
        appendSubView: function(v){
            if(!this.__subview) this.__subview = [];
            this.__subview.push(v);
            return v;
        },
        __cleanup: function(){
            var view;
            if(this.__subview) while (view = this.__subview.shift()) { view.remove(); }
            return this;
        },
        remove: function(){
            this.__cleanup();
            return BackboneViewRemove.call(this);
        }
    });
})();