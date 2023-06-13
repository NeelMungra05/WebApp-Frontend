import React from "react";
import { useRef } from "react";
import Input from "../UI/Input";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faKey } from '@fortawesome/free-solid-svg-icons'
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
            <FontAwesomeIcon className="font-awesome" icon={faUser} />
            <Input
              className='input'
              label={<label className="label">Username</label>}
              ref={usernameInputRef}
              input={{
              id: "username",
              type: "text",
              placeholder: " ",
              }}/>
            </div>
            <div className="inputbox">
            <FontAwesomeIcon className="font-awesome" icon={faKey} />
              <Input
              className='input'
              label={<label className="label">Password</label>}
              ref={passwordInputRef}
              input={{
              id: "password",
              type: "password",
              placeholder: " ",
              }}/>
            </div>
            <button onClick={loginButtonHandler} type="submit">
              Login
            </button>
            <div className="linkButton">
              <p>Don't have a account? <a href="">Register</a></p>
            </div>
          </form>
        </div>
      </div>
    </section>
  </>
  );
};

export default LoginForm;
