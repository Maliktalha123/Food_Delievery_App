import "./components.css";
import { NavLink, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate()
const handleLogout = ()=>{
  localStorage.removeItem("authToken")
  navigate("/login")
}
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container-fluid">
          <NavLink className="navbar-brand fs-1 fst-italic" href="/x">
            GoFood
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto ">
              <li className="nav-item">
                <NavLink to="/" className="nav-link active" aria-current="page">
                  Home
                </NavLink>
              </li>
              {(localStorage.getItem("authToken"))?
                            <li className="nav-item">
                            <NavLink to="/" className="nav-link active" aria-current="page">
                              My Orders
                            </NavLink>
                          </li>:""
              
              }
            </ul>
            {
              (!localStorage.getItem("authToken"))?
            
            <div className="d-flex ">
              <NavLink to="/login" className="btn bg-white text-success mx-1">
                Login
              </NavLink>
              <NavLink
                to="/createuser"
                className="btn bg-white text-success mx-1"
              >
                Create User
              </NavLink>
            </div>:<div>
              <div className="btn bg-white text-success mx-2">My Cart</div>
              <div className="btn bg-white text-danger mx-2" onClick={handleLogout}>LogouT</div>
            </div>}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
