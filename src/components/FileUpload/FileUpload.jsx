import React from "react";
import { AiOutlineFileText } from "react-icons/ai";
import { BsChevronDown, BsCloudArrowUp } from "react-icons/bs";
import FileList from "../FileList/FileList";
import Input from "../UI/Input";
import styles from "./FileUpload.module.css";
import { fileAction } from "../../store/files";
import { useSelector, useDispatch } from "react-redux";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/fontawesome-free-solid";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons';

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

  const fileChangeHandlerTwo = () => {
    fileInputRef.current.click();
  };

  return (
    <>
      <div className={styles.section__header}>{heading}</div>
      <div className={styles.uploadBox}>
        <div className={`${styles.uploadBox__input} `}>
          <FontAwesomeIcon icon={faArrowUp} className={styles.uploadIcon} />
          {/* <FontAwesomeIcon icon={faArrowUpFromBracket} className={styles.uploadIcon} /> */}
          <span>Drag and Drop here or </span>

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
        </div>
      </div>
      <button
        type="button"
        className={styles.uploadBox__button}
        onClick={fileChangeHandlerTwo}
      >
        {/* <AiOutlineFileText fontSize={20} /> */}
        <span>Choose files</span>
        {/* <BsChevronDown fontSize={20} /> */}
      </button>

      {files && <FileList files={files} onRemove={removeFileHandler} />}
    </>
  );
};

export default FileUpload;
