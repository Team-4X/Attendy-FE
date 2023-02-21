import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faCalendar, faUserGraduate } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
import { useState, useEffect } from 'react';

import "./SideBar.css";

export const SideBar = (props) => {
  const navigate = useNavigate();

  const [token, setToken] = useState(null);

  // get tokens from the browser
  const getToken = () => {
    setToken(Cookies.get('token'));
  }

  useEffect(() => {
    getToken();
  }, []);



  const goToMarkAttendance = () => {
    navigate("/mark-attendance");
  }

  const goToAdminMessages = () => {
    navigate("/admin-messages");
  }

  return (
    <div className="box is-fullheight is-hidden-mobile">
      <div className="box has-background-light">
        <span className="icon mr-2">
          <FontAwesomeIcon icon={faHome} />
        </span>
        <a className="has-text-dark">Home</a>
      </div>
{
  token &&
    
      <div className="box has-background-light" onClick={goToAdminMessages}>
        <span className="icon mr-2">
          <FontAwesomeIcon icon={faUser} />
        </span>
        <a className="has-text-dark">User Questions</a>
      </div>

}

      <div className="box has-background-light" onClick={goToMarkAttendance}>
        <span className="icon mr-2">
          <FontAwesomeIcon icon={faUserGraduate} />
        </span>
        <a className="has-text-dark">Attendance</a>
      </div>
    </div>
  );
};
