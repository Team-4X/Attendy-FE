import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

export const DropDown = (props) => {
  const [activeEle, setActiveEle] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [btnName, setBtnName] = useState(props.btnName);

  const handleDropDownClick = (e) => {
    e.preventDefault();
    // console.log(e.target.text);
    props.onData(e.target.text);
    setIsActive(!isActive);
    if (isActive) setBtnName(e.target.text);
  }

  return(
  <div className={`dropdown ${isActive?'is-active':''} m-2`} onClick={handleDropDownClick}>
    <div className="dropdown-trigger">
      <button className="button" aria-haspopup="true" aria-controls="dropdown-menu">
        <span>{btnName}</span>
        <span className="icon is-small">
          {/* <i className="fas fa-angle-down" aria-hidden="true"></i> */}
          <FontAwesomeIcon icon={faAngleDown} />
        </span>
      </button>
    </div>
    <div className="dropdown-menu" id="dropdown-menu" role="menu">
      <div className="dropdown-content">

        {
          props.items.map((item, index) => (
            <a key={index} href="#" className={`dropdown-item ${index==activeEle?'is-active':''}`}
            onClick={() => setActiveEle(index)}>{item}</a>
          ))
        }

      </div>
    </div>
  </div>
  )
}
