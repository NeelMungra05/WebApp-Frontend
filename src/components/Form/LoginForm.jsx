import React from "react";
import { useRef } from "react";
import Input from "../UI/Input";
import './Form.css'

const LoginForm = (props) => {
  const usernameInputRef = useRef();
  const passwordInputRef = useRef();

  const loginButtonHandler = (e) => {
    e.preventDefault();

    const username = usernameInputRef.current.value;
    const password = passwordInputRef.current.value;

    props.loginHandler({
      username,
      password,
    });
  };

  return (
  <>
    <section>
      <div className="form-box-login">
        <div className="form-value">
          <form action="">
            <h2>Login</h2>
            <div className="inputbox">
            <i class="fa fa-user" aria-hidden="true"></i>
              <input
                placeholder=" "
                type="text"
                ref={usernameInputRef}
              />
              <label for="">Username</label>
            </div>
            <div className="inputbox">
            <i class="fa fa-key" aria-hidden="true"></i>
              <input
                placeholder=" "
                type="password"
                ref={passwordInputRef}
              />
              <label for="">Password</label>
            </div>
            <button onClick={loginButtonHandler} type="submit">
              Login
            </button>
            <div className="linkButton">
              <p>Don't have a account <a href="">Register here</a></p>
            </div>
          </form>
        </div>
      </div>
    </section>
  </>
  );
};

export default LoginForm;
