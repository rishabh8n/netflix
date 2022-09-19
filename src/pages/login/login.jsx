import "./login.scss";

function Login() {
  return (
    <div className="login">
      <div className="top">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="logo"
          className="logo"
        />
      </div>
      <div className="main">
        <div className="sign-in">
          <h1>Sign In</h1>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Sign In</button>
          <div className="box">
            <label>
              <input type="checkbox" />
              <span class="checkmark"></span>
              Remember me
            </label>
            <a href="#">Need help?</a>
          </div>

          <p>
            New to Netflix? <a>Sign up now.</a>
          </p>
          <p className="captcha-text">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
