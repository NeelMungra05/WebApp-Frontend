import React from "react";
import { useSelector } from "react-redux";
import CustomMultiselect from "../customMultiselect/customMultiselect";
import CustomMultiSelectContainer from "../CustomMultiSelectContainer/CustomMultiSelectContainer";
import styles from "./AllFieldSelector.module.css";

const AllFieldSelector = ({ title, fieldKey, onSelection }) => {
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
        <CustomMultiSelectContainer
          title={title}
          options={sourceFieldsWithKey}
          onAddFields={onSelection}
          isLeft={true}
        />
        <hr />
        <CustomMultiSelectContainer
          title={title}
          options={targetFieldsWithKey}
          onAddFields={onSelection}
          isLeft={false}
        />
      </div>
    </>
  );
};

export default AllFieldSelector;
