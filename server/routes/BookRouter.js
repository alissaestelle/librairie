const Router = require('express').Router()
const controller = require('../controllers/BookControl')

Router.post('/create', controller.CreateBook)
Router.get('/find/:bookID', controller.GetBookByID)
Router.put('/update/:bookID', controller.UpdateBook)
Router.get('/collection', controller.GetCollection)

module.exports = Router
