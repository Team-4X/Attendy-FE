import { useState } from "react";
import { DropDown } from "./assets/DropDown";
import { Icon } from "./assets/Icon";
import { faX, faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const MarkAttendanceStudents = () => {
  const classes = ["7A", "2B"];
  const [selectedVal, setSelectedVal] = useState();
  const [students, setStudents] = useState();

  // this is a call back function used to get data
  // from the child component DropDown
  const getSelectedVal = (e) => {
    if (e) setSelectedVal(e);
  }

  const handleSearch = async () => {
    await fetch(`${process.env.REACT_APP_API_URL}/attendance/getClass`, {
      method: "POST",
      body: JSON.stringify({selectedVal}),
      headers: {
        "content-type": "application/json",
      },
    })
    .then(response => response.json())
    .then(data => setStudents(data))
    .catch(err => console.error(err));

  }


  return (
    <div className="container">
      <h2 className="title is-2 has-text-centered m-5">
        Students
      </h2>
      <div>
        <div className="columns">
          <div className="column">

            <DropDown items={classes} btnName="Select Class" onData={getSelectedVal}/>
            <br/>
            <button className="button is-info mb-4" onClick={handleSearch}>Search</button>

            <div className="box m-5">

              {
                students &&
                students.map(student => (
                  <div className="columns m-3" key={student._id}>
                    <div className="column is-one-third">
                      <span className="has-text-grey">{student.studentname}</span>
                    </div>
                    <div className="column">
                      <span className="has-text-grey">{student.class}</span>
                    </div>
                    <div className="column">
                      <Icon student={student}/>
                    </div>
                  </div>
                ))
              }

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
