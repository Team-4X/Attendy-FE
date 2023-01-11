import React from "react";
import { Card } from "./Card";
import { Footer } from "./Footer";
import { SideBar } from "./SideBar";
import { NavBar } from "./NavBar";
import { Login } from "./Login";
import { Heading } from "./Heading";

import studentImg from "../assets/student.jpg";
import staffImg from "../assets/staff.jpg";
import workingImg from "../assets/working-together.jpg";

export const Home = () => {
  return (
    <>
      <NavBar></NavBar>
      <Heading></Heading>
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
          {/* cards should be here */}

          <div className="columns mr-1">
            <div className="column">
              <Card
                title="Students"
                attendanceCount="300"
                image={workingImg}
                link="student"
              ></Card>
            </div>
            <div className="column">
              <Card
                title="Staff Members"
                attendanceCount="20"
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
                attendanceCount="200"
                link="staff-manage"
              ></Card>
            </div>
            <div className="column">
              <Card
                image={staffImg}
                title="Manage Student"
                attendanceCount="33"
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
