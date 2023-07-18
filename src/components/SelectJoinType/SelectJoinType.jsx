import React from "react";
import styles from "../SelectJoinType/SelectJoinType.module.css";

const SelectJoinType = ({ onChange, disabled, joinTypes }) => {
  return (
    <select
      className={styles.joinTypeSelect}
      onChange={onChange}
      disabled={disabled}
    >
      <option value="">Select Join Type</option>
      {joinTypes.map((joinType, index) => (
        <option key={index} value={joinType}>
          {joinType}
        </option>
      ))}
    </select>
  );
};

export default SelectJoinType;

