import BookForm from '../components/BookForm'
import Client, { baseURL } from '../services/api'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'

const EditBook = ({ book, details, setDetails }) => {
  let { bookID } = useParams()
  let navigate = useNavigate()

  // NOTE: [bookDetails] is now abbreviated to simply: [details] (sent from <App>)

  useEffect(() => {
    // [getBookByID] returns a specific book by ID and sets it to [details]
    const getBookByID = async () => {
      let res = await Client.get(`${baseURL}/books/find/${bookID}`)

      let thisBook = res.data[0]
      setDetails(thisBook)
    }
    getBookByID()
  }, [bookID])

  // [handleUpdate] creates a copy of [details], combines it with user event input (e), then replaces [details] with the updated version
  const handleUpdate = (e) => {
    let edits = {
      ...details,
      [e.currentTarget.name]: e.currentTarget.value
    }
    setDetails(edits)
  }

  // [submitUpdate] sends a PUT request to update an existing book instance in the database, resetting [details] afterwards
  const submitUpdate = async (e) => {
    e.preventDefault()
    await Client.put(`${baseURL}/books/update/${bookID}`, details)
    setDetails('')
    navigate('/')
  }

  // [handleUpdate] & [submitUpdate] aren't called on this page- they're passed to <BookForm> and called from there, so any book data set in [details] can be accessed all the way up until [submitUpdate] gets called

  // So at this point, values within [details] are still accessible, so each one is extracted and passed separately into <BookForm> (along with [handleUpdate] & [submitUpdate]) so that later, they can each be placed back into the same form originally used to add a book

  return (
    <div className="edit-book">
      {details && (
        // [details.<property>] changed to: [<property>]
        <BookForm
          author={details.author}
          book={book}
          // [handleUpdate] changed to: [change]
          change={handleUpdate}
          desc={details.desc}
          edition={details.edition}
          key={details.id}
          publishDate={details.publishDate}
          // [handleSubmit] changed to: [submit]
          submit={submitUpdate}
          title={details.title}
        />
      )}
    </div>
  )
}

export default EditBook
