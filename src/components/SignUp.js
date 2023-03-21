import React from "react";
import "bulma/css/bulma.min.css";
import "./login-content.css";
import image from "./14230944_5437683.jpg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import { useState } from "react";

export const SignUp = () => {

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const form = {
      name: data.get('firstName') + ' ' + data.get('lastName'),
      userID: data.get('userID'),
      email: data.get('email'),
      password: data.get('password')
    };
    const res = await fetch(`${process.env.REACT_APP_API_URL}/auth/register`, {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "content-type": "application/json",
      },
    });
    
    if (res.ok) {
      navigate('/'); 
    }
  }

  const handleCancel = () => {
    navigate('/');
  }

  return (
    <div className="container mt-5 is-max-desktop">
      <div className="columns is-centered">
        <div className="column is-half">
          <h1 className="title has-text-centered">WELCOME ATTENDY</h1>
          <h2 className="subtitle has-text-centered">
            Let's get you started!
          </h2>

          <div className="has-text-centered">
            <img src={image} alt="signUp" className="signup-image-size" 
            style={{width: 350, height: 320}}/>

            <form onSubmit={handleSubmit}>
              <div className="field mb-4">
                <div className="control">
                  <input className="input" name="firstName" type="text" placeholder="First Name" required={true} />
                </div>
              </div>

              <div className="field mb-4">
                <div className="control">
                  <input className="input" name="lastName" type="text" placeholder="Last Name" required={true} />
                </div>
              </div>

              <div className="field mb-4">
                <div className="control">
                  <input className="input" name="userID" type="text" placeholder="User ID" required={true} />
                </div>
              </div>

              <div className="field mb-4">
                <div className="control">
                  <input className="input" name="email" type="text" placeholder="E-mail" required={true} />
                </div>
              </div>

              <div className="field mb-4">
                <div className="control">
                  <input className="input" name="password" type="password" placeholder="Password" required={true} />
                </div>
              </div>

              <div className="field mb-4">
                <div className="control">
                  <input
                    className="input"
                    type="password"

                    placeholder="Confirm Password"
                    required={true}
                  />
                </div>
              </div>

              <div className="grouped">
                <div className="control">
                  <button className="button is-dark mb-2" type="submit">
                    Sign-up
                  </button>
                </div>

                <div className="control">
                  <button onClick={handleCancel} type="button" className="button is-link mb-5">
                    <Link to={"/login"} className="has-text-white">Cancel</Link>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
