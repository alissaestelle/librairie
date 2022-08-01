import Client from '../services/api'
import { baseURL } from '../services/api'

const BookForm = ({ book, setBook, change, date, submit }) => {
  // const handleSubmit = async (e) => {
  //   e.preventDefault()
  //   await Client.post(`${baseURL}/book/new`, book)
  //     .then((res) => console.log('Post Successful'))
  //     .catch((err) => console.log(err.data))
  //   setBook({
  //     title: '',
  //     author: '',
  //     desc: '',
  //     pub_date: '',
  //     edition: 0
  //   })

  return (
    <div className="book-form">
      <form className="form-flex">
        <label htmlFor="title">Title</label>
        <input
          required
          type="text"
          placeholder="Title of Book Here"
          name="title"
          value={book.title}
          onChange={change}
        ></input>
        <label htmlFor="author">Author</label>
        <input
          required
          type="text"
          placeholder="Name of Author Here"
          name="author"
          value={book.author}
          onChange={change}
        ></input>
        <label htmlFor="desc">Description</label>
        <input
          type="text"
          placeholder="Book Description Here"
          name="desc"
          value={book.desc}
          onChange={change}
        ></input>
        <label htmlFor="pub_date">Publish Date</label>
        <input
          type="date"
          name="pub_date"
          value={book.pub_date}
          onChange={change}
        ></input>
        <label htmlFor="edition">Edition</label>
        <input
          type="number"
          placeholder="Book Edition Here"
          name="edition"
          value={book.edition}
          onChange={change}
        ></input>
        <input id="submit" type="button" value="Submit" onClick={submit} />
      </form>
    </div>
  )
}

export default BookForm
