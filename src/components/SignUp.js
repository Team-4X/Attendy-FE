import React from "react";
import "bulma/css/bulma.min.css";
import image from "./14230944_5437683.jpg"

export const SignUp = () => {
    return (

        <div class="container mt-5 is-max-desktop">
            <div class="columns is-centered">
                <div class="column is-half">
                    <h1 className="title is-1 has-text-centered">WELCOME ATTENDY</h1>
                    <h2 className="title is-2 has-text-centered">Let's get you started!</h2>

                    <div class="has-text-centered">

                    <img src={ image } alt="signUp" className="image is-4by2"/>

                        <div class="field mb-4">
                            <div class="control">
                                <input class="input" type="text" placeholder="First Name" />
                            </div>
                        </div>

                        <div class="field mb-4">
                            <div class="control">
                                <input class="input" type="text" placeholder="Last Name" />
                            </div>
                        </div>

                        <div class="field mb-4">
                            <div class="control">
                                <input class="input" type="text" placeholder="User ID" />
                            </div>
                        </div>

                        <div class="field mb-4">
                            <div class="control">
                                <input class="input" type="text" placeholder="E-mail" />
                            </div>
                        </div>

                        <div class="field mb-4">
                            <div class="control">
                                <input class="input" type="text" placeholder="Password" />
                            </div>
                        </div>

                        <div class="field mb-4">
                            <div class="control">
                                <input class="input" type="text" placeholder="Confirm Password" />
                            </div>
                        </div>

                        <div class="grouped">
                            <div class="control">
                                <button class="button is-dark is-fullwidth mb-2">Sign-up</button>
                            </div>
                            <div class="control">
                                <button class="button is-link is-light is-fullwidth mb-5">Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

