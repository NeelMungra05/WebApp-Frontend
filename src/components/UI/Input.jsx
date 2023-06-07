import React from "react";

const Input = React.forwardRef((props, ref) => {
  return (
    <div>
      <label htmlFor="">Username </label>
      <input type="text" />
    </div>
  );
});

export default Input;
