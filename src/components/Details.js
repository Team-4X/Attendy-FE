import { useState } from "react";
import "./student-details.css";
export const Details = (props) => {
  const [name, setName] = useState(props.name);
  const [student_id, setStudent_id] = useState(props.student_id);
  const [grade, setGrade] = useState(props.grade);
  const [classteacher, setClassteacher] = useState(props.classteacher);
  const [status, setStatus] = useState(props.status);
  const [image, setImage] = useState(props.image);

  return (
    <div className="card">
      <div className="card-content">
        <div className="columns">
          <div className="column has-background-grey-dark has-text-link-light">
            {name}
          </div>
        </div>
        <div className="columns">
          <div className="column is-one-third">
            <figure className="image is-128x128">
              <img className="is-rounded" src={image}></img>
            </figure>
          </div>
          <div className="column">
            <table className="table is-striped is-narrow">
              <tr>
                <td>Student_ID</td>
                <td>{student_id}</td>
              </tr>
              <tr>
                <td>Grade</td>
                <td>{grade}</td>
              </tr>
              <tr>
                <td>Class Teacher</td>
                <td> {classteacher}</td>
              </tr>
              <tr>
                <td>Status</td>
                <td>{status}</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
