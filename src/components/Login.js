import "./login-content.css";
import { Link } from "react-router-dom";
import image from "../assets/working-together.jpg";
import { useState } from "react";

export const Login = () => {
    const [data, setData] = useState();
    const [name, setName] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();
        fetch('http://localhost:4000/test')
            .then((response) => {
                return response.json();
            })
            .then((json) => {
                setData(json);
                console.log(json[0]);
                setName(json[0].name);
            });
    }
    // const handleSubmit = async (e) => {
    //   e.preventDefault();
    //   const data = new FormData(e.currentTarget);
    //   const form = {
    //     userID: data.get('userID'),
    //     password: data.get('password'),
    //   };
    //   console.log('runs login post');
    //   const res = await fetch('http://localhost:4000/auth/login', {
    //     method: "POST",
    //     body: JSON.stringify(form),
    //     headers: {
    //       "content-type": "application/json",
    //     },
    //   })
    //   console.log('runs login post');
    //   console.log(res);
    // };

    return (
        <div class="container mt-5 is-max-desktop">
            <div class="columns is-centered">
                <div class="column is-half  ">
                    <h1 class="title has-text-centered">Attendy Welcomes You!</h1>

                    <h1 class="subtitle  has-text-centered">Let's get you logged in.</h1>
                    <h1>{name}</h1>

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
                            <button class="button is-dark">Login</button>
                            <br></br>
                            <span>
                                <a href="#">
                                    <Link to={"/auth/register"}>Create an account?</Link>
                                </a>
                            </span>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
