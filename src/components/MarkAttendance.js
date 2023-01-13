import { NavBar } from "./NavBar";
import { Footer } from "./Footer";

export const MarkAttendance = () => {
    return (
    <div>
        <NavBar></NavBar>
        <div className="container">
            <h1 className="title is-1 has-text-centered m-5">Mark Attendance</h1>
            <h2 className="title is-3">Mark your attendance</h2>
            <form>
                <div className="field">
                    <div className="control mb-3">
                        <input className="input" type="text" name="staffID" placeholder="Staff ID" />
                    </div>
                    <button className="button is-dark" type="submit">Mark Attendance</button>
                </div>
            </form>
            <h2 className="title is-3 mt-5">Mark student attendance</h2>
            <div className="container">
                <form>
                    <div className="field">
                        <div className="control mb-3">
                            <input className="input" type="text" name="class" placeholder="class" />
                        </div>
                        <button className="button is-link" type="submit">Search</button>
                    </div>
                </form>
                <div className="box">
                    <p className="p mt-5">Need to dynamically render students in the particular class. </p>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
    )
}