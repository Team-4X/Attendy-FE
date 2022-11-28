import { useState } from "react";

export const Card = (props) => {
  const [title, setTitle] = useState(props.title);
  const [attendanceCount, setAttendanceCount] = useState(props.attendanceCount);
  const [image, setImage] = useState(props.image);

  return (
    <div className="card">
      <div className="card-image px-0 has-text-centered">
        <img src={image} alt="placeholder image" />
      </div>
      <div className="card-content">
        <p className="has-text-centered">
          <a href="" className="has-text-link has-text-weight-bold">{title}</a>
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

