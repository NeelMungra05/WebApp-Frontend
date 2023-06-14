import React from "react";
import Input from "../UI/Input";
import styles from "./FileUpload.module.css";
import FileList from "../FileList/FileList";

const FileUpload = (props) => {
  const { files } = props;

  const fileChangeHandler = (e) => {
    e.preventDefault();
    props.onUpload(e.target.files);
  };

  return (
    <>
      <div className={styles.section__header}>Step 1</div>
      <div className={styles.section__input}>
        <Input
          label={props.label}
          input={{
            type: "file",
            multiple: true,
            onChange: fileChangeHandler,
            accept: props.accept,
          }}
        />
        {files && <FileList files={files} />}
      </div>
    </>
  );
};

export default FileUpload;
