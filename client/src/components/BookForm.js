const BookForm = ({ book, handleChange }) => {
  return (
    <div className="book-form">
      <form className="form-flex">
        <label for="name">Title</label>
        <input
          required
          type="text"
          placeholder="Title of Book Here"
          name="title"
          value={book.title}
          onChange={handleChange}
        ></input>
        <label for="author">Author</label>
        <input
          required
          type="text"
          placeholder="Name of Author Here"
          name="author"
          value={book.author}
          onChange={handleChange}
        ></input>
        <label for="desc">Description</label>
        <input
          type="text"
          placeholder="Book Description Here"
          name="desc"
          value={book.desc}
          onChange={handleChange}
        ></input>
        <label for="pub_date">Publish Date</label>
        <input
          type="text"
          placeholder="Publish Date Here"
          name="pub_date"
          value={book.pub_date}
          onChange={handleChange}
        ></input>
        <label for="edition">Edition</label>
        <input
          type="text"
          placeholder="Book Edition Here"
          name="edition"
          value={book.edition}
          onChange={handleChange}
        ></input>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default BookForm
