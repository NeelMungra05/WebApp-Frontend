import React from "react";
import { useSelector } from "react-redux";
import CustomMultiselect from "../customMultiselect/customMultiselect";
import styles from "./AllFieldSelector.module.css";

const AllFieldSelector = ({ title, fieldKey }) => {
  const sourcepk = useSelector((state) => state.fields.sourceFields);
  const targetpk = useSelector((state) => state.fields.targetFields);

  const getFieldsWithKey = (files, key) => {
    const fieldsWithKeySet = new Set();
    Object.values(files).forEach((file) => {
      Object.entries(file).forEach(([fieldName, field]) => {
        if (field[key]) {
          fieldsWithKeySet.add(field.name);
        }
      });
    });
    return Array.from(fieldsWithKeySet);
  };

  const sourceFieldsWithKey = getFieldsWithKey(sourcepk, fieldKey);
  const targetFieldsWithKey = getFieldsWithKey(targetpk, fieldKey);

  return (
    <>
      <h3>{title}</h3>
      <div className={styles.container}>
        <div className={styles.dropdownContainer}>
          <div className={styles.dropdownHeading}>
            <h2>Source {title}</h2>
          </div>
          <CustomMultiselect
            className={styles.joinselect}
            options={sourceFieldsWithKey}
            placeholder={`Source ${title}`}
          />
        </div>
        <hr />
        <div className={styles.dropdownContainer}>
          <div className={styles.dropdownHeading}>
            <h2>Target {title}</h2>
          </div>
          <CustomMultiselect
            className={styles.joinselect}
            options={targetFieldsWithKey}
            placeholder={`Target ${title}`}
          />
        </div>
      </div>
    </>
  );
};

export default AllFieldSelector;
