import React from "react";
import "bulma/css/bulma.min.css";
import image from "./14230944_5437683.jpg";
import { Link } from "react-router-dom";

export const SignUp = () => {
  return (
    <div className="container mt-5 is-max-desktop">
      <div className="columns is-centered">
        <div className="column is-half">
          <h1 className="title is-1 has-text-centered">WELCOME ATTENDY</h1>
          <h2 className="title is-2 has-text-centered">
            Let's get you started!
          </h2>

          <div className="has-text-centered">
            <img src={image} alt="signUp" className="image is-4by2" />

            <div className="field mb-4">
              <div className="control">
                <input className="input" type="text" placeholder="First Name" />
              </div>
            </div>

            <div className="field mb-4">
              <div className="control">
                <input className="input" type="text" placeholder="Last Name" />
              </div>
            </div>

            <div className="field mb-4">
              <div className="control">
                <input className="input" type="text" placeholder="User ID" />
              </div>
            </div>

            <div className="field mb-4">
              <div className="control">
                <input className="input" type="text" placeholder="E-mail" />
              </div>
            </div>

            <div className="field mb-4">
              <div className="control">
                <input className="input" type="text" placeholder="Password" />
              </div>
            </div>

            <div className="field mb-4">
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Confirm Password"
                />
              </div>
            </div>

            <div className="grouped">
              <div className="control">
                <button className="button is-dark is-fullwidth mb-2">
                  Sign-up
                </button>
              </div>
              <div className="control">
                <button className="button is-link is-light is-fullwidth mb-5">
                  <Link to={"/"}>Cancel</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
