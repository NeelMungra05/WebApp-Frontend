import React from "react";
import Input from "../UI/Input";
import styles from "./FileUpload.module.css";

const FileUpload = () => {
  return (
    <>
      <div className={styles.section__header}>Step 1</div>
      <div className={styles.section__input}>
        <Input
          label="Source file"
          input={{
            type: "file",
            multiple: true,
            accept: ".xlsx",
          }}
        />
      </div>
    </>
  );
};

export default FileUpload;
