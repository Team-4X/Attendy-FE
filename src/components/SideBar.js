import "./SideBar.css";

export const SideBar = (props) => {
  return (
    <div className="has-background-light box is-fullheight is-hidden-mobile">
      <div className="box">
        <a className="has-text-dark">Dashboard</a>
      </div>

      <div className="box">
        <a className="has-text-dark">Time Table</a>
      </div>
      <div className="box">
        <a className="has-text-dark">Calendar</a>
      </div>
      <div className="box">
        <a className="has-text-dark">Attendance</a>
      </div>
    </div>
  );
};
