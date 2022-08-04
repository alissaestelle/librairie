import { useState } from 'react'

const Pagination = ({ currentPage, pageIndex, pageRange, setCurrent }) => {
  const [pageClass, setClass] = useState(false)
  let thesePages

  const nextPage = () => {
    setCurrent((page) => parseInt(page) + 1)
  }

  const prevPage = () => {
    setCurrent((page) => parseInt(page) - 1)
  }

  const changePage = (e) => {
    let thisPage = parseInt(e.target.value)
    setCurrent(thisPage)
  }

  const getFivePages = () => {
    let start = Math.floor(currentPage / pageRange) * pageRange
    thesePages = pageIndex.map(() => (start = start + 1))
    return thesePages
  }

  getFivePages()

  return (
    <div className="pagination">
      <ul>
        <li id="previous">
          <button onClick={prevPage} disabled={currentPage <= 1}>
            Previous
          </button>
        </li>
        <li className="numbers">
          {thesePages.map((page, idx) => (
            <button
              key={idx}
              value={page}
              onClick={changePage}
              className={currentPage === parseInt(page) ? 'active' : null}
              disabled={currentPage >= thesePages.length}
            >
              {page}
            </button>
          ))}
        </li>
        <li id="next">
          <button
            onClick={nextPage}
            disabled={currentPage >= thesePages.length}
          >
            Next
          </button>
        </li>
      </ul>
    </div>
  )
}

export default Pagination
