r = new (App.Router)(el: $('#wrap'))
primus = undefined
App.socket.send.on 'all', ->
  primus.write Array::slice.call(arguments)
  return

connect = (address) ->
  primus = Primus.connect(address, 'ping': 1000)
  primus.on 'data', (data) ->
    App.socket.receive.trigger.apply App.socket.receive, data
    return
  primus.on 'timeout', ->
  primus.on 'end', ->
  primus.on 'close', ->
  primus.on 'disconnection', ->
  primus.on 'open', ->
    App.socket.send.trigger 'login:try'
    if !Backbone.History.started
      Backbone.history.start()
    #      App.socket.receive.trigger.apply(App.socket.receive, ['connect']);
    return
  $('body').append '<div id="debug"><div class="latency"></div></div>'
  $latency = $('#debug .latency')
  primus.on 'incoming::pong', ->
    $latency.text primus.latency
    return
  primus

connect('').on 'timeout', ->
  connect ':9052'
  return