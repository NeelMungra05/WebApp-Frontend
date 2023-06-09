import React from "react";
import { useRef } from "react";
import styles from "./Forms.module.css";
import Input from "../UI/Input";

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
    <div className={styles.container}>
      <form className={styles.form} action="">
        <Input
          label="Username :"
          ref={usernameInputRef}
          input={{
            id: "username",
            type: "text",
          }}
        />
        <Input
          label="Password :"
          ref={passwordInputRef}
          input={{
            id: "password",
            type: "password",
          }}
        />
        <button
          className={styles.button}
          onClick={loginButtonHandler}
          type="submit"
        >
          Login
        </button>
      </form>
      <div>
        <p>
          Not Registered ! <a href="">Register here</a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
