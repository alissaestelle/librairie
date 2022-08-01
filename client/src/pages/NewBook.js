import BookForm from '../components/BookForm'

const NewBook = ({ book, change, submit }) => {
  return (
    <div className="new-book">
      <BookForm book={book} change={change} submit={submit} />
    </div>
  )
}

export default NewBook
