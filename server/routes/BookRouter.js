const Router = require('express').Router()
const controller = require('../controllers/BookControl')

Router.post('/create', controller.CreateBook)
Router.get('/find/:bookID', controller.GetBookByID)
Router.put('find/:bookID', controller.UpdateBook)
Router.get('/collection', controller.GetCollection)
// Router.get('/update/:pK', controller.UpdateBook)

module.exports = Router
