import React from "react";
import { useRef } from "react";
import Input from "../UI/Input";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faUser,faKey,faCheck } from '@fortawesome/free-solid-svg-icons'
// import "./Form.css"

const SignupForm = (props) => {
  const usernameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const confirmPasswordInputRef = useRef();

  const formSubmitHandler = (e) => {
    e.preventDefault();

    const username = usernameInputRef.current.value;
    const password = passwordInputRef.current.value;
    const email = emailInputRef.current.value;
    const confirmPassword = confirmPasswordInputRef.current.value;

    props.registerHandler({
      username,
      email,
      password,
      confirmPassword,
    });
  };

  return (
    <>
      <section>
        <div className="form-box-register">
          <div className="form-value">
            <form action="">
              <h2>Register</h2>
              <div className="inputbox">
              <FontAwesomeIcon className="font-awesome" icon={faEnvelope} />
                <input
                  placeholder=" "
                  type="email"
                  ref={emailInputRef}
                />
                  <label for="">Email</label>
              </div>
              <div className="inputbox">
              <FontAwesomeIcon className="font-awesome" icon={faUser} />
                <input
                  placeholder=" "
                  type="text"
                  ref={usernameInputRef}
                />
                  <label for="">Username</label>
              </div>
              <div className="inputbox">
              <FontAwesomeIcon className="font-awesome" icon={faKey} />
                <input
                  placeholder=" "
                  type="password"
                  ref={passwordInputRef}
                />
                  <label for="">Password</label>
              </div>
              <div className="inputbox">
              <FontAwesomeIcon className="font-awesome" icon={faCheck} />
                <input
                  placeholder=" "
                  type="password"
                  ref={confirmPasswordInputRef}
                />
                  <label for="">Confirm Password</label>
              </div>
              <button onClick={formSubmitHandler} type="submit">
                Register
              </button>
              <div className="linkButton">
              <p>Already have an account? <a href="">Login</a></p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignupForm;
