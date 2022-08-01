import BookBar from './components/BookBar'
import NavBar from './components/NavBar'
import NewBook from './components/NewBook'
import UserList from './components/UserList'
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import './styles/App.css'

function App(props) {
  // sFF: Science-Fiction Fantasy
  const [sFFBar, setBar] = useState([])
  // const [bookSearch, setSearch] = useState('')

  const [book, setBook] = useState({
    title: props.book ? props.book.title : '',
    author: props.book ? props.book.author : '',
    desc: props.book ? props.book.desc : '',
    pub_date: props.book ? new Date(props.book.pub_date) : '',
    edition: props.book ? parseInt(props.book.edition) : ''
  })

  const handleChange = (e) => {
    console.log(e.target.value)
    setBook({ ...book, [e.target.name]: e.target.value })
  }

  // const handleDate = (e) => {
  //   let locale = new Date(e.target.value)
  //   let publishDate = locale.toLocaleDateString()
  //   console.log(publishDate)
  //   setBook({
  //     ...book,
  //     [e.target.value]: publishDate
  //   })
  // }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(`Book Title: ${book.title}`)
    console.log(`Book Author: ${book.author}`)
    console.log(`Description: ${book.desc}`)
    console.log(`Publish Date: ${book.pub_date}`)
    console.log(`Edition: ${book.edition}`)
  }

  return (
    <div className="App">
      <BookBar sFFBar={sFFBar} setBar={setBar} />
      <NavBar />
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route
          path="/new"
          element={
            <NewBook
              book={book}
              setBook={setBook}
              change={handleChange}
              // date={handleDate}
              submit={handleSubmit}
            />
          }
        />
      </Routes>
    </div>
  )
}

export default App
