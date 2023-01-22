import React from "react";
import "bulma/css/bulma.min.css";
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
    <div class="container mt-5 is-max-desktop">
      <div class="columns is-centered">
        <div class="column is-half">
          <h1 className="title is-1 has-text-centered">WELCOME ATTENDY</h1>
          <h2 className="title is-2 has-text-centered">
            Let's get you started!
          </h2>

          <div class="has-text-centered">
            <img src={image} alt="signUp" className="image is-4by2" />

            <form onSubmit={handleSubmit}>
              <div class="field mb-4">
                <div class="control">
                  <input class="input" name="firstName" type="text" placeholder="First Name" required={true} />
                </div>
              </div>

              <div class="field mb-4">
                <div class="control">
                  <input class="input" name="lastName" type="text" placeholder="Last Name" required={true} />
                </div>
              </div>

              <div class="field mb-4">
                <div class="control">
                  <input class="input" name="userID" type="text" placeholder="User ID" required={true} />
                </div>
              </div>

              <div class="field mb-4">
                <div class="control">
                  <input class="input" name="email" type="text" placeholder="E-mail" required={true} />
                </div>
              </div>

              <div class="field mb-4">
                <div class="control">
                  <input class="input" name="password" type="password" placeholder="Password" required={true} />
                </div>
              </div>

              <div class="field mb-4">
                <div class="control">
                  <input
                    class="input"
                    type="password"

                    placeholder="Confirm Password"
                    required={true}
                  />
                </div>
              </div>

              <div class="grouped">
                <div class="control">
                  <button class="button is-dark is-fullwidth mb-2" type="submit">
                    Sign-up
                  </button>
                </div>

              </div>
              <div class="control">
                <button onClick={handleCancel} type="button" class="button is-link is-fullwidth mb-5">
                  <Link to={"/login"}>Cancel</Link>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
