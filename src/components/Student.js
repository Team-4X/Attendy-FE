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
  const [attendanceDetails, setAttendanceDetails] = useState([]);
  const [studentDetails, setStudentDetails] = useState([]);

  const handleFilterClick = async () => {
    try {
      if (studentId !== "") {
        console.log(studentId);
        const res = await axios.get(
          `http://localhost:4000/student/${studentId}`
        );
        // console.log(res.data);
        // const studentDetails = res.data[0];
        // console.log(studentDetails);
        setStudentDetails(studentDetails);
        const attendanceDetails = res.data;
        console.log(attendanceDetails);
        setAttendanceDetails(attendanceDetails);
      } else if (date) {
        const response = await axios.get(
          `http://localhost:4000/find-AttendanceStudent/${date}`
        );
        const attendanceDetails = response.data;
        console.log(attendanceDetails);
        setAttendanceDetails(attendanceDetails);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name === "date") {
      setDate(value);
    } else if (name === "studentId") {
      setStudentId(value);
    }
  };
  const handleClearInput = () => {
    setStudentId("");
  };

  return (
    <div>
      <NavBar></NavBar>
      <h1 className="subtitle is-2 has-text-centered mt-5">
        Attendance of Students
      </h1>

      <div className="columns">
        <div className="column">
          <div className="field has-addons">
            <div className="control is-expanded">
              <input
                className={`student-input ${date ? "prohibited" : ""}`}
                type="text"
                placeholder="Enter Student Id"
                value={studentId}
                name="studentId"
                disabled={!!date}
                onChange={handleInputChange}
              />
            </div>
            {studentId && (
              <div className="control">
                <button className="delete" onClick={handleClearInput}></button>
              </div>
            )}
          </div>

          <input
            className={`student-input ${studentId ? "prohibited" : ""}`}
            value={date}
            name="date"
            onChange={handleInputChange}
            type="date"
            disabled={!!studentId}
          />
        </div>

        <div className="column">
          <button className="button is-dark " onClick={handleFilterClick}>
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
              <th scope="col">Student Name</th>
              <th scope="col">Class Name</th>
              <th scope="col">Date</th>
              <th scope="col">Attendance Status</th>
            </tr>
          </thead>

          <tbody>
            {attendanceDetails.map((attendance, index) => (
              <tr key={attendance._id}>
                <th scope="row">{index + 1}</th>
                <td>{attendance.studentID}</td>
                <td>{attendance.studentname}</td>
                <td>{attendance.class}</td>
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
