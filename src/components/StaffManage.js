import { NavBar } from "./NavBar"
import { Footer } from "./Footer";
import { TabNavigation } from "./tabs/TabNavigation";
import { TabContent } from "./tabs/TabContent";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faX } from '@fortawesome/free-solid-svg-icons'

import { useState, useEffect } from "react";

import "bulma/css/bulma.min.css";
import { render } from "@testing-library/react";

export const StaffManage = () => {

  const [activeTab, setActiveTab] = useState(1);
  const [teachers, setTeachers] = useState();
  // const [teachersLimited, setTeachersLimited] = useState();
  const tabs = ['Add a teacher', 'Show Teachers', 'Find a teacher'];

  const fetchTeachers = async () => {
    await fetch(`${process.env.REACT_APP_API_URL}/staff/getTeachers`)
    .then(response => response.json())
    .then(data => setTeachers(data))
    .catch(err => console.error(err));    
  }

  useEffect(() => {
    try {
      fetchTeachers();
    } catch (err) {
      console.log(err);
    }
  }, []);

  // handling delete
  const [isDeleting, setIsDeleting] = useState(false);
  const handleDelete = async (item, e) => {

    if (!isDeleting && window.confirm("Do you want to delete this teacher from the database?")) {
      setIsDeleting(true);
      const response = await fetch(`${process.env.REACT_APP_API_URL}/staff/delTeachers`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(item),
      });
      console.log("teacher deleted!");

      if (!response.ok) {
        throw new Error(`Failed to fetch data!`);
      } else {
        console.log(response);
        fetchTeachers();
      }
    }
    setIsDeleting(false);


  }

  // handling edit

  const [editBoxVisibility, setEditBoxVisibility] = useState(false);
  const [selectedTeacherName, setSelectedTeacherName] = useState('');
  const [selectedTeacherID, setSelectedTeacherID] = useState('');
  const [selectedTeacherUID, setSelectedTeacherUID] = useState('');

  const [newTeacherName, setNewTeacherName] = useState('');
  const [newTeacherID, setNewTeacherID] = useState('');

  const handleNewNameChange = (e) => {
    setNewTeacherName(e.target.value);
  }
  const handleNewIDChange = (e) => {
    setNewTeacherID(e.target.value);
  }

  const clearEditForm = () => {
    setNewTeacherID('');
    setNewTeacherName('');
  }

  const handleEdit = (item) => {
    setSelectedTeacherName(item.name);
    setSelectedTeacherID(item.id);
    setSelectedTeacherUID(item._id);
    setEditBoxVisibility(true);
  }

  const handleEditForm = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const form = {
      new_name: data.get("name"),
      new_id: data.get("staffID"),
      id: selectedTeacherUID,
    }

    clearEditForm();

    const res = await fetch(`${process.env.REACT_APP_API_URL}/staff/editTeachers`, {
      method: "PUT",
      body: JSON.stringify(form),
      headers: {
        "content-type": "application/json",
      },
    });

    if (res.ok) {
      fetchTeachers();
      setEditBoxVisibility(false);
    }
  }

  // handle adding a new teacher

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [teacherName, setTeacherName] = useState("");
  const [teacherStaffID, setTeacherStaffID] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }
  const handleConfirmasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  }
  const handleNameChange = (e) => {
    setTeacherName(e.target.value);
  }
  const handleStaffIDChange = (e) => {
    setTeacherStaffID(e.target.value);
  }

  const validate = () => {
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      // send a message using bulma message
      console.log(errorMessage);
    } else {
      setErrorMessage("");
      return true;
    }
  };

  const clearInputs = () => {
    setPassword("");
    setTeacherName("");
    setTeacherStaffID("");
    setConfirmPassword("");
  }

  const handleAddTeacher = async (e) => {
    e.preventDefault();
    if (errorMessage == "") {
      const data = new FormData(e.currentTarget);
      const form = {
        id: data.get("staffID"),
        password: data.get("password"),
        name: data.get("name")
      };
      console.log(form);
      clearInputs();
      const res = await fetch(`${process.env.REACT_APP_API_URL}/staff/addTeachers`, {
        method: "POST",
        body: JSON.stringify(form),
        headers: {
          "content-type": "application/json",
        },
      });
    }
  }

  // handling find teacher
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

  const [searchedTeacher, setSearchedTeacher] = useState();

  const handleFindTeacher = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const form = {
      name: data.get("name"),
      staffID: data.get("staffID")
    }

    clearFindInputs();

    const res = await fetch(`${process.env.REACT_APP_API_URL}/staff/findTeachers`, {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "content-type": "application/json",
      },
    })
    .then(response => response.json())
    .then(data => setSearchedTeacher(data))
    .catch(error => console.error(error));

    console.log(searchedTeacher.data[0]);
    setSearchFormVisibility(false);
    setResultBoxVisibility(true);
  }

  return (
    <div>
      <NavBar></NavBar>

      <h1 className="title is-1 has-text-centered mt-5">Manage Teachers</h1>

      <div className="container">

        <div className="container m-5 has-text-centered">
        {
          editBoxVisibility &&
          <article className="message is-info mb-5  is-centered" style={{width: 50 + "%", margin: "auto"}}>
            <div className="message-header">
              <p>Teachers</p>
              <button className="delete" aria-label="delete" onClick={() => {
                setEditBoxVisibility(false);
              }}></button>
            </div>
            <div className="message-body has-text-dark has-background-light">

              <form onSubmit={handleEditForm}>

                <div className="columns">
                  <div className="column has-text-weight-bold">Name</div>
                  <div className="column has-text-weight-bold">Staff ID</div>
                </div>

                <div className="columns">
                  <div className="column">{selectedTeacherName}</div>
                  <div className="column">{selectedTeacherID}</div>
                </div>

                <div className="field">
                  <div className="control">
                    <input className="input m-1" type="text" placeholder="New Name" name="name" value={newTeacherName} onChange={handleNewNameChange}/>
                    <input className="input m-1" type="text" placeholder="New StaffID" name="staffID" value={newTeacherID} onChange={handleNewIDChange}/>
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
            {/* content for adding a teacher */}
            <div className="container">
              <form onSubmit={handleAddTeacher}>
                <h2 className="title is-3">Let's Add a new Teacher 😊</h2>

                <div className="field">
                  <div className="control">
                    <input className="input" type="text" placeholder="Name" name="name" value={teacherName} onChange={handleNameChange}/>
                  </div>
                </div>

                <div className="field">
                  <div className="control">
                    <input className="input" type="text" placeholder="Staff ID" name="staffID" value={teacherStaffID} onChange={handleStaffIDChange}/>
                  </div>
                </div>

                <div className="field">
                  <div className="control">
                    <input className="input" type="password" value={password} onChange={handlePasswordChange} placeholder="Password" name="password"/>
                  </div>
                </div>

                <div className="field">
                  <div className="control">
                    <input className="input" type="password" value={confirmPassword} onChange={handleConfirmasswordChange} placeholder="Confirm password" />
                  </div>
                </div>

                <div className="field">
                  <div className="control">
                    <button className="button is-link" onClick={validate} type="submit">Add</button>
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
                <div className="column has-text-weight-bold">Edit</div>
                <div className="column has-text-weight-bold">Staff ID</div>
              </div>

              {/* edit box was here */}

              {/* dynamically rendering teachers data from teachers useState */}
              {
                teachers?.slice(0, 9).map(item => (
          
                  <div key={item.id} className="columns" style={{width: 50 + "%", margin: "auto"}}>
                    <div className="column is-half has-text-left">
                      {item.name}
                    </div>
                    <div className="column has-text-left">
                      <a style={{color: "gray"}} onClick={() => handleDelete(item)}><FontAwesomeIcon icon={faX} className="mx-5"/></a>
                      <a style={{color: "gray"}} onClick={() => handleEdit(item)}><FontAwesomeIcon icon={faPencil} /></a>
                    </div>
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

              {
                resultBoxVisibility && 

              <article className="message is-info mb-5" style={{width: 50 + "%", margin: "auto"}}>
                <div className="message-header">
                  <p>Teachers</p>
                  <button className="delete" aria-label="delete" onClick={() => {
                    setResultBoxVisibility(false);
                    setSearchFormVisibility(true);
                  }}></button>
                </div>
                <div className="message-body has-text-dark has-background-light">
                  {
                    searchedTeacher.data?.map(item => (
                      <div key={item.id} className="columns">
                        <div className="column">{item.name}</div>
                        <div className="column">
                          <a style={{color: "gray"}} onClick={() => handleDelete(item)}><FontAwesomeIcon icon={faX} className="mx-5"/></a>
                          <a style={{color: "gray"}} onClick={() => handleEdit(item)}><FontAwesomeIcon icon={faPencil} /></a>
                        </div>
                        <div className="column">{item.id}</div>
                      </div>
                    ))
                  }
                </div>
              </article>

              }
              
              {
                searchFormVisibility &&
              <form onSubmit={handleFindTeacher} id="findTeacherForm">

                <p className="is-italic m-5">You can use either StaffID or Name to find a teacher.</p>

                <div className="field">
                  <div className="control">
                    <input className="input" type="text" disabled={findID !== ""} placeholder="Name" name="name" onChange={handleFindNameChange} value={findName}/>
                  </div>
                </div>

                <div className="field">
                  <div className="control">
                    <input className="input" type="text" disabled={findName !== ""} placeholder="Staff ID" name="staffID" onChange={handleFindIDChange} value={findID}/>
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
