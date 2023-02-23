import "bulma/css/bulma.min.css";
import "./assets/navbar.css";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="navbar is-dark is fixed-top">
      <div id="navbar" className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item">
            <Link to={"/"}>Home</Link>
          </a>
          <a className="navbar-item">
            <Link to={"/about"}>About us</Link>
          </a>

          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">More</a>

            <div className="navbar-dropdown">
              <a className="navbar-item">
                <Link to={"/contact"}>
                  <span id="contact-btn">Contact Us</span>
                </Link>
              </a>
              <hr className="navbar-divider" />
              <a className="navbar-item">Logout</a>
            </div>
          </div>
        </div>

        <div className="navbar-end">
          <div className="buttons">
            <a className="button is-white">
              <strong>
                <Link to={"/auth/register"}>
                  <span id="signup-button">Sign up</span>
                </Link>
              </strong>
            </a>
            <a className="button is-dark">
              <Link to={"/auth/login"}>Log in</Link>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
