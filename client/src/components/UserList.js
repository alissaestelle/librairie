import Client from '../services/api'
import { baseURL } from '../services/api'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

const UserList = ({ collection, setCollection }) => {
  useEffect(() => {
    const getCollection = async () => {
      let res = await Client.get(`${baseURL}/books/collection`)

      let bookArr = res.data
      setCollection(bookArr)
    }
    getCollection()
  }, [])

  const deleteBook = async (book) => {
    await Client.delete(`${baseURL}/books/delete/${book}`)
    window.location.reload(false)
  }

  return (
    <div className="pagination">
      <table className="book-table">
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
          {collection.map((book) => (
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
                    <option value="in">Checked In</option>
                    <option value="out">Checked Out</option>
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
  )
}

export default UserList
