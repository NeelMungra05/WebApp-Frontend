import React from "react";

const Forms = () => {
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

export default Forms;
