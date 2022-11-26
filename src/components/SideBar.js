import "./SideBar.css"

export const SideBar = (props) => {

  return (
    <div className="has-background-light box is-fullheight">
      <div className="mt-5 pl-5 pt-2 is-size-4"><a>Dashboard</a></div>
      <div className="mt-5 pl-5 is-size-4"><a>Time Table</a></div>
      <div className="mt-5 pl-5 is-size-4"><a>Calendar</a></div>
      <div className="mt-5 pl-5 pb-2 is-size-4"><a>Attendance</a></div>
    </div>
  );
};
