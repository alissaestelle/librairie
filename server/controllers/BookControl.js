const { Book } = require('../models')

const CreateBook = async (req, res) => {
  try {
    let newBook = await Book.create({ ...req.body })
    res.send(newBook)
  } catch (e) {
    throw e
  }
}

const GetBookByID = async (req, res) => {
  try {
    let thisBook = await Book.findAll({
      where: {
        id: req.params.bookID
      }
    })
    res.send(thisBook)
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

const UpdateBook = async (req, res) => {
  try {
    let revisions = await Book.update(req.body, {
      where: {
        id: req.params.bookID
      }
    })
    res.send(revisions)
  } catch (e) {
    throw e
  }
}

module.exports = {
  CreateBook,
  GetBookByID,
  GetCollection,
  UpdateBook
}
