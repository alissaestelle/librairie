import BookForm from '../components/BookForm'
import Client from '../services/api'
import { baseURL } from '../services/api'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

const EditBook = ({ book, details, setDetails }) => {
  let { bookID } = useParams()
  let navigate = useNavigate()
  let [current, setCurrent] = useState(book)

  useEffect(() => {
    const getBookByID = async () => {
      let res = await Client.get(`${baseURL}/books/find/${bookID}`)

      let thisBook = res.data[0]
      console.log(thisBook)
      setDetails(thisBook)
    }
    getBookByID()
  }, [bookID])

  const handleEdit = (e) => {
    let edits = {
      ...details,
      [e.currentTarget.name]: e.currentTarget.value
    }
    console.log(e.target.value)
    setDetails(edits)
  }

  const submitEdit = async (e) => {
    e.preventDefault()
    console.log(details)
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
          desc={details.desc}
          edition={details.edition}
          details={details}
          change={handleEdit}
          current={current}
          publishDate={details.publishDate}
          submit={submitEdit}
          title={details.title}
        />
      )}
    </div>
  )
}

export default EditBook
