export const Login = () => {
  return (
    <div class="container mt-5 is-max-desktop">
      <div class="columns is-centered">
        <div class="column is-half  ">
          <h1 class="title has-text-centered">Attendy Welcomes You!</h1>

          <h1 class="subtitle  has-text-centered">Let's get you logged in.</h1>
          <br></br>
          <figure class="image is-2by1">
            <img src="https://bulma.io/images/placeholders/256x256.png" />
          </figure>
          <br></br>

          <input class="input mb-3 " type="text" placeholder="User ID "></input>
          <br></br>
          <input
            class="input mb-3 "
            type="password"
            placeholder="Password"
          ></input>
          <br></br>
          <button class="button is-medium is-fullwidth is-primary">
            Login
          </button>
          <br></br>
          <span>
            <a href="#">Create an account?</a>
          </span>
        </div>
      </div>
    </div>
  );
};
