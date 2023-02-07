import { NavBar } from "./NavBar";
import { Footer } from "./Footer";
import { Link } from "react-router-dom";

import "./ContactUs.css";
import image from "../assets/staff.jpg";

export const ContactUs = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div className="m-5">
        <h1 className="title is-1 has-text-centered">Contact Us</h1>
        <form>
          <img src={image}></img>
          <div className="field">
            <div className="control">
              <input
                class="input"
                type="email"
                placeholder="Your email"
                name="email"
              ></input>
            </div>
          </div>
          <div className="field">
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="heading"
                name="heading"
              ></input>
            </div>
          </div>
          <div className="field">
            <div className="control">
              <textarea
                className="textarea"
                placeholder="Your message"
                name="messageBody"
              ></textarea>
            </div>
          </div>
          <button className="button is-primary is-fullwidth">Send</button>
        </form>
      </div>
      <Footer></Footer>
    </div>
  );
};
