import { useState } from 'react'
import Main from './pages/Main'
import './styles/App.css'

function App() {
  const [books, setBooks] = useState([])
  // const [bookSearch, setSearch] = useState('')

  return (
    <div className="App">
      <Main books={books} setBooks={setBooks}></Main>
    </div>
  )
}

export default App
