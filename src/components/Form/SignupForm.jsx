import React from "react";
import { useState } from "react";

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
        <div>
          <label htmlFor="">Username </label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">Email</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input type="password" />
        </div>
        <div>
          <label htmlFor="">Confirm Password</label>
          <input type="password" />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      <p>
        Already registered? Then <a href="">Login Here</a>
      </p>
    </>
  );
};

export default SignupForm;
