import axios from 'axios'
import { useState, useEffect } from 'react'
import { domain, aPI } from '../globals'

const BookBar = ({ books, setBooks }) => {
  let [count, setCount] = useState(0)

  useEffect(() => {
    const getBooks = async () => {
      const books = await axios.get(
        `${domain}?q=subject:science-fantasy&orderBy=newest&maxResults=40&key=${aPI}`
      )
      let bookArr = books.data.items
      setBooks(bookArr)
      console.log(bookArr)
    }
    getBooks()
  }, [])

  return (
    <div>
      <div className="bb-header">
        <h1>Book Bar</h1>
      </div>
      <div className="book-flex">
        {books.map(
          (book, idx) =>
            book.volumeInfo.title.length < 35 &&
            book.volumeInfo.maturityRating !== 'MATURE' && (
              <div className="details-flex" key={book.etag}>
                <div className="book-cover">
                  <img
                    id="book-cover"
                    src={book.volumeInfo.imageLinks.smallThumbnail}
                    alt="Image Thumbnail"
                  />
                </div>
                <div className="book-details">
                  <div className="book-title">
                    <p id="book-title">
                      <span id="count">{(count = count + 1)}.</span> <br />
                      {book.volumeInfo.title}
                    </p>
                  </div>
                  <div className="author">
                    <p id="author">
                      Author: <br /> {book.volumeInfo.authors[0]}
                    </p>
                  </div>
                  {/* <p>Publisher: {book.volumeInfo.publisher}</p> */}
                </div>
              </div>
            )
        )}
      </div>
    </div>
  )
}

export default BookBar
