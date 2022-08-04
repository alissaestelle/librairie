import BookForm from '../components/BookForm'
import Client, { baseURL } from '../services/api'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'

const EditBook = ({ book, details, setDetails }) => {
  let { bookID } = useParams()
  let navigate = useNavigate()

  // NOTE: [bookDetails] is now abbreviated to simply: [details]

  useEffect(() => {
    // getBookByID returns a specific book by ID and sets it to [details]
    const getBookByID = async () => {
      let res = await Client.get(`${baseURL}/books/find/${bookID}`)

      let thisBook = res.data[0]
      setDetails(thisBook)
    }
    getBookByID()
  }, [bookID])

  // [handleUpdate] creates a copy of [details], combines it with the user input, and replaces [details] with the updated version
  const handleUpdate = (e) => {
    let edits = {
      ...details,
      [e.currentTarget.name]: e.currentTarget.value
    }
    setDetails(edits)
  }

  // [submitUpdate] sends a put request updating an existing book instance in the database, resetting [details] afterwards
  const submitUpdate = async (e) => {
    e.preventDefault()
    await Client.put(`${baseURL}/books/update/${bookID}`, details)
    setDetails('')
    navigate('/')
  }

  // Each property of [details] is extracted using dot notation and passed individually into <BookForm>, along with handleUpdate & submitUpdate.

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
