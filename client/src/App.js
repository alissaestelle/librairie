import Client from './services/api'
import BookBar from './components/BookBar'
import NavBar from './components/NavBar'
import NewBook from './components/NewBook'
import UserList from './components/UserList'
import { baseURL } from './services/api'
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import './styles/App.css'

function App(props) {
  // sFF: Science-Fiction Fantasy
  const [sFFBar, setBar] = useState([])
  const [collection, setCollection] = useState([])

  const [book, setBook] = useState({
    title: props.book ? props.book.title : '',
    author: props.book ? props.book.author : '',
    desc: props.book ? props.book.desc : '',
    publishDate: props.book ? new Date(props.book.publishDate) : '',
    edition: props.book ? parseInt(props.book.edition) : '',
    status: props.book ? props.book.status : false
  })

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
      </Routes>
    </div>
  )
}

export default App
