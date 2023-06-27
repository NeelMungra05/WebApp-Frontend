import React from "react";
import FieldBox from "../FieldBox/FieldBox";
import styles from "./FieldSelector.module.css";
import { useSelector } from "react-redux";

const FieldSelector = (props) => {
  let typeOfField;

  const { type, heading } = props;

  if (type === "source") {
    typeOfField = useSelector((state) => state.fields.sourceFields);
  } else {
    typeOfField = useSelector((state) => state.fields.targetFields);
  }

  const content = typeOfField.map((data, idx) => (
    <FieldBox
      fileName={data.name}
      fields={data.result}
      id={idx}
      key={`${idx}${data.name}`}
    />
  ));

  return (
    <article>
      <h3>{heading}</h3>
      <div className={styles.container}>{content}</div>
    </article>
  );
};

export default FieldSelector;
