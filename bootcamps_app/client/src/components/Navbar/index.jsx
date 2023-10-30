import { Link } from 'react-router-dom';
import './index.css'
const Navbar = () => {
  return (
    <div>
      <Link to="/">Camps</Link>
      <Link to="/camps/new">Make a new camp</Link>
    </div>
  )
}

export default Navbar;