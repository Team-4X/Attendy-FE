import { Login } from "./components/Login";
import { SignUp } from "./components/SignUp";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { ContactUs } from "./components/ContactUs";
import { Student } from "./components/Student";
import { StudentManage } from "./components/StudentManage";
import { Staff } from "./components/Staff";
import { StaffManage } from "./components/StaffManage";
import { MarkAttendance } from "./components/MarkAttendance";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "bulma/css/bulma.min.css";

function App() {
  return (
    <div className="App">
      {/* for testing */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/auth/login" element={<Login></Login>}></Route>
          <Route path="/auth/register" element={<SignUp></SignUp>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/contact" element={<ContactUs></ContactUs>}></Route>
          <Route path="/student" element={<Student></Student>}></Route>
          <Route path="/student-manage" element={<StudentManage></StudentManage>}></Route>
          <Route path="/staff-manage" element={<StaffManage></StaffManage>}></Route>
          <Route path="/staff" element={<Staff></Staff>}></Route>
          <Route path="/mark-attendance" element={<MarkAttendance></MarkAttendance>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
