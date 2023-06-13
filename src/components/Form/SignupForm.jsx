import React from "react";
import { useRef } from "react";
import Input from "../UI/Input";

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
      <form action="">
        <Input
          ref={emailInputRef}
          label="Email"
          input={{
            id: "email",
            type: "email",
          }}
        />
        <Input
          ref={usernameInputRef}
          label="Username"
          input={{
            id: "username",
            type: "text",
          }}
        />
        <Input
          ref={passwordInputRef}
          label="Password"
          input={{
            id: "password",
            type: "password",
          }}
        />
        <Input
          ref={confirmPasswordInputRef}
          label="Confirm Password"
          input={{
            id: "confirmPassword",
            type: "password",
          }}
        />

        <button onClick={formSubmitHandler} type="submit">
          Register
        </button>
      </form>
      <p>
        Already registered? Then <a href="">Login Here</a>
      </p>
    </>
  );
};

export default SignupForm;
