import { NavBar } from "./NavBar";
import { Footer } from "./Footer";

export const About = () => {
  return (
    <>
      <NavBar></NavBar>
      <div className="tile is-parent">
        <article className="tile is-child">
          <div className="columns ">
            <div className="column">
              <p className="title has-text-centered mt-5">About Us</p>
              <p className="subtitle has-text-centered">Attendy</p>
              <div className="content">
                <p className="has-text-centered has-text-black-ter">
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
            <div className="column">
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
