import axios from 'axios'
import { useEffect } from 'react'
import { domain, aPI } from '../globals'

const Main = ({ books, setBooks }) => {
  useEffect(() => {
    const getBooks = async () => {
      const books = await axios.get(`${domain}&key=${aPI}`)

      let bookArr = books
      console.log(bookArr)
      setBooks(bookArr)
    }
    getBooks()
  }, [])

  return <div></div>
}

export default Main
