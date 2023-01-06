import "bulma/css/bulma.min.css";
import { Link } from "react-router-dom";
export const NavBar = () => {
  return (
    <nav class="navbar is-dark is fixed-top">
      <div id="navbar" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item">
            <Link to={"/"}>Home</Link>
          </a>
          <a class="navbar-item">
            <Link to={"/about"}>About us</Link>
          </a>

          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">More</a>

            <div class="navbar-dropdown">
              <a class="navbar-item">
                <Link to={"/contact"}>Contact</Link>
              </a>
              <hr class="navbar-divider" />
              <a class="navbar-item">Logout</a>
            </div>
          </div>
        </div>

        <div class="navbar-end">
          <div class="buttons">
            <a class="button is-white">
              <strong>
                <Link to={"/register"}>Sign up</Link>
              </strong>
            </a>
            <a class="button is-dark">
              <Link to={"/login"}>Log in</Link>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
