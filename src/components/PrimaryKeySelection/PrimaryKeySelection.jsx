import React from "react";
import { useSelector } from "react-redux";
import CustomMultiselect from "../customMultiselect/customMultiselect";
import styles from "./PrimaryKeySelection.module.css";

const PrimaryKeySelection = () => {
  const sourcepk = useSelector((state) => state.fields.sourceFields);
  const targetpk = useSelector((state) => state.fields.targetFields);

  const getFieldsWithPK = (files) => {
    return Object.values(files).reduce((fieldsWithPK, file) => {
      Object.entries(file).forEach(([fieldName, field]) => {
        if (field.PK) {
          fieldsWithPK.push(field.name);
        }
      });
      return fieldsWithPK;
    }, []);
  };

  const sourcefieldsWithPK = getFieldsWithPK(sourcepk);
  const targetfieldsWithPK = getFieldsWithPK(targetpk);

  return (
    <>
    <h3>Primary Key Selection</h3>
    <div className={styles.container}>
      <div className={styles.dropdownContainer}>
      <div className={styles.dropdownHeading}><h2>Source Primary Keys</h2></div>
        <CustomMultiselect
          className={styles.joinselect}
          options={sourcefieldsWithPK}
          placeholder="Source Primary Keys"
        />
      </div>
      <hr />
      <div className={styles.dropdownContainer}>
      <div className={styles.dropdownHeading}><h2>Target Primary Keys</h2></div>
        <CustomMultiselect
          className={styles.joinselect}
          options={targetfieldsWithPK}
          placeholder="Target Primary Keys"
        />
      </div>
    </div>
    </>
  );
};

export default PrimaryKeySelection;
