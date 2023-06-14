import React from "react";
import { AiOutlineFileText } from "react-icons/ai";
import { BsChevronDown, BsCloudArrowUp } from "react-icons/bs";
import FileList from "../FileList/FileList";
import Input from "../UI/Input";
import styles from "./FileUpload.module.css";

const FileUpload = (props) => {
  const { files } = props;

  const fileChangeHandler = (e) => {
    e.preventDefault();
    props.onUpload(e.target.files);
  };

  return (
    <>
      <div className={styles.uploadBox}>
        <div className={`${styles.uploadBox__input} `}>
          <BsCloudArrowUp fontSize={64} />
          <Input
            label={props.label}
            input={{
              type: "file",
              multiple: true,
              onChange: fileChangeHandler,
              accept: props.accept,
              className: styles["uploadBox__input-box"],
            }}
          />
          <button type="button" className={styles.uploadBox__button}>
            <AiOutlineFileText fontSize={20} />
            <span>Choose files</span>
            <BsChevronDown fontSize={20} />
          </button>
        </div>
      </div>
      <div className={styles.section__header}>Step 1</div>
      {files && <FileList files={files} onRemove={props.onRemove} />}
    </>
  );
};

export default FileUpload;
