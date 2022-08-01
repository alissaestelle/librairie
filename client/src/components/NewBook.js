import BookForm from './BookForm'

const NewBook = ({ book, setBook, change, date, submit }) => {
  return (
    <div className="new-book">
      <BookForm
        book={book}
        setBook={setBook}
        change={change}
        // date={date}
        submit={submit}
      />
    </div>
  )
}

export default NewBook
