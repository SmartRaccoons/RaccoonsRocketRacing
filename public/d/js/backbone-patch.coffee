
BackboneViewRemove = Backbone.View::remove
_.extend Backbone.View.prototype,
  __render: (data) ->
    d = _.extend({}, data)
    d['self'] = this
    @$el.html @template(_.extend(d, @__renderData(d)))
    this
  __renderData: (d) ->
    {}
  render: (data) ->
    if @model
      return @__render(@model.toJSON())
    if @collection
      return @__render(@collection.toJSON())
    @__render data or {}
    this
  appendSubView: (v) ->
    if !@__subview
      @__subview = []
    @__subview.push v
    v
  __cleanup: ->
    view = undefined
    if @__subview
      while view = @__subview.shift()
        view.remove()
    this
  remove: ->
    @__cleanup()
    BackboneViewRemove.call this