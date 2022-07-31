import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className="nav-bar">
      <nav>
        <Link to="/">My List</Link>
        <Link to="/new">Add New Book</Link>
      </nav>
    </div>
  )
}

export default NavBar
