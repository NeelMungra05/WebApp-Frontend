import React from "react";
import FieldBox from "../FieldBox/FieldBox";
import styles from "./FieldSelector.module.css";

const FieldSelector = () => {
  return (
    <article>
      <h3>Source Field Selection</h3>
      <div className={styles.container}>
        <FieldBox />
        <FieldBox />
        <FieldBox />
        <FieldBox />
        <FieldBox />
      </div>
    </article>
  );
};

export default FieldSelector;
