App.Sprite = class Sprite
  size: [0, 0]
  pos: [0, 0]

  _frames: [0]
  _frames_speed: 0
  _frames_index: 0

  constructor: ->
    if @_name
      @url = 'd/img/'+@_name+'.png'
    @img = new Image()
    @img.onload = =>
      @_loaded = true
    @img.src = @url

  update: (dt)->
    if @_frames_speed>0
      @_frames_index += @_frames_speed * dt
      if @_frames_index >= @_frames.length
        @_frames_index = @_frames_index % @_frames.length

  render: (c)->
    if not @_loaded
      return
    frame = @_frames[Math.floor(@_frames_index)]
    c.drawImage(@img,
      @pos[0] + @size[0]*frame, @pos[1], @size[0], @size[1],
      0, 0,
      @size[0], @size[1])


App.SpriteTank = class Tank extends Sprite
  size: [32, 32]
  _name: 'tank'


App.SpriteBullet = class Bullet extends Sprite
  size: [8, 8]
  _name: 'bullet'


App.SpriteBrick = class Brick extends Sprite
  size: [16, 16]
  _name: 'brick'

App.SpriteBase = class Base extends Sprite
  size: [32, 32]
  _name: 'base'