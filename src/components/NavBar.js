import "bulma/css/bulma.min.css";
import "./assets/navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Cookies from 'js-cookie';

export const NavBar = () => {
  const navigate = useNavigate();

  const [token, setToken] = useState(null);

  let buttons;
  const renderButtons = () => {
    if (token != null) {
      buttons = <div class="buttons"><a className="button is-dark" onClick={logout}><strong><Link to={"/"}>Logout</Link></strong></a></div>
    } else {
      buttons = <div className="buttons"><a class="button is-white"><strong><Link to={"/auth/register"}><span id="signup-button">Sign up</span></Link></strong></a><a class="button is-dark"><Link to={"/auth/login"}>Log in</Link></a></div>
    } 
  }

  const logout = (e) => {
    e.preventDefault();
    Cookies.remove('token');
    getToken();
    navigate('/');
  }

  const getToken = () => {
    setToken(Cookies.get('token'));
  }


  useEffect(() => {
    getToken();
  }, []);

  renderButtons();


  return (
    <nav class="navbar is-dark is fixed-top">
      <div id="navbar" class="navbar-menu">
        <div class="navbar-start">
          <a className="navbar-item">
            <Link to={"/"}>Home</Link>
          </a>
          <a class="navbar-item">
            <Link to={"/about"}>About us</Link>
          </a>
        </div>

        <div class="navbar-end">
        {buttons}
        </div>
      </div>
    </nav>
  );
};
