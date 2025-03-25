import "./register.css"
import { Close } from "@material-ui/icons";

const Register = (props) => {
  return (props.trigger) ? (
    <div className="popupr">
      <div className="popup-innerr">
        <button onClick={() => props.setTrigger(false)} className="close-btn"><Close/></button>
        {props.children}
        <div className="register-container">
          <div className="register-wrapper">
            <h1 className="register-title">CREATE AN ACCOUNT</h1>
            <form>
              <input placeholder="name" />
              <input placeholder="last name" />
              <input placeholder="username" />
              <input placeholder="email" />
              <input placeholder="password" />
              <input placeholder="confirm password" />
              <span className="agreement">
                By creating an account, I consent to the processing of my personal
                data in accordance with the <b>PRIVACY POLICY</b>
              </span>
              <button>CREATE</button>
            </form>
          </div>
        </div>
      </div>
    </div>) : "";
};

export default Register;
