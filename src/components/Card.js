import { useState } from "react";
import { Link } from "react-router-dom";


export const Card = (props) => {
  const url = '/' + props.link;
  const [title, setTitle] = useState(props.title);
  const [attendanceCount, setAttendanceCount] = useState(props.attendanceCount);
  const [image, setImage] = useState(props.image);
  const [link, setLink] = useState(url);


  return (
    <div className="card">
      <div className="card-image px-0 has-text-centered">
        <img src={image} alt="placeholder image" />
      </div>
      <div className="card-content">
        <p className="has-text-centered">
          <Link to={link} className="has-text-link has-text-weight-bold">{title}</Link>
        </p>
      </div>
      <div className="card-footer">
        <p className="card-footer-item">
          {attendanceCount}
        </p>
      </div>
    </div>
  )
}
