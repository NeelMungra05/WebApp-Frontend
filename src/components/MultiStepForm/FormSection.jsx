import React from "react";

const FormSection = (props) => {
   const { currentStep, defaultStep, className, activeClassName } = props;

   let style = className;

   if (currentStep === defaultStep) {
     style = `${className} ${activeClassName}`;
   }

   return <section className={style}>{props.children}</section>;
};

export default FormSection;
