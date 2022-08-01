import Client from '../services/api'
import { baseURL } from '../services/api'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

const UserList = ({ collection, setCollection }) => {
  useEffect(() => {
    const getCollection = async () => {
      let res = await Client.get(`${baseURL}/books/collection`)

      let bookArr = res.data
      console.log(bookArr)
      setCollection(bookArr)
    }
    getCollection()
  }, [])

  return (
    <div className="pagination">
      <table className="book-table">
        <thead>
          <tr className="tr">
            <th id="title">Title</th>
            <th id="author">Author</th>
            <th id="desc">Description</th>
            <th id="publishDate">Published</th>
            <th id="edition">Edition</th>
            <th id="status">Status</th>
          </tr>
        </thead>
        <tbody>
          {collection.map((book) => (
            <tr key={book.id} className="tr">
              <td>
                <Link to={`/new/${book.id}`}>{book.title}</Link>
              </td>
              <td>{book.author}</td>
              <td>{book.desc}</td>
              <td>{book.publishDate}</td>
              <td>{book.edition}</td>
              <td>
                <label className="status">
                  <input type="checkbox"></input>
                </label>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default UserList
