import { NavBar } from "./NavBar"
import { Footer } from "./Footer";
import { TabNavigation } from "./tabs/TabNavigation";
import { TabContent } from "./tabs/TabContent";

import { useState } from "react";

import "bulma/css/bulma.min.css";

export const StaffManage = () => {

  const [activeTab, setActiveTab] = useState(1);
  const tabs = ['Add a teacher', 'Show Teachers', 'Find a teacher'];

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

          <div className="has-text-centered">
            <div className="container">
              <h2 className="title is-3">Teachers 🧙</h2>

              <div className="columns" style={{width: 50 + "%", margin: "auto"}}>
                <div className="column is-half has-text-weight-bold">Name</div>
                <div className="column has-text-weight-bold">Staff ID</div>
              </div>

              <div className="columns" style={{width: 50 + "%", margin: "auto"}}>
                <div className="column is-half">Sujeewa Sandeepa</div>
                <div className="column">001</div>
              </div>

              <div className="columns" style={{width: 50 + "%", margin: "auto"}}>
                <div className="column is-half">Sujeewa Sandeepa</div>
                <div className="column">001</div>
              </div>

            </div>
          </div>
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
