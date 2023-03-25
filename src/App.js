import { Heading } from "./components/Heading";
import { Card } from "./components/Card";
import { Footer } from "./components/Footer";
import { SideBar } from "./components/SideBar";
import { StudentManage } from "./components/StudentManage";
import { TeacherInfo } from "./components/TeacherInfo";

import studentImg from "./assets/student.jpg";
import staffImg from "./assets/staff.jpg";
import workingImg from "./assets/working-together.jpg";

import "bulma/css/bulma.min.css";

function App() {
  return (
    <div><TeacherInfo></TeacherInfo></div>
  );
}

export default App;
