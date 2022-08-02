import BookForm from '../components/BookForm'

const NewBook = ({ book, change, details, submit }) => {
  return (
    <div className="new-book">
      <BookForm book={book} details={details} change={change} submit={submit} />
    </div>
  )
}

export default NewBook
