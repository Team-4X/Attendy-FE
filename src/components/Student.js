import { useState } from "react";
import axios from "axios";
import { NavBar } from "./NavBar";
import { Footer } from "./Footer";
import "../App.css";
import "bulma/css/bulma.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fortawesome/fontawesome-free/js/all.min.js";
import "react-calendar/dist/Calendar.css";
// import { saveAs } from "file-saver";
// import Papa from "papaparse";
import jsPDF from "jspdf";
import "jspdf-autotable";

export const Student = () => {
  const [studentId, setStudentId] = useState("");
  const [date, setDate] = useState([]);
  const [attendanceDetails, setAttendanceDetails] = useState([]);
  const [studentDetails, setStudentDetails] = useState([]);
  const [isStudentIdDisabled, setIsStudentIdDisabled] = useState(false);
  const [isDateDisabled, setIsDateDisabled] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleFilterClick = async () => {
    try {
      if (studentId !== "") {
        //console.log(studentId);
        const res = await axios.get(
          `http://localhost:4000/student/${studentId}`
        );
        // console.log(res.data);
        // const studentDetails = res.data[0];
        // console.log(studentDetails);
        setStudentDetails(studentDetails);
        const attendanceDetails = res.data;
        //console.log(attendanceDetails);
        setAttendanceDetails(attendanceDetails);
      } else if (date) {
        const response = await axios.get(
          `http://localhost:4000/find-AttendanceStudent/${date}`
        );
        const attendanceDetails = response.data;
        //console.log(attendanceDetails);
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
        console.log(error);
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
  //download attendance report as an excel sheet
  // const handleDownloadClick = () => {
  //   const headers = [
  //     "Student ID",
  //     "Student Name",
  //     "Class Name",
  //     "Date",
  //     "Attendance Status",
  //   ];
  //   const rows = attendanceDetails.map((attendance) => [
  //     attendance.studentID,
  //     attendance.studentname,
  //     attendance.class,
  //     attendance.date,
  //     attendance.attendance,
  //   ]);
  //   const csvData = Papa.unparse([headers, ...rows]);

  //   const blob = new Blob([csvData], { type: "text/csv;charset=utf-8" });
  //   saveAs(blob, "Attendance_Report.csv");
  // };

  //dowload repost as a pdf format

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
        <div className="column">
          <div className="field has-addons">
            <div className="control is-expanded">
              <input
                className={`student-input ${
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
            className={`student-input ${isDateDisabled ? "prohibited" : ""}`}
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
          <button className="button is-dark" onClick={handleDownloadClick}>
            Download Report
          </button>
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
      <div className="err-msg">{errorMessage && <p>{errorMessage}</p>}</div>

      <Footer></Footer>
    </div>
  );
};
