import "./login-content.css";
import { Link } from "react-router-dom";
import image from "../assets/working-together.jpg";
// import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';

export const Login = () => {
  // const [data, setData] = useState();
  // const [name, setName] = useState();
  //
  const navigate = useNavigate();
  //
  // const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     fetch('http://localhost:4000/test')
  //         .then((response) => {
  //             return response.json();
  //         })
  //         .then((json) => {
  //             setData(json);
  //             console.log(json[0]);
  //             setName(json[0].name);
  //         });
  // }

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

    const {token} = await res.json();

    if(res.ok) {
      Cookies.set('token', token);
      navigate('/');
    }
  };

  return (
    <div class="container mt-5 is-max-desktop">
      <div class="columns is-centered">
        <div class="column is-half  ">
          <h1 class="title has-text-centered">Attendy Welcomes You!</h1>

          <h1 class="subtitle  has-text-centered">Let's get you logged in.</h1>

          <div class="has-text-centered">
            <img
              // src="3255337.jpg"
              src={image}
              alt="login"
              className="image-size"
              width="350px"
            />

            <form onSubmit={handleSubmit}>
              <input
                class="input mb-3 "
                type="text"
                placeholder="User ID "
                name="userID"
              ></input>
              <br></br>
              <input
                class="input mb-3 "
                type="password"
                placeholder="Password"
                name="password"
              ></input>
              <br></br>
              <button type="submit" class="button is-dark">
                Login
              </button>
              <br></br>
              <button
                type="button"
                class="button is-link my-2"
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
