#_ = window._
#Backbone = window.Backbone


window.Game = class Bco extends window.GameCore
  #TODO TDD
  _.extend @prototype, Backbone.View.prototype
  className: 'game-canvas'
  options:
    path: ''

  constructor: ->
    super
    Backbone.View.prototype.constructor.apply(this, arguments)
    @

  restart: ->
    for id, val of @_elements
      if val.sprite
        @stage.removeChild(val.sprite)
    super

  add: (pr)->
    super
    sprite = new PIXI.Sprite(PIXI.Texture.fromImage(@options.path+'d/img/'+pr.object+'.png'))
    sprite.anchor.x = 0.5
    sprite.anchor.y = 0.5
    @_elements[pr.id]['sprite'] = sprite
    @stage.addChild(sprite)

  elements: (data)->
    for id, el of @_elements
      if el.sprite
        @stage.removeChild(el.sprite)
    @_elements = {}
    for id, val of data
      @add(val)

  destroy: (pr)->
    if @_elements[pr.id].sprite
      @stage.removeChild(@_elements[pr.id].sprite)
    super

  _updateView: (dt)->
    super
    @draw()

  draw: ->
    for id, val of @_elements
      if val.sprite
        val.sprite.position.x = val.pos[0] + val.size[0]/2
        val.sprite.position.y = val.pos[1] + val.size[1]/2
        val.sprite.rotation = val.angle
    @renderer.render(@stage)

  render: ->
    @stage = new PIXI.Stage
    @renderer = PIXI.autoDetectRenderer(416, 416)
    @$el.append(@renderer.view)
    @
