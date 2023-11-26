import "bulma/css/bulma.min.css";
import "./assets/navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { logout } from "../store/auth.js";
import { useSelector } from "react-redux";

export const NavBar = () => {
  const navigate = useNavigate();
  
  const [showMenu, setShowMenu] = useState(false);
  
  const showMenus = () => {
    setShowMenu(!showMenu);
  };

  
    const handleLogout = (e) => {
      e.preventDefault();
      Cookies.remove('token');
      dispatchLogout(logout());
      // getToken();
      navigate('/');
    }
    

    const dispatchLogout = useDispatch(logout());
    let isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
        
    return (
    <nav className="navbar is-light is fixed-top mt-2 mx-2 level">
      <div className="navbar-start is-hidden-mobile is-hidden-desktop is-flex-touch">

          <div className="buttons">
              {
                isAuthenticated ?
                  <a className="button is-light" onClick={handleLogout}>
                    <strong>Logout</strong>
                  </a>
                  :
                  <div>
                    <a className="button is-light mr-2">
                      <Link to={"/auth/register"} className="has-text-dark">
                          <strong>Sign Up</strong>
                      </Link>
                    </a>

                    <a className="button is-light mr-2">
                      <Link to={"/auth/login"} className="has-text-dark">
                        <strong>Log In</strong>
                      </Link>
                    </a>
                  </div>
              }
          </div>  

      </div>
      <span
        className="is-hidden-tablet level-left ml-5 has-text-danger-dark is-clickable"
        onClick={showMenus}
      >
        Attendy
      </span>
      <div
        onClick={showMenus}
        role="button"
        className="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
      >
        <span aria-hidden="true" className=""></span>
        <span aria-hidden="true" className=""></span>
        <span aria-hidden="true" className=""></span>
      </div>
      {showMenu && (
        <aside className="menu is-open is-hidden-desktop">

          <div className="buttons">
            {
              isAuthenticated ?
                <a className="button is-light" onClick={handleLogout}>
                  <strong>Logout</strong>
                </a>
                :
                <span className="button is-light mr-2">
                  <Link to={"/auth/login"} className="has-text-dark">
                    <strong>Log In</strong>
                  </Link>
                  <strong className="ml-2">
                    <Link to={"/auth/register"}>
                      <span id="signup-button" className="has-text-dark">
                        Sign up
                      </span>
                    </Link>
                  </strong>
                </span>
            }
          </div>  

          <p className="menu-label">Places</p>
          <ul className="menu-list">
            <li>
              <a>
                <Link className="has-text-dark" to={"/"}>
                  Home
                </Link>
              </a>
            </li>
            <li>
              <a>
                <Link className="has-text-dark" to={"/about"}>
                  About us
                </Link>
              </a>
            </li>
            <li>
              <a>
                <Link className="has-text-dark" to={"/mark-attendance"}>
                  Mark Attendance
                </Link>
              </a>
            </li>
          </ul>
        </aside>
      )}
      <div className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item">
            <Link className="has-text-dark" to={"/"}>
              Home
            </Link>
          </a>
          <a className="navbar-item">
            <Link className="has-text-dark" to={"/about"}>
              About us
            </Link>
          </a>
        </div>

        <div className="navbar-end">
          {/* {buttons} */}
          <div className="buttons">
            {
              isAuthenticated ?
                <a className="button is-light" onClick={handleLogout}>
                  <strong>Logout</strong>
                </a>
                :
                <div className="mr-2">
                  <a className="button is-light">
                    <Link to={"/auth/login"} className="has-text-dark">
                      <strong>Log In</strong>
                    </Link>
                  </a>
                  <strong className="button is-light">
                    <Link to={"/auth/register"}>
                      <span id="signup-button" className="has-text-dark">
                        Sign up
                      </span>
                    </Link>
                  </strong>
                </div>
            }
          </div>  
          
        </div>
      </div>
    </nav>
  );
};
