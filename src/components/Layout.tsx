import { Link} from "react-router-dom";

function Layout() {
  return (
    <div className="flex justify-end h-10">
         <li className="m-2 mx-10">
                <Link to="/signup">Inscription</Link>
            </li>
            <li className="m-2 mx-10">
                <Link to="/login">Login</Link>
            </li>
    </div>
  )
}

export default Layout