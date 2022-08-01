const express = require('express')
const cors = require('cors')
const logger = require('morgan')

const app = express()
const BookRouter = require('./routes/BookRouter')

const PORT = process.env.PORT || 3001

app.use(cors())
app.use(logger('dev'))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/books', BookRouter)

app.get('/', (req, res) => res.json({ message: 'Server Running!' }))

app.listen(PORT, () =>
  console.log(`Serving up fresh reads on port: ${PORT} 📚`)
)
