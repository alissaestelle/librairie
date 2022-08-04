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

  const [bookBar, setBar] = useState([])
  const [bookDetails, setDetails] = useState('')

  const [book, setBook] = useState({
    title: '',
    author: '',
    desc: '',
    publishDate: '',
    edition: '',
    status: false
  })

  const [bookMax] = useState(5)
  const [collection, setCollection] = useState([])
  const [pageMax, setPageMax] = useState(5)
  const [pageMin] = useState(1)

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
      <BookBar bookBar={bookBar} setBar={setBar} />
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <UserList
              bookMax={bookMax}
              collection={collection}
              pageMax={pageMax}
              setCollection={setCollection}
            />
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
              setDetails={setDetails}
            />
          }
        />
      </Routes>
    </div>
  )
}

export default App
