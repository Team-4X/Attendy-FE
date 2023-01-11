import { NavBar } from "./NavBar"
import { Footer } from "./Footer";
import { Link } from "react-router-dom";

import "bulma/css/bulma.min.css";

export const StudentManage = () => {
    return (
        <div>
            <NavBar></NavBar>

            <h1 class="title is-1 has-text-centered mt-5">Manage Students</h1>

            <div class="columns mt-4 is-centered">
                <div class="column mr-4 ml-4">
                    <div class="control">
                        <input class="input" type="text" placeholder="Grade" />
                    </div>
                </div>
                <div class="column mr-4 ml-4">
                    <div class="control">
                        <input class="input" type="text" placeholder="Class" />
                    </div>
                </div>
                <div class="column mr-4 ml-4">
                    <div class="control">
                        <input class="input" type="text" placeholder="Date" />
                    </div>
                </div>
            </div>

            <div class="columns">
                <div class="column mr-4 ml-4">
                    <div class="control">
                        <button class="button is-dark">Filter</button>
                    </div>
                </div>
                <div class="column mr-4 ml-4">
                    <div class="control">
                        <button class="button is-info">Add</button>
                    </div>
                </div>
                <div class="column mr-4 ml-4">
                    <div class="control">
                        <button class="button is-danger">Download Report</button>
                    </div>
                </div>
            </div>

            <Footer></Footer>
        </div>
    )
}
