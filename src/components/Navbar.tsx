import { Link} from "react-router-dom";
import logo from "../assets/img/logo.png"

function Navbar() {
  return (
    <div className="flex justify-between bg-greyPeace h-36">
        <img className="h-[100px]" src={logo} alt="logo" width="270"/>
        <nav className="flex flex-row text-black">
            <li className="m-10">
                <Link to="/">Accueil</Link>
            </li>
            <li className="m-10">
                <Link to="/features">Features</Link>
            </li>
            <li className="m-10">
                <Link to="/shop">Shop</Link>
            </li>
        </nav>
    </div>
  )
}

export default Navbar