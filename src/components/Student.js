import { useState, useEffect } from "react";
import axios from "axios";
import { NavBar } from "./NavBar";
import { Footer } from "./Footer";
import "../App.css";
import "bulma/css/bulma.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fortawesome/fontawesome-free/js/all.min.js";
import "react-calendar/dist/Calendar.css";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { useSelector } from "react-redux";
import teacherImg from "./assets/teacher-face.png";

export const Student = () => {
  const [studentId, setStudentId] = useState("");
  const [date, setDate] = useState([]);
  const [attendanceDetails, setAttendanceDetails] = useState([]);
  const [studentDetails, setStudentDetails] = useState([]);
  const [isStudentIdDisabled, setIsStudentIdDisabled] = useState(false);
  const [isDateDisabled, setIsDateDisabled] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const loggedInAsAdmin = useSelector((state) => state.auth.isAuthenticated);
  const [teacherLoggedIn, setTeacherLoggedIn] = useState(false);
  const [formHidden, setFormHidden] = useState(true);
  const [showError, setShowError] = useState("is-hidden");

  const showLoginForm = () => {
    setFormHidden(false);
  }

  const handleSignInForm = async (e) => {
    e.preventDefault();

    setShowError("is-hidden");

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

      if (!data) {
        setShowError("");
      } else {
        setTeacherLoggedIn(data);
        setFormHidden(true);
        setShowError("is-hidden");
      }

    })
    .catch(error => console.error(error));

  };

  const getAttendanceByDate = async (date) => {
    const response = await axios.get(
      `http://localhost:4000/find-AttendanceStudent/${date}`
    );
    const attendanceDetails = response.data;
    setAttendanceDetails(attendanceDetails);
  }

  useEffect(() => {
    const currentDate = new Date().toLocaleDateString('en-CA', { year: 'numeric', month: '2-digit', day: '2-digit' });
    setDate(currentDate);
    getAttendanceByDate(currentDate);
  }, [])

  const handleFilterClick = async () => {
    try {
      if (studentId !== "") {
        const res = await axios.get(
          `http://localhost:4000/student/${studentId}`
        );
        setStudentDetails(studentDetails);
        const attendanceDetails = res.data;
        setAttendanceDetails(attendanceDetails);
      } else if (date) {
        const response = await axios.get(
          `http://localhost:4000/find-AttendanceStudent/${date}`
        );
        const attendanceDetails = response.data;
        setAttendanceDetails(attendanceDetails);
      }
      setErrorMessage("");
    } catch (error) {
      if (error.response && error.response.status === 404) {
        if (error.response.data.message === "Student not found") {
          setErrorMessage("Student not found");
        } else if (
          error.response.data.message === "Attendance data not found"
        ) {
          setErrorMessage("Attendance data not found");
        }
      } else {
        console.error(error);
      }
    }
    setStudentId("");
    setIsStudentIdDisabled(false);
    setDate("");
    setIsDateDisabled(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name === "date") {
      setDate(value);
      setIsStudentIdDisabled(!!value);
    } else if (name === "studentId") {
      setStudentId(value);
      setIsDateDisabled(!!value);
    }
  };
  const handleClearInput = () => {
    setStudentId("");
    setDate("");
    setIsStudentIdDisabled(false);
    setIsDateDisabled(false);
  };

  const handleDownloadClick = () => {
    const headers = [
      "Student ID",
      "Student Name",
      "Class Name",
      "Date",
      "Attendance Status",
    ];
    const rows = attendanceDetails.map((attendance) => [
      attendance.studentID,
      attendance.studentname,
      attendance.class,
      attendance.date,
      attendance.attendance,
    ]);

    // Create a new jsPDF instance
    const pdf = new jsPDF("p", "pt", "a4");

    // Add the title
    pdf.setFontSize(18);
    pdf.text("Attendance Details", 40, 40);

    // Add the table to the PDF document using the autoTable plugin
    pdf.autoTable({
      head: [headers],
      body: rows,
      startY: 60,
      margin: { top: 60 },
    });
    // Save the pdf document
    pdf.save("Attendance_Report.pdf");
  };

  return (
    <div>
      <NavBar></NavBar>
      <h1 className="subtitle is-2 has-text-centered mt-5">
        Attendance of Students
      </h1>

      <div className="columns">
        <div className="column ml-5">
          <div className="field has-addons">
            <div className="control is-expanded">
              <input
                className={`${
                  isStudentIdDisabled ? "prohibited" : ""
                }`}
                type="text"
                placeholder="Enter Student Id"
                value={studentId}
                name="studentId"
                disabled={isStudentIdDisabled}
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
            className={`${isDateDisabled ? "prohibited" : ""}`}
            value={date}
            name="date"
            onChange={handleInputChange}
            type="date"
            disabled={isDateDisabled}
          />
        </div>

        <div className="column">
          <button className="button is-dark " onClick={handleFilterClick}>
            Filter
          </button>
        </div>

        <div className="column">
          {
            (teacherLoggedIn || loggedInAsAdmin) &&
            <button className="button is-dark" onClick={handleDownloadClick}>
              Download Report
            </button>
          }
          {
            !loggedInAsAdmin && !teacherLoggedIn &&
            <div>
              To download the report you need to login as a teacher or a system admin.
              To login as a teacher click
              <a onClick={showLoginForm}> here.</a>
            </div>
          }
        </div>
        
      </div>

      {
        !formHidden &&
      <div>
        <form className="has-text-centered mb-5" onSubmit={handleSignInForm}>
          <h2 className="title is-3 has-text-centered m-3">You need to be logged in as a teacher!</h2>
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
          <div className={`has-text-centered ${showError}`}>
            <p className="has-text-danger">Invalid credentials</p>
          </div>
        </form>
      </div>
      }
      
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
      <div className="err-msg">{errorMessage && <p>{errorMessage}</p>}</div>

      <Footer></Footer>
    </div>
  );
};
