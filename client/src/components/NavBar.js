import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className="nav-bar">
      <nav>
        <Link to="/">My List</Link>
        <span id="slash">/</span>
        <Link to="/new">Add Book</Link>
      </nav>
    </div>
  )
}

export default NavBar
