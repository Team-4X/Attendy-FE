import "bulma/css/bulma.min.css";

export const Example01 = () => {
  return (
    <div>
      <h1 className="has-text-warning">Hello!</h1>
      <h2 className="has-text-danger">This is example01!</h2>

      <div className="navbar">
        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
            <a class="navbar-item">Home</a>

            <a class="navbar-item">Documentation</a>

            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">More</a>

              <div class="navbar-dropdown">
                <a class="navbar-item">About</a>
                <a class="navbar-item">Jobs</a>
                <a class="navbar-item">Contact</a>
                <a class="navbar-item">Report an issue</a>
              </div>
            </div>
          </div>

          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <a class="button is-primary">
                  <strong>Sign up</strong>
                </a>
                <a class="button is-light">Log in</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
