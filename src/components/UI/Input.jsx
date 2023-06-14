import React from "react";
import styles from "./input.module.css";

const Input = React.forwardRef((props, ref) => {
  let content = <>
  <label htmlFor={props.input.id} >{props.label}</label>
  <input {...props.input} ref={ref} /></>
  
  if (props.reverse !== undefined){
    content = <>
      <input {...props.input} ref={ref} />
      <label htmlFor={props.input.id} >{props.label}</label>
  </>
  }
  return (
    <div className={styles.input}>
      {content}
    </div>
  );
});

export default Input;
