import React from "react";

const FormSection = (props) => {
  const { className, activeClassName } = props;

  const style = `${className} ${activeClassName}`;

  return <section className={style}>{props.children}</section>;
};

export default FormSection;
