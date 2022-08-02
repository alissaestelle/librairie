import { useEffect, useState } from 'react'

const BookForm = ({
  author,
  book,
  change,
  current,
  desc,
  details,
  edition,
  publishDate,
  submit,
  title
}) => {
  // const [current, setCurrent] = useState()

  // useEffect(() => {
  //   const checkRequest = () => {
  //     details ? setCurrent(details) : setCurrent(book)
  //   }
  //   checkRequest()
  // }, [])

  return (
    <div className="book-form">
      <form className="form-flex" onSubmit={submit}>
        <label htmlFor="title">Title</label>
        <input
          required
          type="text"
          placeholder="Title of Book Here"
          name="title"
          value={title ? title || '' : book.title}
          onChange={change}
        ></input>
        <label htmlFor="author">Author</label>
        <input
          type="text"
          placeholder="Name of Author Here"
          name="author"
          value={author ? author || '' : book.author}
          onChange={change}
        ></input>
        <label htmlFor="desc">Description</label>
        <input
          type="text"
          placeholder="Book Description Here"
          name="desc"
          value={desc ? desc || '' : book.desc}
          onChange={change}
        ></input>
        <label htmlFor="pub_date">Publish Date</label>
        <input
          type="date"
          name="publishDate"
          value={publishDate ? publishDate || '' : book.publishDate}
          onChange={change}
        ></input>
        <label htmlFor="edition">Edition</label>
        <input
          type="text"
          placeholder="Book Edition Here"
          name="edition"
          value={edition ? edition || '' : book.edition}
          onChange={change}
        ></input>
        <button id="submit" text="Submit">
          Submit
        </button>
      </form>
    </div>
  )
}

export default BookForm
