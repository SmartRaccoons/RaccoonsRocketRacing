window._l = (key, subparams) ->
  res = App.lang.strings[App.lang.active][key]
  if subparams
    res = res.replace(/\\?\{([^{}]+)\}/g, (match, name) ->
      if match.charAt(0) == '\\'
        return match.slice(1)
      if subparams[name] != null then subparams[name] else ''
    )
  res

window.App =
  'events': {}
  'socket':
    'receive': {}
    'send': {}
  'sound': (what) ->
    try
      a = new Audio('/d/sounds/' + what + '.wav')
      a.volume = 0.3
      a.play()
    catch e
    return
  'lang':
    'active': 'en'
    'strings': 'en': {}
_.extend App.events, Backbone.Events
_.extend App.socket.receive, Backbone.Events
_.extend App.socket.send, Backbone.Events