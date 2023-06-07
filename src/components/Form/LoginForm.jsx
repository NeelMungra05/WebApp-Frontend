import React from "react";
import { useRef } from "react";
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
    <>
      <form action="">
        <Input
          label="Username"
          ref={usernameInputRef}
          input={{
            id: "username",
            type: "text",
          }}
        />
        <Input
          label="Password"
          ref={passwordInputRef}
          input={{
            id: "password",
            type: "password",
          }}
        />
        <button onClick={loginButtonHandler} type="submit">
          Login
        </button>
      </form>
      <p>
        Not Registered ! <a href="">Register here</a>
      </p>
    </>
  );
};

export default LoginForm;
