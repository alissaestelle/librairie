import Client, { baseURL } from '../services/api'
import { Link } from 'react-router-dom'
import Pagination from './Pagination'
import { useEffect, useState } from 'react'

const UserList = ({ bookMax, collection, pageRange, setCollection }) => {
  const [currentPage, setCurrent] = useState(1)
  const pageIndex = [...new Array(pageRange)]
  const [checked, setChecked] = useState(false)
  const [thisID, setID] = useState('')
  const [bookState, setBookState] = useState([])
  let bookArr
  let theseBooks

  useEffect(() => {
    const getCollection = async () => {
      let res = await Client.get(`${baseURL}/books/collection`)

      bookArr = res.data
      // bookArr = bookArr.sort()
      setCollection(bookArr.reverse())
      setBookState(bookArr)
    }
    getCollection()
  }, [])

  const getFiveBooks = () => {
    let start = currentPage * bookMax - bookMax
    console.log(bookMax)
    let end = start + bookMax
    theseBooks = collection.slice(start, end)
  }

  getFiveBooks()

  const updateStatus = async (e) => {
    let boolean = e.target.checked
    let bookID = e.target.id
    let bookStatus = {
      status: boolean
    }
    setChecked(boolean)
    setID(bookID)
    await Client.put(`${baseURL}/books/status/${bookID}`, bookStatus)

    window.location.reload(false)
  }

  const sortByStatus = (e) => {
    let available = bookState.filter((book) => !book.status)
    let unavailable = bookState.filter((book) => book.status)

    if (e.target.value === 'in') {
      setCollection(bookState)
      setCollection(available)
      console.log('BS', bookState)
    }

    if (e.target.value === 'out') {
      setCollection(bookState)
      setCollection(unavailable)
    }

    if (e.target.value === 'all') {
      setCollection(bookState)
    }
  }

  const deleteBook = async (e) => {
    let bookID = e.target.id
    setID(bookID)
    await Client.delete(`${baseURL}/books/delete/${bookID}`)

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
              <th className="status">
                <form>
                  <label htmlFor="status">Status</label>
                  <select id="select" onChange={sortByStatus}>
                    <option value="all" defaultValue="all">
                      All Books
                    </option>
                    <option value="in">Available</option>
                    <option value="out">Checked Out</option>
                  </select>
                </form>
              </th>
              <th className="delete">Delete</th>
            </tr>
          </thead>
          <tbody>
            {theseBooks.map((book) => (
              <tr key={book.id} className="tr">
                <td id="title">
                  <Link to={`/edit/${book.id}`}>{book.title}</Link>
                </td>
                <td id="author">{book.author}</td>
                <td id="desc">{book.desc}</td>
                <td id="publishDate">
                  {new Date(book.publishDate).toLocaleDateString()}
                </td>
                <td id="edition">{book.edition}</td>
                <td id="status">
                  <form id="check">
                    {book.status === true ? (
                      <input
                        type="checkbox"
                        id={book.id}
                        defaultChecked="true"
                        onChange={updateStatus}
                      />
                    ) : (
                      <input
                        type="checkbox"
                        id={book.id}
                        onChange={updateStatus}
                      />
                    )}
                  </form>
                </td>
                <td className="delete">
                  <div id="delete">
                    <button id={book.id} onClick={deleteBook}>
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination
        currentPage={currentPage}
        pageIndex={pageIndex}
        pageRange={pageRange}
        setCurrent={setCurrent}
      />
    </div>
  )
}

export default UserList
