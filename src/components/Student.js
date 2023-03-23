import { useState } from "react";
import axios from "axios";
import { NavBar } from "./NavBar";
import { Footer } from "./Footer";
import "../App.css";
import "bulma/css/bulma.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fortawesome/fontawesome-free/js/all.min.js";
import "react-calendar/dist/Calendar.css";

export const Student = () => {
  const [studentId, setStudentId] = useState("");
  const [date, setDate] = useState([]);
  const [attendanceStatus, setAttendanceStataus] = useState("");
  const [attendanceDetails, setAttendanceDetails] = useState([]);

  const handleFilterClick = () => {
    axios
      .get(`http://localhost:4000/v1/attendance/${studentId}`)
      .then((res) => {
        // handle successful response
        console.log(res.data);

        const attendanceDetails = res.data;
        setAttendanceDetails(attendanceDetails);
        console.log(attendanceDetails);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  };

  const handleInputChange = (event) => {
    setStudentId(event.target.value);
  };

  return (
    <div>
      <NavBar></NavBar>
      <h1 className="subtitle is-2 has-text-centered mt-5">
        Attendance of Students
      </h1>

      <div className="columns">
        <div className="column">
          <input
            className="input"
            type="text"
            placeholder="Enter Student Id"
            value={studentId}
            onChange={handleInputChange}
          />
        </div>

        <div className="column">
          <button className="button is-dark" onClick={handleFilterClick}>
            Filter
          </button>
        </div>

        <div className="column">
          <button className="button is-dark">Download Report</button>
        </div>
      </div>
      <div className="attedanceTable">
        <table className="table mt-5 is-bordered is-striped  is-narrow is-hoverable is-max-desktop">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Student ID</th>
              <th scope="col">Date</th>
              <th scope="col">Attendance Status</th>
            </tr>
          </thead>
          <tbody>
            {attendanceDetails.map((attendance, index) => (
              <tr key={attendance._id}>
                <th scope="row">{index + 1}</th>
                <td>{attendance.studentID}</td>
                <td>{attendance.date}</td>
                <td>{attendance.attendance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer></Footer>
    </div>
  );
};
