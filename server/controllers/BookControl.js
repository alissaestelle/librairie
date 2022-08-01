const { Book } = require('../models')

const CreateBook = async (req, res) => {
  try {
    let newBook = await Book.create({ ...req.body })
    res.send(newBook)
  } catch (e) {
    throw e
  }
}

const GetCollection = async (req, res) => {
  try {
    let collection = await Book.findAll()
    res.send(collection)
  } catch (e) {
    throw e
  }
}

module.exports = {
  CreateBook,
  GetCollection
}
