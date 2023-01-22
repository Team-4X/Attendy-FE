import "./social-container.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faGoogle,
  faGoodreads,
  faGooglePlus,
  faGooglePlay,
} from "@fortawesome/free-brands-svg-icons";
export const Footer = () => {
  return (
    <footer class="footer has-background-light">
      <div class="content mb-5">
        <table class="table table is-hoverable has-background-light">
          <tr>
            <th>Get Started</th>
            <th>About Us</th>
            <th>Support</th>
            <th>Legal</th>
          </tr>
          <tr>
            <td>
              <a href="#" class="has-text-dark">
                Home
              </a>
            </td>
            <td>
              <a href="#" class="has-text-dark">
                Company Information
              </a>
            </td>
            <td>
              <a href="#" class="has-text-dark">
                FAQ
              </a>
            </td>
            <td>
              <a href="#" class="has-text-dark">
                Terms of Service
              </a>
            </td>
          </tr>

          <tr>
            <td>
              <a href="#" class="has-text-dark">
                Sign Up
              </a>
            </td>
            <td>
              <a href="#" class="has-text-dark">
                <Link to="/contact" className="has-text-dark">Contact Us</Link>
              </a>
            </td>
            <td>
              <a href="#" class="has-text-dark">
                Help Desk
              </a>
            </td>
            <td>
              <a href="#" class="has-text-dark">
                Terms of Use
              </a>
            </td>
          </tr>

          <tr>
            <td>
              <a href="#" class="has-text-dark">
                Downloads
              </a>
            </td>
            <td>
              <a href="#" class="has-text-dark">
                Reviews
              </a>
            </td>
            <td>
              <a href="#" class="has-text-dark">
                Feature
              </a>
            </td>
            <td>
              <a href="#" class="has-text-dark">
                Privacy Policy
              </a>
            </td>
          </tr>
        </table>
        <div class="social has-text-centered">
          <strong>
            <center>Get Connected With Us On Social Networks!</center>
            <br></br>
          </strong>
          <a
            href="https://i.stack.imgur.com/WYaql.png"
            className="google social"
          >
            <FontAwesomeIcon icon={faGoogle} size="2x" />
          </a>
          <a
            href="https://www.youtube.com/c/jamesqquick"
            className="youtube social"
          >
            <FontAwesomeIcon icon={faYoutube} size="2x" />
          </a>
          <a
            href="https://www.facebook.com/learnbuildteach/"
            className="facebook social"
          >
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
        </div>
      </div>

      <center class="is-size-7">
        Attendy Home | Contact Us | Security | compliance | IPR compliance |
        Anti Spam Policy | Terms of Services | Privacy Policy | GDPR Compliance
        | Abuse Policy
      </center>
      <h6>
        <center class="is-size-7">
          © 2022, Attendy. All Rights Reserved. Privacy Policy
        </center>
      </h6>
    </footer>
  );
};
