import BookForm from '../components/BookForm'
import Client, { baseURL } from '../services/api'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

const EditBook = () => {
  let { bookID } = useParams()
  let navigate = useNavigate()

  const [details, setDetails] = useState({
    title: '',
    author: '',
    desc: '',
    publishDate: '',
    edition: '',
    status: false
  })

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
    if (e.target.value === '') e.target.value = 'n/a'

    let edits = {
      ...details,
      [e.target.name]: e.target.value,
      status: details.status
    }

    // let edits = {
    //   ...details,
    //   [e.target.name]: e.target.value
    // }
    console.log(e.target.value)
    setDetails(edits)
  }

  const handleEdition = (e) => {
    if (e.target.value === '') e.target.value = 0
    let edition = {
      ...details,
      [e.target.name]: e.target.value,
      status: details.status
    }

    console.log(e.target.value)
    setDetails(edition)
  }

  const submitEdit = async (e) => {
    e.preventDefault()
    console.log(details)
    let res = await Client.put(`${baseURL}/books/find/${bookID}`, details)
      .then((res) => console.log('Book Updated Successfully'))
      .catch((err) => console.log(err.data))
    setDetails('')
  }

  return (
    <div className="edit-book">
      {details && (
        <BookForm
          key={details.id}
          title={details.title}
          author={details.author}
          desc={details.desc}
          publishDate={details.publishDate}
          edition={details.edition}
          change={handleEdit}
          handleEdition={handleEdition}
          submit={submitEdit}
        />
      )}
    </div>
  )
}

export default EditBook
