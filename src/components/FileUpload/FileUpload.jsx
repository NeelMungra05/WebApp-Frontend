import React from "react";
import { AiOutlineFileText } from "react-icons/ai";
import { BsChevronDown, BsCloudArrowUp } from "react-icons/bs";
import FileList from "../FileList/FileList";
import Input from "../UI/Input";
import styles from "./FileUpload.module.css";
import { fileAction } from "../../store/files";
import { useSelector, useDispatch } from "react-redux";
import { useRef } from "react";

const FileUpload = (props) => {
  const { heading, isSource = true } = props;
  const files = useSelector((state) =>
    isSource ? state.files.sourceFile : state.files.targetFile
  );
  const fileInputRef = useRef(null);
  const dispatch = useDispatch();

  const removeFileHandler = (fileName) => {
    if (isSource) {
      dispatch(fileAction.removeSourceFile(fileName));
    } else {
      dispatch(fileAction.removeTargetFile(fileName));
    }
  };

  const fileChangeHandler = (e) => {
    e.preventDefault();

    if (isSource) {
      dispatch(fileAction.addSourceFile(e.target.files));
    } else {
      dispatch(fileAction.addTargetFile(e.target.files));
    }
    fileInputRef.current.value = null;
  };

  return (
    <>
      <div className={styles.section__header}>{heading}</div>
      <div className={styles.uploadBox}>
        <div className={`${styles.uploadBox__input} `}>
          <BsCloudArrowUp fontSize={64} />
          <Input
            label={props.label}
            ref={fileInputRef}
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

      {files && <FileList files={files} onRemove={removeFileHandler} />}
    </>
  );
};

export default FileUpload;
