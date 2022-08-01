const UserList = () => {
  return (
    <div className="pagination">
      <table className="book-table">
        <thead>
          <tr className="tr">
            <th id="title">Title</th>
            <th id="author">Author</th>
            <th id="desc">Description</th>
            <th id="pub-date">Publish Date</th>
            <th id="edit">Edition</th>
            <th id="check">Check-Out Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="tr">
            <td>Quantum Steampunk</td>
            <td>Nicole Yunger Halpern</td>
            <td>"The Physics of Yesterday's Tomorrow"</td>
            <td>4/12/22</td>
            <td>1st</td>
            <td>
              <label className="status">
                <input type="checkbox"></input>
              </label>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default UserList
