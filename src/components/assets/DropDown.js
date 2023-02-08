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
  <div class={`dropdown ${isActive?'is-active':''} m-2`} onClick={handleDropDownClick}>
    <div class="dropdown-trigger">
      <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
        <span>{btnName}</span>
        <span class="icon is-small">
          {/* <i class="fas fa-angle-down" aria-hidden="true"></i> */}
          <FontAwesomeIcon icon={faAngleDown} />
        </span>
      </button>
    </div>
    <div class="dropdown-menu" id="dropdown-menu" role="menu">
      <div class="dropdown-content">

        {
          props.items.map((item, index) => (
            <a href="#" className={`dropdown-item ${index==activeEle?'is-active':''}`}
            onClick={() => setActiveEle(index)}>{item}</a>
          ))
        }

      </div>
    </div>
  </div>
  )
}