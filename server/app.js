const express = require('express')
const cors = require('cors')
const logger = require('morgan')
// Heroku Deploy CMD:
const path = require('path')

const app = express()
const BookRouter = require('./routes/BookRouter')

const PORT = process.env.PORT || 3001

app.use(cors())
app.use(logger('dev'))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// Heroku Deploy CMD:
app.use(express.static(path.join(__dirname + '/public')))

app.use('/books', BookRouter)

app.get('/', (req, res) => res.json({ message: 'Server Running!' }))

app.listen(PORT, () =>
  console.log(`Serving up fresh reads on port: ${PORT} 📚`)
)
