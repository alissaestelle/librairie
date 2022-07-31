import BookForm from './BookForm'

const NewBook = ({ book, handleChange }) => {
  return (
    <div className="new-book">
      <BookForm book={book} handleChange={handleChange} />
    </div>
  )
}

export default NewBook
