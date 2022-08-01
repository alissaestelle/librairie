const BookForm = ({ book, change, submit }) => {
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
          name="publishDate"
          value={book.publishDate}
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
