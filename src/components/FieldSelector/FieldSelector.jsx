import React from "react";
import FieldBox from "../FieldBox/FieldBox";
import styles from "./FieldSelector.module.css";
import { useSelector } from "react-redux";

const FieldSelector = () => {
  const sourceField = useSelector((state) => state.fields.sourceFields);

  const content = sourceField.map((data, idx) => (
    <FieldBox
      fileName={data.name}
      fields={data.result}
      id={idx}
      key={`${idx}${data.name}`}
    />
  ));

  return (
    <article>
      <h3>Source Field Selection</h3>
      <div className={styles.container}>{content}</div>
    </article>
  );
};

export default FieldSelector;
