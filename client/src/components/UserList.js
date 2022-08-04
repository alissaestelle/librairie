import Client, { baseURL } from '../services/api'
import { Link } from 'react-router-dom'
import Pagination from './Pagination'
import { useEffect, useState } from 'react'

const UserList = ({ bookMax, collection, pageRange, setCollection }) => {
  // [bookMax]: 5 books per page (passed from <App>)
  // [pageRange]: 5 paginated buttons shown at all times (passed from <App>)

  const [currentPage, setCurrent] = useState(1)

  // pageIndex: a new array of undefined values set to the length of pageRange, i.e. 5
  const pageIndex = [...new Array(pageRange)]

  // checked: a boolean that determines whether or not a user has checked a book in or out
  const [checked, setChecked] = useState(false)

  // thisID: state that's used in the [updateStatus] & [deleteBook] functions (below) to catch a book's ID from the React Map (JS: 131-168)
  const [thisID, setID] = useState('')

  // bookState: an identical copy of [collection]
  const [bookState, setBookState] = useState([])

  // Global Variables:
  let bookArr
  let theseBooks

  useEffect(() => {
    // [getCollection] retrieves an array of all the books in the database
    const getCollection = async () => {
      let res = await Client.get(`${baseURL}/books/collection`)

      bookArr = res.data
      setCollection(bookArr.reverse())
      setBookState(bookArr)
    }
    getCollection()
  }, [])

  // [collection] is set to the array results from the database
  // A copy of the array results is also set to [bookState]

  // [getFiveBooks] partitions the [collection] array into groups of 5
  // Its output is set to [theseBooks], which is then used to create the React Map (JS: 131)
  const getFiveBooks = () => {
    let start = currentPage * bookMax - bookMax
    // Translation: start = currentPage * 5 - 5
    let end = start + bookMax
    // Translation: end = start + 5
    theseBooks = collection.slice(start, end)
  }

  getFiveBooks()

  // [updateStatus] sends a put request, updating *only the status row* of a book in the database
  const updateStatus = async (e) => {
    // <e.target.checked>: automatically toggles a checkbox between true & false (extremely handy)
    let boolean = e.target.checked

    // <e.target.id> corresponds to a specific book ID within the React Map
    let bookID = e.target.id

    // [bookStatus]: a piece of state containing the only piece of information I want to update in the database
    let bookStatus = {
      status: boolean
    }
    setChecked(boolean)
    setID(bookID)
    await Client.put(`${baseURL}/books/status/${bookID}`, bookStatus)

    window.location.reload(false)
  }

  const sortByStatus = (e) => {
    // This function was tricky. I originally tried using [collection].filter() to sort the books, but the updated version replaced the original version every time it got set to [collection]. [bookState] was made to preserve a copy of the original data so that [collection] could get properly reset for each call. [bookState] even gets filtered here without being affected since its state will only change if setBookState() is called, but it never is. Pretty neat!

    let available = bookState.filter((book) => !book.status)
    let unavailable = bookState.filter((book) => book.status)

    if (e.target.value === 'in') {
      setCollection(bookState)
      setCollection(available)
    }

    if (e.target.value === 'out') {
      setCollection(bookState)
      setCollection(unavailable)
    }

    if (e.target.value === 'all') {
      setCollection(bookState)
    }
  }

  // [deleteBook] sends a delete request, deleting a book from the database
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
