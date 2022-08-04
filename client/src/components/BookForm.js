const BookForm = ({
  author,
  book,
  change,
  desc,
  edition,
  publishDate,
  submit,
  title
}) => {
  // State is being passed from two separate components here: <NewBook> & <EditBook>.

  // Any instance of [change] or [submit] found in this code could be referencing functions from either component, since [handleChange] from <NewBook> and [handleUpdate] from <EditBook> were both changed to: [change]. Similarly, [handleSubmit] from <NewBook> and [submitUpdate] from <EditBook> were both changed to: [submit].

  // I did this to avoid unnecessary conditionals for the form's [onChange]/[onSubmit] events.

  // In terms of the <input value> conditionals: [<property>] refers to [details.<property>] (which comes from <EditBook>) and [book.<property>] comes from <NewBook>.

  // Taking the first ternary as an example (JS:30), the conditional first checks to see if a value for [title] exists, selecting its value if so (or allowing a blank value). This immediately signals that the form is being used to update a book, since [title] comes from <EditBook>. On the other hand, if [title] does not exist, the ternary will select any values found in [book.title], meaning the form is being used to add a new book instead, since [book.title] comes from <NewBook>.

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
          required
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
