guard 'livereload', :port => '35729', :apply_js_live => false do
  watch(%r{.+\.(html|js|css)})
end

guard 'coffeescript', :input => 'public/d/js'
guard 'coffeescript', :input => 'app.coffee'
guard 'coffeescript', :input => 'app_dev.coffee'
guard 'coffeescript', :input => 'router'
guard 'coffeescript', :input => 'bco'

#guard :shell do
#  watch('public/d/sass/screen.sass') { `cd public/d && compass compile sass/screen.sass` }
#end