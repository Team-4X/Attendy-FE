import { NavBar } from "./NavBar"
import { Footer } from "./Footer";
import { TabNavigation } from "./tabs/TabNavigation";
import { TabContent } from "./tabs/TabContent";

import { useState, useEffect } from "react";

import "bulma/css/bulma.min.css";

export const StaffManage = () => {

  const [activeTab, setActiveTab] = useState(1);
  const [teachers, setTeachers] = useState();
  // const [teachersLimited, setTeachersLimited] = useState();
  const tabs = ['Add a teacher', 'Show Teachers', 'Find a teacher'];

  const fetchTeachers = async () => {
    console.log("fetch teachers run!");
    await fetch(`${process.env.REACT_APP_API_URL}/staff/getTeachers`)
    .then(response => response.json())
    .then(data => setTeachers(data))
    .catch(err => console.error(err));    
  }

  useEffect(() => {
    console.log("use effect runs!");
    try {
      fetchTeachers();
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div>
      <NavBar></NavBar>

      <h1 class="title is-1 has-text-centered mt-5">Manage Teachers</h1>

      <div className="container">

      {/* use tabs here */}
        <TabNavigation
          tabs={tabs}
          activeTab={activeTab}
          handleClick={setActiveTab}
        />
        <TabContent activeTab={activeTab}>
          <div className="has-text-centered">
            {/* content for adding a teacher */}
            <div className="container">
              <form>
                <h2 className="title is-3">Let's Add a new Teacher 😊</h2>
                <div className="field">
                  <div className="control">
                    <input class="input" type="text" placeholder="Name" />
                  </div>
                </div>

                <div className="field">
                  <div className="control">
                    <input class="input" type="text" placeholder="Staff ID" />
                  </div>
                </div>

                <div className="field">
                  <div className="control">
                    <input class="input" type="password" placeholder="Password" />
                  </div>
                </div>

                <div className="field">
                  <div className="control">
                    <input class="input" type="password" placeholder="Confirm password" />
                  </div>
                </div>

                <div className="field">
                  <div className="control">
                    <button class="button is-link" type="submit">Add</button>
                  </div>
                </div>

              </form>
            </div>
          </div>

          {/* content for showing teachers from database this is the default one */}
          <div className="has-text-centered">
            <div className="container">
              <h2 className="title is-3">Teachers 🧙</h2>

              <div className="columns" style={{width: 50 + "%", margin: "auto"}}>
                <div className="column is-half has-text-weight-bold">Name</div>
                <div className="column has-text-weight-bold">Staff ID</div>
              </div>
        
              {/* dynamically rendering teachers data from teachers useState */}
              {
                teachers?.slice(0, 9).map(item => (
          
                  <div key={item.id} className="columns" style={{width: 50 + "%", margin: "auto"}}>
                    <div className="column is-half has-text-left">{item.name}</div>
                    <div className="column">{item.id}</div>
                  </div>

                ))
              }

            </div>
          </div>

          {/* content for finding a teacher */}
          <div className="has-text-centered">
            <div className="container">
              <h2 className="title is-3">Find a teacher 🔎</h2>
              
              <form>

                <p className="is-italic m-5">You can use either StaffID or Name to find a teacher.</p>

                <div className="field">
                  <div className="control">
                    <input class="input" type="text" placeholder="Name" name="Name" />
                  </div>
                </div>

                <div className="field">
                  <div className="control">
                    <input class="input" type="text" placeholder="Staff ID" name="staffID" />
                  </div>
                </div>

                <div className="field">
                  <div className="control">
                    <button class="button is-link" type="submit">Find</button>
                  </div>
                </div>
              </form>

            </div>
          </div>
        </TabContent>
      </div>

      <Footer></Footer>
    </div>
  )
}
