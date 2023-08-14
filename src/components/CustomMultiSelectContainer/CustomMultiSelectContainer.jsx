import React from "react";
import CustomMultiselect from "../customMultiselect/customMultiselect";
import styles from "./CustomMultiSelectContainer.module.css";

const CustomMultiSelectContainer = ({
  title,
  options,
  onAddFields,
  isLeft,
}) => {
  return (
    <div className={styles.dropdownContainer}>
      <div className={styles.dropdownHeading}>
        <h2>Source {title}</h2>
      </div>
      <CustomMultiselect
        className={styles.joinselect}
        options={options}
        placeholder={`${isLeft ? "Source" : "Target"}${title}`}
        onAddFields={onAddFields}
        isLeft={isLeft}
      />
    </div>
  );
};

export default CustomMultiSelectContainer;
