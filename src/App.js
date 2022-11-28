import { Heading } from "./components/Heading";
import { Card } from "./components/Card";
import { Footer } from "./components/Footer";
import { SideBar } from "./components/SideBar";

import img1 from "./assets/image-placeholder.webp"

import "bulma/css/bulma.min.css";

function App() {
  return (
    <div className="App">
      {/* for testing */}

      <div className="columns">
        <div className="column mt-2 ml-5">
          <Heading headingString="heading is here"></Heading>
          <h2 className="title is-2 has-text-success">Navbar here</h2>
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
            <div className="columns">
              <Card title="Students" attendanceCount="300" image={img1}></Card>
            </div>
            <div className="columns">
              <Card title="Staff Members" attendanceCount="20" image={img1}></Card>
            </div>
          </div>
          <div className="columns mr-1">
            <div className="columns">
              <Card image={img1} title="testTitle"></Card>
            </div>
            <div className="columns">
              <Card image={img1} title="testTitle"></Card>
            </div>
          </div>
        </div>
      </div>

      <div className="columns">
        <div className="column">
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
}

export default App;
