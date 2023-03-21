import { NavBar } from "./NavBar";
import { Footer } from "./Footer";
import { Link } from "react-router-dom";

import "../App.css";
import "bulma/css/bulma.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fortawesome/fontawesome-free/js/all.min.js";
import { useEffect, useState } from "react";
import axios from "axios";

import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
export const Student = () => {
  const [filteredStudents, setFilteredstudents] = useState([]);
  const [students, setStudents] = useState([]);
  const [systemUser, setSystemUsers] = useState(null);
  const [error, setError] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [inputValue, setInputValue] = useState("");
  const [className, setClassName] = useState([]);

  //fetch students
  useEffect(() => {
    fetchStudents();
    getSystemUser();
  }, []);

  function getSystemUser() {}

  const fetchStudents = async () => {
    const res = await axios.get(`http://localhost:4000/student`);
    setStudents(res.data);
    setFilteredstudents(res.data);
    const classNames = res.data.map((student) => student.class);
    setClassName(classNames);
    console.log(classNames);
  };

  const handleSearch = (value) => {
    //console.log("student name");

    const filteredStudents = students.filter((elemnt) =>
      elemnt.name.toLowerCase().includes(value)
    );

    //console.log(filteredStudents);
    setFilteredstudents(filteredStudents);

    if (value === "") setFilteredstudents(students);
  };
  const handleKey = (e) => {
    e.code === "Backspace" && handleSearch();
  };
  const handleSelect = async (studentId) => {
    const selectedStudent = students.find((item) => item._id === studentId);
    if (selectedStudent) {
      setInputValue(""); // clear the previous input value
      setInputValue(selectedStudent.name); // set the new input value
      setFilteredstudents([selectedStudent]); // optional - to show only the selected student in the list
    }
  };

  // function handleDateChange(date) {
  //   setSelectedDate(date);
  // }
  // const handleFilter = (studentId) => {
  //   if (inputValue) {
  //     console.log("have an inputValue value");
  //   }
  // };

  const handleFilter = () => {
    console.log("clicked filter!");
  };

  return (
    <div>
      <NavBar></NavBar>
      <h1 className="subtitle is-2 has-text-centered mt-5">
        Attendance of Students
      </h1>
      {/* <div className="calendar-container">
        <h2>My Calendar</h2>
        <Calendar value={selectedDate} onChange={handleDateChange} />
      </div> */}

      <div className="field is-grouped is-grouped-right mr-5">
        <div className="control">
          <input class="input" type="date" placeholder="Pick the date"></input>
        </div>
      </div>

      <div className="columns">
        <div className="column">
          <input
            class="input"
            type="text"
            placeholder="Student Name"
            onKeyDown={handleKey}
            onChange={(e) => handleSearch(e.target.value.toLowerCase())}
            value={inputValue}
          ></input>

          <div className="userInfo">
            {filteredStudents.map((item) => (
              <div
                className="userId"
                key={item._id}
                onClick={() => handleSelect(item._id)}
              >
                {item.name}

                {/* <div className="displayName">{item.name}</div> */}
              </div>
            ))}
          </div>
        </div>
        <div className="column">
          <div className="field">
            <div className="control">
              <div class="select">
                <select>
                  <option>Class</option>
                  <option>Class 7A</option>
                  <option>Class 2B</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="column">
          <div class="control">
            <label class="radio">
              <input type="radio" name="foobar" />
              Present
            </label>
            <label class="radio">
              <input type="radio" name="foobar" checked />
              Absent
            </label>
            {/* <label class="radio">
              <input type="radio" name="foobar" checked />
              Both
            </label> */}
          </div>
        </div>
      </div>

      <div className="box has-text-centered">
        <div className="column">
          <button className="button is-dark" onClick={handleFilter}>
            Filter
          </button>
        </div>
        <div className="column ">
          <button className="button is-dark">Download Report</button>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};
