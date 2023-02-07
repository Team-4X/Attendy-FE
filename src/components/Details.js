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
    <div class="card">
      <div class="card-content">
        <div class="columns">
          <div class="column has-background-grey-dark has-text-link-light">
            {name}
          </div>
        </div>
        <div class="columns">
          <div class="column is-one-third">
            <figure class="image is-128x128">
              <img class="is-rounded" src={image}></img>
            </figure>
          </div>
          <div class="column">
            <table class="table is-striped is-narrow">
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
