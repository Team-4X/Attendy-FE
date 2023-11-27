import { NavBar } from "./NavBar"
import { Footer } from "./Footer";
import axios from "axios";
import "bulma/css/bulma.min.css";
import "react-calendar/dist/Calendar.css";
import { useState, useEffect } from "react";
import "../App.css";
import jsPDF from "jspdf";
import "jspdf-autotable";

export const TeacherInfo = () => {

  const [teacherId, setTeacherId] = useState("");
  const [teacherName, setTeachersName] = useState("");
  const [date, setDate] = useState([]);
  const [attendanceStatus, setAttendanceStataus] = useState("");
  const [attendanceDetails, setAttendanceDetails] = useState([]);
  const [isTeacherIdDisabled, setIsTeacherIdDisabled] = useState(false);
  const [isDateDisabled, setIsDateDisabled] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const getAttendanceByDate = async (date) => {
    const response = await axios.get(
      `http://localhost:4000/find-StaffByDate/${date}`
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
      if (teacherId !== "") {
        axios
          .get(`http://localhost:4000/staff-attendance/${teacherId}`)
          .then((res) => {
            const attendanceDetails = res.data;
            setAttendanceDetails(attendanceDetails);
          })
          .catch((error) => {
            console.log(error);
          });

      } else if (date) {
        const response = await axios.get(
          `http://localhost:4000/find-StaffByDate/${date}`
        );
        const attendanceDetails = response.data;
        setAttendanceDetails(attendanceDetails);
      }
      setErrorMessage("");
    } catch (error) {
      if (error.response && error.response.status === 404) {
        if (error.response.data.message === "Teacher not found") {
          setErrorMessage("Teacher not found");
        } else if (
          error.response.data.message === "Attendance data not found"
        ) {
          setErrorMessage("Attendance data not found");
        }
      } else {
        console.log(error);
      }
    }
    setTeacherId("");
    setIsDateDisabled(false);
    setIsTeacherIdDisabled(false);
    setDate("");

  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name === "date") {
      setDate(value);
      setIsTeacherIdDisabled(!!value);
    } else if (name === "teacherId") {
      setTeacherId(value);
      setIsDateDisabled(!!value);
    }
  };

  const handleClearInput = () => {
    setTeacherId("");
    setDate("");
    setIsTeacherIdDisabled(false);
    setIsDateDisabled(false);
  };

  const handleDownloadClick = () => {
    const headers = [
      "Teacher Name",
      "Date",
      "Attendance Status"
    ];
    const rows = attendanceDetails.map((attendance) => [
      attendance.teacherName,
      attendance.date,
      attendance.attendance
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
        Attendance of Teachers
      </h1>

      <div className="columns">
        <div className="column">
          <input
            className="ml-5"
            type="text"
            placeholder="Enter Teacher Id"
            value={teacherId}
            name="teacherId"
            onChange={handleInputChange}
          />
          <div className="">
            <input
              className="ml-5"
              type="date"
              name="date"
              value={date}
              onChange={handleInputChange}
            />
          </div>

        </div>
        <div className="column">
          <button className="button is-dark" onClick={handleFilterClick}>
            Filter
          </button>
        </div>

        <div className="column">
          <button className="button is-dark" onClick={handleDownloadClick}>Download Report</button>
        </div>
      </div>
      <div className="attedanceTable">
        <table className="table mt-5 is-bordered is-striped  is-narrow is-hoverable is-max-desktop">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Teacher Name</th>
              <th scope="col">Date</th>
              <th scope="col">Attendance Status</th>
            </tr>
          </thead>
          <tbody>
            {attendanceDetails.map((attendance, index) => (
              <tr key={attendance._id}>
                <th scope="row">{index + 1}</th>
                <td>{attendance.teacherName}</td>
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
  )
}