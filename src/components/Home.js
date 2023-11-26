import React from "react";
import Cookies from 'js-cookie';
import { useEffect, useState } from "react";

import { Card } from "./Card";
import { Footer } from "./Footer";
import { SideBar } from "./SideBar";
import { NavBar } from "./NavBar";
import { Login } from "./Login";
import { Heading } from "./Heading";

import studentImg from "../assets/student.jpg";
import staffImg from "../assets/staff.jpg";
import workingImg from "../assets/working-together.jpg";
import axios from "axios";



export const Home = () => {
  
  const [token, setToken] = useState('null');
  const [studentAttendanceCount, setStudentAttendanceCount] = useState(0);
  const [staffAttendanceCount, setStuffAttendanceCount] = useState(0);

  const getStudentAndStaffCountsToday = async() => {
    await axios.get(`${process.env.REACT_APP_API_URL}/attendance/getAttendanceCounts`).then((response) => {
      setStudentAttendanceCount(response.data.studentCount);
      setStuffAttendanceCount(response.data.staffCount);
    })
  }

  const getToken = () => {
    setToken(Cookies.get('token'));
  }

  useEffect(() => {
    getToken();
    getStudentAndStaffCountsToday();
  }, []);
  return (
    <>
      <NavBar></NavBar>
      {/* <Heading></Heading> */}
      <div className="columns">
        <div className="column mt-2 ml-5">
          {/* <h2 className="title is-2 has-text-success">Navbar here</h2>
          <Heading headingString="heading is here"></Heading> */}

          <hr></hr>
        </div>
      </div>

      <div className="columns">
        <div className="column is-one-third">
          <SideBar></SideBar>
        </div>
        <div className="column">
          <div className="columns mr-1">
            <div className="column">
              <Card
                title="Students"
                attendanceCount={studentAttendanceCount}
                image={workingImg}
                link="student"
              ></Card>
            </div>
            <div className="column">
              <Card
                title="Staff Members"
                attendanceCount={staffAttendanceCount}
                image={staffImg}
                link="staff"
              ></Card>
            </div>
          </div>

          <div className="columns mr-1">
            <div className="column">
              <Card
                image={workingImg}
                title="Manage Staff"
                link="staff-manage"
              ></Card>
            </div>
            <div className="column">
              <Card
                image={staffImg}
                title="Manage Student"
                link="student-manage"
              ></Card>
            </div>
          </div>
        </div>
      </div>

      <div className="columns">
        <div className="column">
          <Footer></Footer>
        </div>
      </div>
    </>
  );
};

export default Home;
