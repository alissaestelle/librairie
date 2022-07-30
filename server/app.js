const express = require('express')
const cors = require('cors')
const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
  optionSuccessStatus: 200
}

const logger = require('morgan')

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors(corsOptions))
app.use(logger('dev'))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => res.json({ message: 'Server Running!' }))
app.listen(PORT, () =>
  console.log(`Serving up fresh reads on port: ${PORT} 📚`)
)
