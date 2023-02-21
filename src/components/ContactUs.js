import { NavBar } from "./NavBar";
import { Footer } from "./Footer";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./ContactUs.css";
import image from "../assets/staff.jpg";

export const ContactUs = () => {

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const form = {
      email: data.get('email'),
      heading: data.get('heading'),
      message: data.get('messageBody')
    };
    const res = await fetch(`${process.env.REACT_APP_API_URL}/contactus/sendMessage`, {
      method: 'POST',
      body: JSON.stringify(form),
      headers: {
        "content-type": "application/json",
      }
    }).then(navigate('/'));
  }

  return (
    <div>
      <NavBar></NavBar>
      <div className="m-5">
        <h1 className="title is-1 has-text-centered">Contact Us</h1>
        <form onSubmit={handleSubmit}>
          <img src={image}></img>
          <div className="field">
            <div className="control">
              <input
                className="input"
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
          <button type="submit" className="button is-primary is-fullwidth">Send</button>
        </form>
      </div>
      <Footer></Footer>
    </div>
  );
};
