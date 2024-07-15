import "./components.css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="navbar">
      <h1 style={{ color: "blue", fontStyle: "italic" }}>GO FOOD</h1>
      <ul className="ulForHeader">
        <li>
          <NavLink to="/" className='navLink' >HOME</NavLink>
        </li>
        <li>
          <NavLink to="/login" className='navLink'>LOG IN</NavLink>
        </li>
        <li>
          <NavLink to="/createuser" className='navLink'>Sign Up</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Header;
