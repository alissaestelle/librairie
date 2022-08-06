const Pagination = ({ currentPage, pageIndex, pageRange, setCurrent }) => {
  // Note: The current state of [pageIndex] (JS:27) is:
  // [pageIndex] = [undefined, undefined, undefined, undefined, undefined]

  let thesePages

  const nextPage = () => {
    setCurrent((page) => parseInt(page) + 1)
    // Takes the previous page value and increments it by 1
  }

  const prevPage = () => {
    setCurrent((page) => parseInt(page) - 1)
    // Takes the previous page value and decrements it by 1
  }

  const changePage = (e) => {
    let thisPage = parseInt(e.target.value)
    setCurrent(thisPage)
    // Sets [currentPage] to any page value chosen in [thesePages] (JS:24)
  }

  // [getFivePages] updates page buttons with the next set of numbers in the pagination
  const getFivePages = () => {
    let start = Math.floor(currentPage / pageRange) * pageRange
    // Translation: start = Math.floor(currentPage / 5) * 5
    thesePages = pageIndex.map(() => (start = start + 1))
    // Translation: Map the values for each idx of [pageIndex], starting with x ([start]) and incrementing by one each time ([pageIndex].length = 5)
    return thesePages
  }

  getFivePages()

  // [thesePages] (JS:27) maps the page numbers to each button in the pagination:

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
              // Self To-Do: Finish Fx to Show Current Page Button as 'Active'
              // className={currentPage === parseInt(page) ? 'active' : null}
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
