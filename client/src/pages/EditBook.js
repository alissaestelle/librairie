import BookForm from '../components/BookForm'
import Client from '../services/api'
import { baseURL } from '../services/api'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'

const EditBook = ({ book, details, setDetails }) => {
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

  const handleEdit = (e) => {
    let edits = {
      ...details,
      [e.currentTarget.name]: e.currentTarget.value
    }
    setDetails(edits)
  }

  const submitEdit = async (e) => {
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
          change={handleEdit}
          desc={details.desc}
          edition={details.edition}
          key={details.id}
          publishDate={details.publishDate}
          submit={submitEdit}
          title={details.title}
        />
      )}
    </div>
  )
}

export default EditBook
