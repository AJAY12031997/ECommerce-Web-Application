import { useState } from "react";
import { login } from "../../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import "./login.css"
import { Close } from "@material-ui/icons";

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };
  return (props.trigger) ? (
    <div className="popupr">
      <div className="popup-innerr">
        <button onClick={() => props.setTrigger(false)} className="close-btn"><Close/></button>
        {props.children}
        <div className="login-container">
          <div className="login-wrapper">
            <h1 className="login-title">SIGN IN</h1>
            <form>
              <input
                placeholder="username"
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                placeholder="password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button onClick={handleClick} disabled={isFetching}>
                LOGIN
              </button>
              {/* {error && <span className="error">Something went wrong...</span>} */}
              <a className="login-link">DO NOT YOU REMEMBER THE PASSWORD?</a>
              <a className="login-link">CREATE A NEW ACCOUNT</a>
            </form>
          </div>
        </div>
      </div></div>
  ) : "";
};

export default Login;