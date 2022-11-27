import "./social-container.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";
export const Footer = () =>{
    return(
        <footer class="footer has-background-grey-light">
        <div class="content has-text-centered ">
        <table class="table table is-hoverable has-background-grey-light">
        
        <tr >
          <th>Apps</th>
          <th>Partners</th>
          <th>Resources</th>
          <th>About</th>
        </tr>
        <tr>
              
          <td><a href="#"  class="has-text-light" >Mobile Apps</a></td>
          <td><a href="#"  class="has-text-light">Google Worspace Intergration</a></td>
          <td><a href="#"  class="has-text-light">Microsoft Office 365 Intergration</a></td>
          <td><a href="#"  class="has-text-light">Apps for Apple Watch</a></td>
        </tr>
           
        <tr>
              
          <td><a href="#"  class="has-text-light">Hosting Providers</a></td>
          <td><a href="#"  class="has-text-light">Partners</a></td>
          <td><a href="#"  class="has-text-light">Affiliate Program</a></td>
          <td><a href="#"  class="has-text-light">Zoho for Startupss</a></td>
             
        </tr>
              
        <tr>
            
          <td><a href="#"  class="has-text-light">Zia</a></td>
          <td><a href="#"  class="has-text-light">Support</a></td>
          <td><a href="#"  class="has-text-light">Community</a></td>
          <td><a href="#"  class="has-text-light">Forms</a></td>
              
        </tr>
            
          <tr>
            
            <td><a href="#"  class="has-text-light">About Attendy</a></td>
            <td><a href="#"  class="has-text-light">Privacy Commitments</a></td>
            <td><a href="#"  class="has-text-light">Privacy Commitments</a></td>
            <td><a href="#"  class="has-text-light">Events</a></td>
              
            </tr>
           
          </table>
      
        </div>
         
        <div class ="social-container has-text-centered has-text-white">
          <p>
          <h2><strong>Get connected with us on social networks!</strong></h2></p><br></br>
          </div>
          <div class="social has-text-centered">
     
      <a href="https://www.youtube.com/c/jamesqquick"
        className="youtube social">
        <FontAwesomeIcon icon={faYoutube} size="2x" />
      </a>
      <a href="https://www.facebook.com/learnbuildteach/"
        className="facebook social">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="https://www.twitter.com/jamesqquick" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a href="https://www.instagram.com/learnbuildteach"
        className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      </div>
      
      <p><h3><b>Contact Us</b></h3>
      <h4>E-mail:attendy123@gmail.com</h4>
      <h4>Tel No:0340365128</h4>
      <h4>Fax No:0112457656</h4></p><br></br>
      <p><h6><center>© 2022, Attendy. All Rights Reserved. Privacy Policy</center></h6></p>
      
      </footer>
    )
}