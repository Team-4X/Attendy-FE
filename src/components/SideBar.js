import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faClock, faCalendar, faUserGraduate } from "@fortawesome/free-solid-svg-icons";

import "./SideBar.css";

export const SideBar = (props) => {
  return (
    <div className="has-background-grey-lighter box is-fullheight is-hidden-mobile">
      <div className="box">
        <span className="icon mr-2">
          <FontAwesomeIcon icon={faHome} />
        </span>
        <a className="has-text-dark">Home</a>
      </div>

      <div className="box">
        <span className="icon mr-2">
          <FontAwesomeIcon icon={faClock} />
        </span>
        <a className="has-text-dark">Time Table</a>
      </div>
      <div className="box">
        <span className="icon mr-2">
          <FontAwesomeIcon icon={faCalendar} />
        </span>
        <a className="has-text-dark">Calendar</a>
      </div>
      <div className="box">
        <span className="icon mr-2">
          <FontAwesomeIcon icon={faUserGraduate} />
        </span>
        <a className="has-text-dark">Attendance</a>
      </div>
    </div>
  );
};
