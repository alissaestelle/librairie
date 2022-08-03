import axios from 'axios'
import { useState, useEffect } from 'react'
import { domain, aPI } from '../globals'

const BookBar = ({ bookBar, setBar }) => {
  let [count] = useState(0)

  useEffect(() => {
    const getBooks = async () => {
      const books = await axios.get(
        `${domain}?q=subject:science-fantasy&orderBy=newest&maxResults=40&key=${aPI}`
      )
      let bookArr = books.data.items
      setBar(bookArr)
      console.log(bookArr)
    }
    getBooks()
  }, [])

  return (
    <div className="book-bar">
      <div className="bb-header">
        <span id="bb-title">Book Bar</span>
      </div>
      <div className="book-flex">
        {bookBar.map(
          (book, idx) =>
            book.volumeInfo.title.length < 35 &&
            book.volumeInfo.maturityRating === 'NOT_MATURE' &&
            book.volumeInfo.title !== 'The Science of Strong Women' && (
              <div className="details-flex" key={book.etag}>
                <div className="book-cover">
                  <img
                    id="book-cover"
                    src={book.volumeInfo.imageLinks.thumbnail}
                    alt="Thumbnail"
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
                </div>
              </div>
            )
        )}
      </div>
    </div>
  )
}

export default BookBar
