import { Heading } from "./components/Heading";
import { Login } from "./components/Login";
import { SignUp } from "./components/SignUp";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { ContactUs } from "./components/ContactUs";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "bulma/css/bulma.min.css";

function App() {
  return (
    <div className="App">
      {/* for testing */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/register" element={<SignUp></SignUp>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/contact" element={<ContactUs></ContactUs>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
