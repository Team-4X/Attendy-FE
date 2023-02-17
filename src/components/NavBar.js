import "bulma/css/bulma.min.css";
import "./assets/navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Cookies from 'js-cookie';
import { useDispatch } from "react-redux";
import {logout} from "../store/auth.js";
import { useSelector } from 'react-redux';

export const NavBar = () => {
  const navigate = useNavigate();

  const [token, setToken] = useState(null);
  const dispatch = useDispatch(logout());

  const [showMenu, setShowMenu] = useState(false);

  const showMenus = () => {
    console.log('hamburger clicked!');
    setShowMenu(!showMenu);
  }

  let buttons;
  const renderButtons = () => {
    if (token != null) {
      buttons = <div class="buttons"><a className="button is-light" onClick={handleLogout}><strong>Logout</strong></a></div>
    } else {
      buttons = <div className="buttons">
        <a class="button is-light"><strong><Link to={"/auth/register"}><span id="signup-button" className="has-text-dark">Sign up</span></Link></strong></a>
        <a class="button is-light mr-2"><Link to={"/auth/login"} className="has-text-dark"><strong>Log In</strong></Link></a>
        </div>
    } 
  }
    
  // const auth = useSelector((state) => state.auth);
  // console.log(auth);

  const handleLogout = (e) => {
    e.preventDefault();
    Cookies.remove('token');
    dispatch(logout());
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
      <a onClick={showMenus} role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true" className=""></span>
        <span aria-hidden="true" className=""></span>
        <span aria-hidden="true" className=""></span>
      </a>
      {
        showMenu &&
        <aside className='menu is-open is-hidden-desktop'>
            {buttons}
            <p className="menu-label">Places</p>
            <ul className="menu-list">
              <li>
                <a>
                <Link className="has-text-dark" to={"/"}>Home</Link>
                </a>
              </li>
              <li>
                <a>
                <Link  className="has-text-dark" to={"/about"}>About us</Link>
                </a>
              </li>
              <li>
                <a>
                <Link  className="has-text-dark" to={"/mark-attendance"}>Mark Attendance</Link>
                </a>
              </li>
            </ul>
        </aside>

      }
      <div class="navbar-menu">
        <div class="navbar-start">
          <a className="navbar-item">
            <Link className="has-text-white" to={"/"}>Home</Link>
          </a>
          <a class="navbar-item">
            <Link  className="has-text-white" to={"/about"}>About us</Link>
          </a>
        </div>

        <div class="navbar-end">
        {buttons}
        </div>
      </div>
    </nav>
  );
};
