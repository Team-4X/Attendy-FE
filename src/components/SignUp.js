import React from "react";
import "bulma/css/bulma.min.css";

export const SignUp = () => {
    return (

      <div className="signform">
        <h1 className="title is-1">WELCOME ATTENDY</h1>
        <h2 className="title is-1">Let's get you started!</h2>  

        <div class="columns">
            <div class="column is-half">
                <label class="label">First Name</label>
                <div class="control">
                    <input class="input" type="text" placeholder="Text input"/>
                </div>    
            </div>
        </div>

        <div class="field">
            <label class="label">Last Name</label>
            <div class="control">
                <input class="input" type="text" placeholder="Text input"/>
            </div>
        </div>

        <div class="field">
            <label class="label">User ID</label>
            <div class="control">
                <input class="input" type="text" placeholder="Text input"/>
            </div>
        </div>

        <div class="field">
            <label class="label">Last Name</label>
            <div class="control">
                <input class="input" type="text" placeholder="Text input"/>
            </div>
        </div>

        <div class="field">
            <label class="label">E-mail</label>
            <div class="control">
                <input class="input" type="text" placeholder="Text input"/>
            </div>
        </div>

        <div class="field">
            <label class="label">Password</label>
            <div class="control">
                <input class="input" type="text" placeholder="Text input"/>
            </div>
        </div>

        <div class="field">
            <label class="label">Confirm Password</label>
            <div class="control">
                <input class="input" type="text" placeholder="Text input"/>
            </div>
        </div>

        <div class="grouped">
            <div class="control">
                <button class="button is-link">Sign-up</button>
            </div>
            <div class="control">
                <button class="button is-link is-light">Cancel</button>
            </div>
        </div>

      </div>  
    )
}

