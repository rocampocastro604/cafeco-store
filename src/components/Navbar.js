import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const Navbar = () => {
  return(
    <div style={{justifyContent: "center"}} className="navbar bg-base-100">
      <div className="flex-1">
        <Link className="btn btn-ghost normal-case text-xl" to="/">CafeCo</Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          <li><Link to='/category/washed'>Washed</Link></li>
          <li><Link to='/category/honey'>Honey</Link></li>
          <li><Link to='/category/natural'>Natural</Link></li>
          <CartWidget />
        </ul>
      </div>
    </div>
  )
}

export default Navbar;