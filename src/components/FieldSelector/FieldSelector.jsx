import React from "react";
import FieldBox from "../FieldBox/FieldBox";
import styles from "./FieldSelector.module.css";
import { useSelector } from "react-redux";
import useFieldSelectValidation from "../../hooks/useFieldSelectValidation";

const FieldSelector = (props) => {
  const { type, heading } = props;

  const typeOfField = useSelector((state) =>
    type === "source" ? state.fields.sourceFields : state.fields.targetFields
  );

  const content = Object.keys(typeOfField).map((data, idx) => (
    <FieldBox fileName={data} id={idx} key={`${idx}${data}`} type={type} />
  ));

  return (
    <article>
      <h3>{heading}</h3>
      <div className={styles.container}>{content}</div>
    </article>
  );
};

export default FieldSelector;
