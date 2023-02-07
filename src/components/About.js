import { NavBar } from "./NavBar";
import { Footer } from "./Footer";

export const About = () => {
  return (
    <>
      <NavBar></NavBar>
      <div class="tile is-parent">
        <article class="tile is-child">
          <div class="columns ">
            <div class="column">
              <p class="title has-text-centered mt-5">About Us</p>
              <p class="subtitle has-text-centered">Attendy</p>
              <div class="content">
                <p class="has-text-centered has-text-black-ter">
                  We can proudly say about <b>Attendy</b> because we have the
                  features to collaborate with every organization to implement
                  attendance
                  <i>
                    Unlimited user access, managing capability, proper
                    authentication methods{" "}
                  </i>
                  <br></br>
                  You can have a better experience using us..!
                </p>
              </div>
            </div>
            <div class="column">
              <img
                src="3255337.jpg"
                alt="login"
                className="image-size"
                width="350px"
              />
            </div>
          </div>
        </article>
      </div>
      <Footer />
    </>
  );
};
