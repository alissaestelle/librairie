import BookBar from './components/BookBar'
import Client, { baseURL } from './services/api'
import EditBook from './pages/EditBook'
import NavBar from './components/NavBar'
import NewBook from './pages/NewBook'
import UserList from './components/UserList'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import './styles/App.css'

function App() {
  let navigate = useNavigate()

  // bookBar: an array of books from Google Books API
  const [bookBar, setBar] = useState([])

  // collection: an array of user books from the database
  const [collection, setCollection] = useState([])

  // book: initial book state that catches input when a user adds a book (its properties match the ones in the database's Book model)
  const [book, setBook] = useState({
    title: '',
    author: '',
    desc: '',
    publishDate: '',
    edition: '',
    status: false
  })

  // bookDetails: empty state that catches a specific book whenever one is returned from the database (used for PUT requests later)
  const [bookDetails, setDetails] = useState('')

  // USER TABLE DATA:

  // bookMax: the maximum number of books that can be displayed per page in the user table (aka 5 books per page)
  const [bookMax] = useState(5)

  // pageRange: the fixed range of paginated buttons that can be displayed in the user table (aka 5 page buttons at all times)
  const [pageRange, setPageRange] = useState(5)

  // [handleChange] creates a copy of [book], combines it with the user input, and replaces [book] with the updated version
  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value })
  }

  // [handleSubmit] sends a post request creating a new book instance in the database, resetting [book] afterwards
  const handleSubmit = async (e) => {
    e.preventDefault()
    await Client.post(`${baseURL}/books/create`, book)
    setBook({
      title: '',
      author: '',
      desc: '',
      publishDate: '',
      edition: '',
      status: false
    })
    navigate('/')
  }

  return (
    <div className="App">
      <BookBar bookBar={bookBar} setBar={setBar} />
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <UserList
              bookMax={bookMax}
              collection={collection}
              pageRange={pageRange}
              setCollection={setCollection}
            />
          }
        />
        <Route
          path="/new"
          element={
            <NewBook
              book={book}
              // [handleChange] changed to: [change]
              change={handleChange}
              // [handleSubmit] changed to: [submit]
              submit={handleSubmit}
            />
          }
        />
        <Route
          path="/edit/:bookID"
          element={
            <EditBook
              book={book}
              // [bookDetails] changed to: [details]
              details={bookDetails}
              setDetails={setDetails}
            />
          }
        />
      </Routes>
    </div>
  )
}

export default App
