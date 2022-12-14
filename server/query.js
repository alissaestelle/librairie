const { Book, sequelize } = require('./models')

const stringify = (data) => {
  console.log(JSON.stringify(data, null, 2))
}

const getAllBooks = async () => {
  let collection = await Book.findAll()
  stringify(collection)
}

const deleteBook = async () => {
  let book = await Book.destroy({
    where: {
      id: 12
    }
  })
  stringify(book)
}

const getThisBook = async () => {
  let thisBook = await Book.findAll({
    where: {
      id: 40
    }
  })
  stringify(thisBook)
}

async function main() {
  try {
    // await getAllBooks()
    // await getThisBook()
    // await deleteBook()
  } catch (e) {
    console.log(e)
  } finally {
    await sequelize.close()
  }
}

main()
