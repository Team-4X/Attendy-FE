import { NavBar } from "./NavBar";
import { Footer } from "./Footer";
import { MarkAttendanceStudents } from "./MarkAttendanceStudents";
import teacherImg from "./assets/teacher-face.png";

import { useState } from "react";

export const MarkAttendance = () => {

  const [userValidated, setUserValidated] = useState(false);

  const handleSignInForm = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const form = {
      id: data.get("staffID"),
      password: data.get("password")
    };

    const teacherVals = {
      id: data.get("staffID")
    }

    await fetch(`${process.env.REACT_APP_API_URL}/staff/loginTeacher`, {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "content-type": "application/json",
      },
    })
    .then(response => response.json())
    .then(data => {

      setUserValidated(data);

      fetch(`${process.env.REACT_APP_API_URL}/attendance/markTeacherAttendance`, {
        method: "POST",
        body:JSON.stringify(teacherVals),
        headers: {
          "content-type": "application/json",
        },
      });

    })
    .catch(error => console.error(error));

  };

  return (
    <div>
      <NavBar></NavBar>
      <div className="container">
        <h1 className="title is-1 has-text-centered m-5">Mark Attendance</h1>
        {
          !userValidated &&
          <form className="has-text-centered mb-5" onSubmit={handleSignInForm}>
            <h2 className="title is-3 has-text-centered m-3">You need to logged in as a teacher!</h2>
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
        }
        {
          userValidated &&
          <div className="has-text-centered">
            <button className="button is-info" onClick={() => setUserValidated(false)}>Logout Teacher</button>
            <MarkAttendanceStudents></MarkAttendanceStudents>
          </div>
        }
      </div>
      <Footer></Footer>
    </div>
  );
};
