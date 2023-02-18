import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./assets/Footer.css";

export const Footer = () => {
  return (
    <footer class="footer mx-2 mt-5">

      <div id="footer-cols">
        <div className="columns">
          <div className="column">
            <h4 className="title is-5">Customer Support</h4>
            <p><a href="#">
              <Link to="/contact" className="has-text-dark">
                Write us a message ✍
              </Link></a></p>
          </div>
          <div className="column">
            <h4 className="title is-5">Legal</h4>
            <p>
              <a href="#">
                <Link to="/privacy-policy" className="has-text-dark">
                  Privacy Policy 📜
                </Link>
              </a>
            </p>
          </div>
          <div className="column">
            <h4 className="title is-5">About Us</h4>
            <p><a href="#">
              <Link to="/about" className="has-text-dark">About Page</Link>
            </a></p>
          </div>
        </div>
      </div>

        <div className="columns">
          <div className="column">
            <p className="has-text-centered pt-5">
              Made with ❤️ by TEAM 4X
            </p>
            <p className="is-italic has-text-centered">
            © 2023 Attendy, Inc.
            </p>
          </div>
        </div>

    </footer>
  );
};
