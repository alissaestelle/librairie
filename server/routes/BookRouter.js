const Router = require('express').Router()
const controller = require('../controllers/BookControl')

Router.post('/create', controller.CreateBook)
Router.get('/find/:bookID', controller.GetBookByID)
Router.put('/update/:bookID', controller.UpdateBook)
Router.get('/collection', controller.GetCollection)
Router.delete('/delete/:bookID', controller.DeleteBook)
Router.put('/status/:bookID', controller.UpdateStatus)

module.exports = Router
