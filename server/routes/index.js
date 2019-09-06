import routes from 'next-routes'

// routes.add([name], pattern = /name, page = name)
module.exports = routes()
  .add({name: 'home', pattern: '/', page: 'main'})
  .add({name: 'about', pattern: '/about', page: 'about'})
