import BookBar from '../components/BookBar'

const Main = ({ books, setBooks }) => {
  return (
    <div>
      <BookBar books={books} setBooks={setBooks} />
    </div>
  )
}

export default Main
