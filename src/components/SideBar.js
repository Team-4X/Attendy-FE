import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faCalendar, faUserGraduate } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import "./SideBar.css";
import { checkAuthentication } from "../store/auth";

export const SideBar = (props) => {
  const navigate = useNavigate();
  
  let loggedIn = useSelector((state) => state.auth.isAuthenticated);

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
  loggedIn &&
    
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
