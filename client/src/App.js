import Client from './services/api'
import BookBar from './components/BookBar'
import EditBook from './pages/EditBook'
import NavBar from './components/NavBar'
import NewBook from './pages/NewBook'
import UserList from './components/UserList'
import { baseURL } from './services/api'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import './styles/App.css'

function App(props) {
  let navigate = useNavigate()

  // sFF: Science-Fiction Fantasy
  const [sFFBar, setBar] = useState([])
  const [collection, setCollection] = useState([])

  const [book, setBook] = useState({
    title: props.book ? props.book.title : '',
    author: props.book ? props.book.author : '',
    desc: props.book ? props.book.desc : '',
    publishDate: props.book ? props.book.publishDate : '',
    edition: props.book ? props.book.edtion : '',
    status: props.book ? props.book.edition : false
  })

  const [bookDetails, setDetails] = useState('')

  const handleChange = (e) => {
    console.log(e.target.value)
    setBook({ ...book, [e.target.name]: e.target.value })
  }

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
      <BookBar sFFBar={sFFBar} setBar={setBar} />
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <UserList collection={collection} setCollection={setCollection} />
          }
        />
        <Route
          path="/new"
          element={
            <NewBook book={book} change={handleChange} submit={handleSubmit} />
          }
        />
        <Route
          path="/edit/:bookID"
          element={
            <EditBook
              book={book}
              change={handleChange}
              details={bookDetails}
              setBook={setBook}
              setDetails={setDetails}
              submit={handleSubmit}
            />
          }
        />
      </Routes>
    </div>
  )
}

export default App
