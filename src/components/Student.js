import { NavBar } from "./NavBar";
import { Footer } from "./Footer";
import { Link } from "react-router-dom";

import "../App.css";
import "bulma/css/bulma.min.css";
import { useEffect, useState } from "react";
import axios from "axios";

import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
export const Student = () => {
  const [filteredStudents, setFilteredstudents] = useState([]);
  const [students, setStudents] = useState([]);
  const [systemUser, setSystemUsers] = useState(null);
  const [error, setError] = useState(false);
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
  };

  const handleSearch = (value) => {
    console.log("student name");
    const filteredStudents = students.filter((elemnt) =>
      elemnt.name.toLowerCase().includes(value)
    );
    console.log(filteredStudents);
    setFilteredstudents(filteredStudents);

    if (value === "") setFilteredstudents(students);
  };
  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
  };
  const handleSelect = async (studentId) => {
    console.log(studentId);
  };
  return (
    <div>
      <NavBar></NavBar>
      <h1 className="subtitle is-2 has-text-centered mt-5">
        Attendance of Students
      </h1>

      <div className="columns">
        <div className="column">
          <div class="select">
            <select>
              <option>Grade 7</option>
              <option>Grade 8</option>
            </select>
          </div>
        </div>
        <div className="column mr-3 ml-3">
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Student Name"
              onKeyDown={handleKey}

              onChange={(e) => handleSearch(e.target.value.toLowerCase())}
            />
          </div>

          <div className="userInfo">
            {filteredStudents.map((item) => (
              <div
                className="userId"
                key={item._id}
                onClick={() => handleSelect(item._id)}
              >
                 <div className="displayName">{item.name}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="column">
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="present(p)/absent(a)"
            />
          </div>
        </div>
        <div className="column mr-5">
          <div className="control">
            <input className="input" type="text" placeholder="Date" />
          </div>
        </div>
      </div>

      <div className="box has-text-centered">
        <div className="column">
          <button className="button is-dark">Filter</button>
        </div>
        <div className="column ">
          <button className="button is-dark">Download Report</button>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};
