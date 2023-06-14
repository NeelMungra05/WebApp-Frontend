import React from "react";
import { useRef } from "react";
import Input from "../UI/Input";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,faKey } from '@fortawesome/free-solid-svg-icons';
import styles from "./Form.module.css";

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
const registerHandler = (e) => {
  e.preventDefault();
  props.navbarStateChanger("register");
};

  return (
  <>
    <section>
      <div className={styles["form-box-login"]}>
        <div className={styles["form-value"]}>
          <form action="">
            <h2>Login</h2>
            <div className={styles.inputbox}>
            <FontAwesomeIcon className={styles["font-awesome"]} icon={faUser} />
            <Input
              label="Username"
              reverse={true}
              ref={usernameInputRef}
              input={{
                id: "username",
                type: "text",
                placeholder: " ",
                    }}/>
            </div>
            <div className={styles.inputbox}>
            <FontAwesomeIcon className={styles["font-awesome"]} icon={faKey} />
              <Input
              reverse={true}
              label="Password"
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
            <div className={styles.linkButton}>
              <p>Don't have a account? <a onClick={registerHandler} href="/register" >Register</a></p>
            </div>
          </form>
        </div>
      </div>
    </section>
  </>
  );
};

export default LoginForm;
