import { NavBar } from "./NavBar";
import { Footer } from "./Footer";
import { Link } from "react-router-dom";

import "bulma/css/bulma.min.css";
export const Staff = () => {
  return (
    <div>
      <NavBar></NavBar>
      <h1 className="subtitle is-2 has-text-centered mt-5">Attendance of Teachers</h1>

      <div className="columns mt-4 is-centered">
        <div className="column mr-4 ml-4">
          <div className="control">
            <input className="input" type="text" placeholder="Subject" />
          </div>
        </div>

        <div className="column mr-4 ml-4">
          <div className="control">
            <input className="input" type="text" placeholder="present(p)/absent(a)" />
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
          <button className="button is-dark">
            Filter
          </button>
        </div>
        <div className="column ">
          <button className="button is-dark">
            Download Report
          </button>
        </div>
      </div>
      <Footer></Footer>
    </div>

  );
};

