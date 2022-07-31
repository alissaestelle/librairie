import BookBar from './components/BookBar'
import NavBar from './components/NavBar'
import NewBook from './components/NewBook'
import UserList from './components/UserList'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './styles/App.css'

function App(props) {
  // sFF: Science-Fiction Fantasy
  const [sFFBar, setBar] = useState([])
  // const [bookSearch, setSearch] = useState('')

  const [book, setBook] = useState({
    title: props.book ? props.book.title : '',
    author: props.book ? props.book.author : '',
    desc: props.book ? props.book.desc : '',
    pub_date: props.book ? props.book.pub_date : '',
    edition: props.book ? props.book.edition : ''
  })

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value })
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
              handleChange={handleChange}
            />
          }
        />
      </Routes>
    </div>
  )
}

export default App
