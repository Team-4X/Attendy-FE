import { NavBar } from "./NavBar";
import { Footer } from "./Footer";
import { Link } from "react-router-dom";

import "bulma/css/bulma.min.css";
export const Staff = () => {
  return (
    <div>
      <NavBar></NavBar>
      <h1 class="subtitle is-2 has-text-centered mt-5">Attendance of Teachers</h1>

      <div class="columns mt-4 is-centered">
        <div class="column mr-4 ml-4">
          <div class="control">
            <input class="input" type="text" placeholder="Subject" />
          </div>
        </div>

        <div class="column mr-4 ml-4">
          <div class="control">
            <input class="input" type="text" placeholder="present(p)/absent(a)" />
          </div>
        </div>

        <div class="column mr-4 ml-4">
          <div class="control">
            <input class="input" type="text" placeholder="Date" />
          </div>
        </div>
      </div>

      <div class="box has-text-centered">
        <div class="column">
          <button class="button is-dark">
            Filter
          </button>
        </div>
        <div class="column ">
          <button class="button is-dark">
            Download Report
          </button>
        </div>
      </div>
      <Footer></Footer>
    </div>

  );
};

