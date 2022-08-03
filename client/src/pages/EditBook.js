import BookForm from '../components/BookForm'
import Client, { baseURL } from '../services/api'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'

const EditBook = ({ book, details, setBooks, setDetails }) => {
  let { bookID } = useParams()
  let navigate = useNavigate()

  useEffect(() => {
    const getBookByID = async () => {
      let res = await Client.get(`${baseURL}/books/find/${bookID}`)

      let thisBook = res.data[0]
      setDetails(thisBook)
    }
    getBookByID()
  }, [bookID])

  const handleUpdate = (e) => {
    let edits = {
      ...details,
      [e.currentTarget.name]: e.currentTarget.value
    }
    setDetails(edits)
  }

  const submitUpdate = async (e) => {
    e.preventDefault()
    await Client.put(`${baseURL}/books/update/${bookID}`, details)
    setDetails('')
    navigate('/')
  }

  return (
    <div className="edit-book">
      {details && (
        <BookForm
          author={details.author}
          book={book}
          change={handleUpdate}
          desc={details.desc}
          edition={details.edition}
          key={details.id}
          publishDate={details.publishDate}
          submit={submitUpdate}
          title={details.title}
        />
      )}
    </div>
  )
}

export default EditBook
