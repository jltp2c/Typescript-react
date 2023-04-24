import { Link} from "react-router-dom";

function Navbar() {
  return (
    <div>
        <nav>
            <li>
                <Link to="/">Accueil</Link>
            </li>
            <li>
                <Link to="/features">Features</Link>
            </li>
            <li>
                <Link to="/shop">Shop</Link>
            </li>
        </nav>
    </div>
  )
}

export default Navbar