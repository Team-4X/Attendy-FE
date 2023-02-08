import { useState } from "react";
import { DropDown } from "./assets/DropDown";

export const MarkAttendanceStudents = () => {
  const classes = ["hello1", "hello2", "hello3"];
  const [selectedVal, setSelectedVal] = useState();

  const getSelectedVal = (e) => {
    if (e) setSelectedVal(e);
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
            <button className="button is-info mb-4">Search</button>

          </div>
        </div>
      </div>
    </div>
  );
};
