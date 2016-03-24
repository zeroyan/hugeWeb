fis.match('::packager', {
  spriter: fis.plugin('csssprites')
});

fis.match('*', {
  useHash: false
});

fis.match('*.js', {
  optimizer: fis.plugin('uglify-js')
});

fis.match('*.css', {
  useSprite: true,
  optimizer: fis.plugin('clean-css')
});

fis.match('*.png', {
  optimizer: fis.plugin('png-compressor')
});

fis.match('::package', {
  postpackager: fis.plugin('loader')
});

fis.match('*.css', {
  packTo: '/static/app.min.css'
});

fis.match('*.js', {
  packTo: '/static/app.min.js'
});

//有错
// fis.match('./js/*.js', {
//   packTo: '/static/app.min.js'
// });