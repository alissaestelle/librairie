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
  // sFF: Science-Fiction Fantasy
  let navigate = useNavigate()
  const [sFFBar, setBar] = useState([])
  const [collection, setCollection] = useState([])

  const [book, setBook] = useState({
    title: '',
    author: '',
    desc: '',
    publishDate: '',
    edition: '',
    status: false
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
              details={bookDetails}
              setBook={setBook}
              setDetails={setDetails}
            />
          }
        />
      </Routes>
    </div>
  )
}

export default App
