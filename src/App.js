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
import CheckAuth from "./utils/CheckAuth";
import Guest from "./utils/Guest";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import setUser from "./store/auth.js";
import Cookies from 'js-cookie';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "bulma/css/bulma.min.css";

function App() {

  const token = Cookies.get('token');
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(true);

  const fetchUser = async() => {
    setIsLoading(true);
    const res = await fetch(`${process.env.REACT_APP_API_URL}/auth/user`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (res.ok) {
      const user = await res.json();
      console.log(user);
      dispatch(setUser(user));
    }

    setIsLoading(false);
  }

  useEffect(() => {
    fetchUser();
  }, []);

  if (isLoading) {
    return <p>Loading ...</p>;
  }

  console.log(token);

  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/auth/login" element={<Guest><Login /></Guest>}></Route>
          <Route path="/auth/register" element={<Guest><SignUp/></Guest>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/contact" element={<ContactUs></ContactUs>}></Route>
          <Route path="/student" element={<Student></Student>}></Route>
          <Route path="/student-manage" element={<CheckAuth><StudentManage/></CheckAuth>}></Route>
          <Route path="/staff-manage" element={<CheckAuth><StaffManage/></CheckAuth>}></Route>
          <Route path="/staff" element={<Staff></Staff>}></Route>
          <Route path="/mark-attendance" element={<MarkAttendance></MarkAttendance>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
