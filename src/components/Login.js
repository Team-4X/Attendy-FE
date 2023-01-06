import "./login-content.css";
import { Link } from "react-router-dom";
export const Login = () => {
  return (
    <div class="container mt-5 is-max-desktop">
      <div class="columns is-centered">
        <div class="column is-half  ">
          <h1 class="title has-text-centered">Attendy Welcomes You!</h1>

          <h1 class="subtitle  has-text-centered">Let's get you logged in.</h1>

          <div class="has-text-centered">
            <img
              src="3255337.jpg"
              alt="login"
              className="image-size"
              width="350px"
            />

            <input
              class="input mb-3 "
              type="text"
              placeholder="User ID "
            ></input>
            <br></br>
            <input
              class="input mb-3 "
              type="password"
              placeholder="Password"
            ></input>
            <br></br>
            <button class="button is-dark">Login</button>
            <br></br>
            <span>
              <a href="#">
                <Link to={"/register"}>Create an account?</Link>
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
