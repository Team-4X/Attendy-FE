import "./login-content.css";
import { Link } from "react-router-dom";
import image from "../assets/working-together.jpg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
import { useDispatch } from "react-redux";
import {setUser} from "../store/auth.js";

export const Login = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState(" ");

  const handleCancel = () => {
    navigate("/");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const form = {
      username: data.get("userID"),
      password: data.get("password"),
    };

    const res = await fetch(`${process.env.REACT_APP_API_URL}/auth/login`, {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "content-type": "application/json",
      },
    });

    const {token, user} = await res.json();

    if(res.ok) {
      Cookies.set('token', token);
      dispatch(setUser(user));
      navigate('/');
    } else {
      setErrorMessage("Check your credentials!");
    }

  };

  return (
    <div className="container mt-5 is-max-desktop">
      <div className="columns is-centered">
        <div className="column is-half  ">
          <h1 className="title has-text-centered">Attendy Welcomes You!</h1>

          <h1 className="subtitle  has-text-centered">Let's get you logged in.</h1>

          <div className="has-text-centered">
            <img
              // src="3255337.jpg"
              src={image}
              alt="login"
              className="image-size"
              width="350px"
            />

            <form onSubmit={handleSubmit}>
              <input
                className="input mb-3 "
                type="text"
                placeholder="User ID "
                name="userID"
              ></input>
              <br></br>
              <input
                className="input mb-3 "
                type="password"
                placeholder="Password"
                name="password"
              ></input>
              <br></br>

              <p className="has-text-danger mb-1">{ errorMessage }</p>

              <button type="submit" className="button is-dark">
                Login
              </button>
              <br></br>
              <button
                type="button"
                className="button is-link my-2"
                onClick={handleCancel}
              >
                Cancel
              </button>
              <br></br>
              <span>
                <a href="#" className="has-text-dark">
                  <Link to={"/auth/register"}>
                    <span className="has-text-grey">Create an account?</span>
                  </Link>
                </a>
              </span>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
