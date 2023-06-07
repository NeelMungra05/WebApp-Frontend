import React from "react";
import { useState } from "react";
import Input from "../UI/Input";

const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(email, password);
  };

  return (
    <>
      <form action="">
        <Input
          label="Email"
          input={{
            id: "email",
            type: "email",
          }}
        />
        <Input
          label="Username"
          input={{
            id: "username",
            type: "text",
          }}
        />
        <Input
          label="Password"
          input={{
            id: "password",
            type: "password",
          }}
        />
        <Input
          label="Confirm Password"
          input={{
            id: "confirmPassword",
            type: "password",
          }}
        />
      </form>
      <p>
        Already registered? Then <a href="">Login Here</a>
      </p>
    </>
  );
};

export default SignupForm;
