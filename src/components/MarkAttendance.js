import { NavBar } from "./NavBar";
import { Footer } from "./Footer";
import { MarkAttendanceStudents } from "./MarkAttendanceStudents";
import teacherImg from "./assets/teacher-face.png";

export const MarkAttendance = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div className="container">
        <h1 className="title is-1 has-text-centered m-5">Mark Attendance</h1>
        <form className="has-text-centered">
          <figure className="image container is-128x128 mb-5">
            {/* <a href="https://iconscout.com/3ds/teacher" target="_blank">Teacher explaining while sitting on armchair 3D Illustration</a> by <a href="https://iconscout.com/contributors/mintemid" target="_blank">Mintemid</a> */}
            <img src={teacherImg} />
          </figure>
          <div className="field">
            <div className="control mb-3">
              <input
                className="input"
                type="text"
                name="staffID"
                placeholder="Staff ID"
              />
            </div>
            <div className="control mb-3">
              <input
                className="input"
                type="password"
                name="password"
                placeholder="password"
              />
            </div>            
            <button className="button is-dark" type="submit">
              Sign in
            </button>
          </div>
        </form>
        <MarkAttendanceStudents></MarkAttendanceStudents>
      </div>
      <Footer></Footer>
    </div>
  );
};
