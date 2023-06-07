import React from "react";
import Input from "../UI/Input";

const LoginForm = () => {
  return (
    <>
      <form action="">
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
      </form>
      <p>
        Not Registered ! <a href="">Register here</a>
      </p>
    </>
  );
};

export default LoginForm;
