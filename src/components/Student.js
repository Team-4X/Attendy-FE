import { NavBar } from "./NavBar";
import { Footer } from "./Footer";
import { Link } from "react-router-dom";

import "../App.css";
import "bulma/css/bulma.min.css";
import { useEffect, useState } from "react";
import axios from "axios";

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
      <div className="columns mt-4 is-centered">
        <div className="column mr-4 ml-4">
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Student Name"
              onKeyDown={handleKey}
              onChange={(e) => handleSearch(e.target.value.toLowerCase())}
            />

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
        </div>

        {/* <Table data={data}></Table> */}

        <div className="column mr-4 ml-4">
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="present(p)/absent(a)"
            />
          </div>
        </div>

        <div className="column mr-4 ml-4">
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
