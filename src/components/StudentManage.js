import { NavBar } from "./NavBar"
import { Footer } from "./Footer";
import { TabNavigation } from "./tabs/TabNavigation";
import { TabContent } from "./tabs/TabContent";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faX } from '@fortawesome/free-solid-svg-icons'

import { useState, useEffect } from "react";

import "bulma/css/bulma.min.css";
import { render } from "@testing-library/react";

export const StudentManage = () => {
    const [activeTab, setActiveTab] = useState(1);
    const [Student, setStudent] = useState();
    // const [studentsLimited, setStudentsLimited] = useState();
    const tabs = ['Add a student', 'Show student', 'Find a student '];
  
    const fetchStudent = async () => {
      await fetch(`${process.env.REACT_APP_API_URL}/students/getStudent`)
      .then(response => response.json())
      .then(data => setStudent(data))
      .catch(err => console.error(err));    
    }

    useEffect(() => {
        try {
          fetchStudent();
        } catch (err) {
          console.log(err);
        }
      }, []);

    // handling delete
  const [isDeleting, setIsDeleting] = useState(false);
  const handleDelete = async (item, e) => {

    if (!isDeleting && window.confirm("Do you want to delete this student from the database?")) {
      setIsDeleting(true);
      const response = await fetch(`${process.env.REACT_APP_API_URL}/students/delStudent`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(item),
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch data!`);
      } else {
        console.log(response);
        fetchStudent();
      }
    }
    setIsDeleting(false);
  }
  
  // handling edit

  const [editBoxVisibility, setEditBoxVisibility] = useState(false);
  const [selectedStudentName, setSelectedStudentName] = useState('');
  const [selectedStudentID, setSelectedStudentID] = useState('');
  const [selectedStudentUID, setSelectedStudentUID] = useState('');
  const [selectedStudentClass, setSelectedStudentClass] = useState('');

  const [newStudentName, setNewStudentName] = useState('');
  const [newStudentID, setNewStudentID] = useState('');
  const [newStudentClass, setNewStudentClass] = useState('')

  const handleNewNameChange = (e) => {
    setNewStudentName(e.target.value);
  }
  const handleNewIDChange = (e) => {
    setNewStudentID(e.target.value);
  }

  const handleNewClassChange = (e) => {
    setNewStudentClass(e.target.value);
  }
  

  const clearEditForm = () => {
    setNewStudentID('');
    setNewStudentName('');
    setNewStudentClass('');
  }

  const handleEdit = (item) => {
   
    setSelectedStudentName(item.studentname);
    setSelectedStudentID(item.studentID);
    setSelectedStudentUID(item._id);
    setSelectedStudentClass(item.class);
    setEditBoxVisibility(true);
  }

  const handleEditForm = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const form = {
      new_name: data.get("name"),
      new_id: data.get("studentId"),
      new_class:data.get("studentClass"),
      id: selectedStudentUID,
    }
    clearEditForm();

    const res = await fetch(`${process.env.REACT_APP_API_URL}/students/editStudent`, {
      method: "PUT",
      body: JSON.stringify(form),
      headers: {
        "content-type": "application/json",
      },
    });

    if (res.ok) {
      fetchStudent();
      setEditBoxVisibility(false);
    }
  }

  // handle adding a new student
  
  const [studentName, setstudentName] = useState("");
  const [studentId, setstudentId] = useState("");
  const [studentClass,setStudentClass] = useState("");

  const handleNameChange = (e) => {
    setstudentName(e.target.value);
  }
  const handleStudentIDChange = (e) => {
    setstudentId(e.target.value);
  }
  const handleStudentClassChange = (e) => {
    setStudentClass(e.target.value);
  }

 
  const clearInputs = () => {
    setstudentName("");
    setstudentId("");
    setStudentClass("");
   
  }
  const handleAddStudent = async (e) => {
    e.preventDefault();
    {

      const data = new FormData(e.currentTarget);

      const form = {
        id: data.get("studentId"),
        name: data.get("name"),
        class: data.get("class")
      };
      clearInputs();
      const res = await fetch(`${process.env.REACT_APP_API_URL}/students/addStudent`, {
        method: "POST",
        body: JSON.stringify(form),
        headers: {
          "content-type": "application/json",
        },
      });
    }
  }

  // handling find student
  const [findName, setFindName] = useState("");
  const [findID, setFindID] = useState("");

  const clearFindInputs = () => {
    setFindID("");
    setFindName("");
  }

  const handleFindIDChange = (e) => {
    setFindID(e.target.value);
  }
  const handleFindNameChange = (e) => {
    setFindName(e.target.value);
  }

  const [searchFormVisibility, setSearchFormVisibility] = useState(true);
  const [resultBoxVisibility, setResultBoxVisibility] = useState(false);

  const [searchedStudent, setSearchedStudent] = useState();

  const handleFindStudent = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const form = {
      name: data.get("name"),
      studentID: data.get("studentId")
    }

    clearFindInputs();

    const res = await fetch(`${process.env.REACT_APP_API_URL}/students/findStudent`, {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "content-type": "application/json",
      },
    })
    .then(response => response.json())
    .then(data => setSearchedStudent(data))
    .catch(error => console.error(error));

    console.log(searchedStudent);
    setSearchFormVisibility(false);
    setResultBoxVisibility(true);
  }

  return (
    <div>
      <NavBar></NavBar>

<h1 className="title is-1 has-text-centered mt-5">Manage Student</h1>

<div className="container">

  <div className="container m-5 has-text-centered">
  {
    editBoxVisibility &&
    <article className="message is-info mb-5  is-centered" style={{width: 50 + "%", margin: "auto"}}>
      <div className="message-header">
        <p> Student</p>
        <button className="delete" aria-label="delete" onClick={() => {
          setEditBoxVisibility(false);
        }}></button>
      </div>
      <div className="message-body has-text-dark has-background-light">

        <form onSubmit={handleEditForm}>

          <div className="columns">
            <div className="column has-text-weight-bold">Name</div>
            <div className="column has-text-weight-bold">Student Id</div>
            <div className="column has-text-weight-bold">Class</div>
          </div>

          <div className="columns">
            <div className="column">{selectedStudentName}</div>
            <div className="column">{selectedStudentID}</div>
            <div className="column">{selectedStudentClass}</div>
          </div>

          <div className="field">
            <div className="control">
              <input className="input m-1" type="text" placeholder="New Name" name="name" value={newStudentName} onChange={handleNewNameChange}/>
              <input className="input m-1" type="text" placeholder="New studentId" name="studentId" value={newStudentID} onChange={handleNewIDChange}/>
              <input className="input m-1" type="text" placeholder="New student Class" name="studentClass" value={newStudentClass} onChange={handleNewClassChange}/>
            </div>
          </div>
          <button className="button is-info" type="submit">Edit</button>
        </form>

      </div>
  </article>
  }
  </div>

{/* use tabs here */}
  <TabNavigation
    tabs={tabs}
    activeTab={activeTab}
    handleClick={setActiveTab}
  />
         <TabContent activeTab={activeTab}>
          <div className="has-text-centered">
            {/* content for adding a student */}
            <div className="container">
              <form onSubmit={handleAddStudent}>
                <h2 className="title is-3">Let's Add a new Student 😊</h2>

                <div className="field">
                  <div className="control">
                    <input className="input" type="text" placeholder="Name" name="name" value={studentName} onChange={handleNameChange}/>
                  </div>
                </div>

                <div className="field">
                  <div className="control">
                    <input className="input" type="text" placeholder="Student Id" name="studentId" value={studentId} onChange={handleStudentIDChange}/>
                  </div>
                </div>


                <div className="field">
                  <div className="control">
                     <input className="input" type="text" placeholder="Class" name="class" value={studentClass} onChange={handleStudentClassChange}/>
                  </div>
                </div>


                <div className="field">
                  <div className="control">
                    <button className="button is-link"  type="submit">Add</button>
                  </div>
                </div>

              </form>
            </div>
          </div>

          {/* content for showing students from database this is the default one */}
          <div className="has-text-centered">
            <div className="container">
              <h2 className="title is-3">Student </h2>

              <div className="columns" style={{width: 50 + "%", margin: "auto"}}>
                <div className="column is-half has-text-weight-bold">Name</div>
                <div className="column has-text-weight-bold">Edit</div>
                <div className="column has-text-weight-bold">Student Id</div>
              </div>

              {/* edit box was here */}

              {/* dynamically rendering student data from student useState */}
              {
                Student?.slice(0, 9).map(item => (
          
                  <div key={item.studentID} className="columns" style={{width: 50 + "%", margin: "auto"}}>
                    <div className="column is-half has-text-left">
                      {item.studentname}
                    </div>
                    <div className="column has-text-left">
                      <a style={{color: "gray"}} onClick={() => handleDelete(item)}><FontAwesomeIcon icon={faX} className="mx-5"/></a>
                      <a style={{color: "gray"}} onClick={() => handleEdit(item)}><FontAwesomeIcon icon={faPencil} /></a>
                    </div>
                    <div className="column">{item.studentID}</div>
                  </div>

                ))
              }

            </div>
          </div>

          {/* content for finding a student */}
          <div className="has-text-centered">
            <div className="container">
              <h2 className="title is-3">Find a student 🔎</h2>

              {
                resultBoxVisibility && 

              <article className="message is-info mb-5" style={{width: 50 + "%", margin: "auto"}}>
                <div className="message-header">
                  <p>Student</p>
                  <button className="delete" aria-label="delete" onClick={() => {
                    setResultBoxVisibility(false);
                    setSearchFormVisibility(true);
                  }}></button>
                </div>
                <div className="message-body has-text-dark has-background-light">
                  {
                    searchedStudent.data?.map(item => (
                      <div key={item.studentID} className="columns">
                        <div className="column">{item.studentname}</div>
                        <div className="column">
                          <a style={{color: "gray"}} onClick={() => handleDelete(item)}><FontAwesomeIcon icon={faX} className="mx-5"/></a>
                          <a style={{color: "gray"}} onClick={() => handleEdit(item)}><FontAwesomeIcon icon={faPencil} /></a>
                        </div>
                        <div className="column">{item.studentID}</div>
                      </div>
                    ))
                  }
                </div>
              </article>

              }
              
              {
                searchFormVisibility &&
                <form onSubmit={handleFindStudent} id="findStudentForm">

                <p className="is-italic m-5">You can use either studentId or Name to find a student.</p>

                <div className="field">
                  <div className="control">
                    <input className="input" type="text" disabled={findID !== ""} placeholder="Name" name="name" onChange={handleFindNameChange} value={findName}/>
                  </div>
                </div>

                <div className="field">
                  <div className="control">
                    <input className="input" type="text" disabled={findName !== ""} placeholder="Student Id" name="studentId" onChange={handleFindIDChange} value={findID}/>
                  </div>
                </div>



                <div className="field">
                  <div className="control">
                    <button className="button is-link" type="submit">Find</button>
                  </div>
                </div>
              </form>

              }


            </div>
          </div>
        </TabContent>
      </div>

      <Footer></Footer>
      </div>

      
  )
}