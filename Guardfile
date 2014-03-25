guard 'livereload', :host => '192.168.1.102', :port => '35729', :apply_js_live => false do
  watch(%r{.+\.(html|js|css)})
end

guard :shell do
  watch /.*\.coffee$/ do |m|
    `coffee -c #{m[0]}`
  end
end

guard :shell do
  watch('public/d/sass/screen.sass') { `cd public/d && compass compile sass/screen.sass` }
end