import routes from 'next-routes'

// routes.add([name], pattern = /name, page = name)
module.exports = routes()
  .add({name: 'Home', pattern: '/', page: 'main'})
  .add({name: 'About', pattern: '/about', page: 'about'})
