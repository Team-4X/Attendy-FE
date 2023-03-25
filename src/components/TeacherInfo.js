import { NavBar } from "./NavBar"
import { Footer } from "./Footer";
import axios from "axios";
import "bulma/css/bulma.min.css";
import { useState } from "react";
import "../App.css";

export const TeacherInfo = () => {

    const [teacherId, setTeachersId] = useState("");
    const [teacherName, setTeachersName] = useState("");
    const [date, setDate] = useState([]);
    const [attendanceStatus, setAttendanceStataus] = useState("");
    const [attendanceDetails, setAttendanceDetails] = useState([]);

    const handleFilterClick = () => {
        axios
        .get(`http://localhost:4000/staff-attendance/${teacherId}`)
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

    const handleInputChange1 = (event) => {
        setTeachersId(event.target.value); 
    };
    /*const handleInputChange2 = (event) => {
        setTeachersName(event.target.value);
    }*/

    return (
        <div>
            <NavBar></NavBar>
            <h1 className="subtitle is-2 has-text-centered mt-5">
                Attendance of Teachers
            </h1>

            <div className="columns">
                <div className="column">
                    <input
                        className="input"
                        type="text"
                        placeholder="Enter Teacher Id"
                        value={teacherId}
                        onChange={handleInputChange1}
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
            <Footer></Footer>
        </div>
    )
}