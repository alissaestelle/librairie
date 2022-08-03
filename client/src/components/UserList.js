import Client, { baseURL } from '../services/api'
import { Link } from 'react-router-dom'
import Pagination from './Pagination'
import { useEffect, useState } from 'react'

const UserList = ({ bookMax, collection, pageMax, setCollection }) => {
  const [currentPage, setCurrent] = useState(1)
  const pageIndex = [...new Array(pageMax)]
  const [length] = useState(pageIndex.length - 1)
  const [totalPages, setPages] = useState()

  useEffect(() => {
    const getCollection = async () => {
      let res = await Client.get(`${baseURL}/books/collection`)

      let bookArr = res.data
      bookArr = bookArr.reverse()
      setCollection(bookArr)

      let totalBooks = bookArr.length
      let pages = Math.round(totalBooks / bookMax)
      setPages(pages)
    }
    getCollection()
  }, [])

  const getFiveBooks = () => {
    let start = currentPage * bookMax - bookMax
    let end = start + bookMax
    return collection.slice(start, end)
  }

  getFiveBooks()

  const deleteBook = async (book) => {
    await Client.delete(`${baseURL}/books/delete/${book}`)
    window.location.reload(false)
  }

  return (
    <div className="user-list">
      <div className="table-flex">
        <table className="table">
          <thead>
            <tr className="tr">
              <th className="title">Title</th>
              <th className="author">Author</th>
              <th className="desc">Description</th>
              <th className="publishDate">Published</th>
              <th className="edition">Edition</th>
              <th className="status">Status</th>
              <th className="delete">Delete</th>
            </tr>
          </thead>
          <tbody>
            {getFiveBooks().map((book) => (
              <tr key={book.id} className="tr">
                <td className="title">
                  <Link to={`/edit/${book.id}`}>{book.title}</Link>
                </td>
                <td className="author">{book.author}</td>
                <td className="desc">{book.desc}</td>
                <td className="publishDate">{book.publishDate}</td>
                <td className="edition">{book.edition}</td>
                <td className="status">
                  <label className="status">
                    <select name="status">
                      <option value="in">Check In</option>
                      <option value="out">Check Out</option>
                    </select>
                  </label>
                </td>
                <td className="delete">
                  <button id="delete" onClick={() => deleteBook(book.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination
        currentPage={currentPage}
        length={length}
        pageIndex={pageIndex}
        pageMax={pageMax}
        setCurrent={setCurrent}
      />
    </div>
  )
}

export default UserList
