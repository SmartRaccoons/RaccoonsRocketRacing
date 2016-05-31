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
    @stop()
    super

  add: (pr)->
    super
    if pr.object is 'user'
      @_elements[pr.id].view = view = BABYLON.Mesh.CreateSphere("#{pr.object}#{pr.id}", 0, 0, @scene)
      child = BABYLON.Mesh.CreateCylinder("#{pr.object}#{pr.id}", 8, 8, 8, 5, 5, @scene)
      child.parent = view
      @_elements[pr.id].view.child = child
      if pr.params.user_id is @options.user
        @camera.target = view
    if pr.object is 'bullet'
      @_elements[pr.id].view = view = BABYLON.Mesh.CreateSphere("#{pr.object}#{pr.id}", 5, 8, @scene)
    if pr.object is 'brick'
      @_elements[pr.id].view = view = BABYLON.Mesh.CreateBox("#{pr.object}#{pr.id}", 15, @scene)

  elements: (data)->
    for id, el of @_elements
      if el.view
        el.view.dispose()
    @_elements = {}
    for id, val of data
      @add(val)

  destroy: (pr)->
    if @_elements[pr.id].view
      @_elements[pr.id].view.dispose()
    super

  _updateView: (dt)->
    super
    @draw()

  draw: ->
    for id, val of @_elements
      if val.view
        val.view.position.x = val.pos[0]
        val.view.position.z = val.pos[1]
        if val.view.child
          val.view.child.rotation.y = 2*Math.PI - val.angle
        else
          val.view.rotation.y = 2*Math.PI - val.angle
    @scene.render()

  stop: ->
    super
    if @scene
      @scene.dispose()

  start: ->
    super

    @scene = new BABYLON.Scene(@engine)
    @camera = new BABYLON.FollowCamera("camera", new BABYLON.Vector3(20, -40, -150), @scene)
    @camera.setTarget(BABYLON.Vector3.Zero())
    @camera.heightOffset = 150
    @camera.radius = 300
    @camera.rotationOffset = 170

    new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), @scene)
#    groundMaterial = new BABYLON.StandardMaterial("ground", @scene)
#    groundMaterial.diffuseTexture = new BABYLON.Texture("/d/img/earth.jpg", @scene)
#    ground = BABYLON.Mesh.CreateGround("ground1", 600, 600, 600, @scene)
#    ground.material = groundMaterial
    @engine.resize()


  render: ->
    @$el.append('<canvas id="renderGameCanvas">')
    @engine = new BABYLON.Engine(document.getElementById('renderGameCanvas'), true)
    @
