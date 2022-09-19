import { ArrowForwardIos } from "@mui/icons-material";
import "./register.scss";

function Register() {
  return (
    <div className="register">
      <div className="top">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="logo"
          className="logo"
        />
        <button className="signin">Sign In</button>
      </div>
      <div className="main">
        <div className="center">
          <h1>Unlimited movies, TV shows and more.</h1>
          <h2>Watch anywhere. Cancel anytime.</h2>
          <p>
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <div className="mail">
            <input type="email" placeholder="Email address" />
            <button>
              Get Started <ArrowForwardIos className="ficon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
