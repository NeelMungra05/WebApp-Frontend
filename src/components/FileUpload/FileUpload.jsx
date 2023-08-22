import React, { useState } from "react";
import FileList from "../FileList/FileList";
import styles from "./FileUpload.module.css";
import { fileAction } from "../../store/files";
import { useSelector, useDispatch } from "react-redux";

const FileUpload = (props) => {
  const { heading, isSource = true } = props;
  const dummyFileNames = ["file1.xlsx", "file2.xlsx", "file3.xlsx"];
  const [dummyFiles, setDummyFiles] = useState(
    dummyFileNames.map((name) => ({ name, checked: false }))
  );
  const files = useSelector((state) =>
    isSource ? state.files.sourceFile : state.files.targetFile
  );

  const dispatch = useDispatch();

  const toggleDummyFile = (fileName) => {
    const updatedFiles = dummyFiles.map((file) =>
      file.name === fileName ? { ...file, checked: !file.checked } : file
    );
    setDummyFiles(updatedFiles);
  };

  const addDummyFiles = () => {
    const selectedFiles = dummyFiles.filter((file) => file.checked);
    const filesToAdd = selectedFiles.map((file) => ({
      name: file.name,
      lastModified: Date.now(),
      size: 0,
    }));

    if (isSource) {
      dispatch(fileAction.addSourceFile(filesToAdd));
    } else {
      dispatch(fileAction.addTargetFile(filesToAdd));
    }
  };

  const removeFileHandler = (fileName) => {
    if (isSource) {
      dispatch(fileAction.removeSourceFile(fileName));
    } else {
      dispatch(fileAction.removeTargetFile(fileName));
    }
    const updatedFiles = dummyFiles.map((file) =>
      file.name === fileName ? { ...file, checked: false } : file
    );
    setDummyFiles(updatedFiles);
  };

  return (
    <>
      <div className={styles.section__header}>{heading}</div>
      <div className={styles.uploadBox}>
        <div className={`${styles.uploadBox__input} `}>
          {dummyFiles.map((file) => (
            <div key={file.name}>
              <input
                type="checkbox"
                checked={file.checked}
                onChange={() => toggleDummyFile(file.name)}
              />
              <span>{file.name}</span>
            </div>
          ))}
        </div>
      </div>
      <button
        type="button"
        className={styles.uploadBox__button}
        onClick={addDummyFiles}>
        <span>Choose files</span>
      </button>

      {files && <FileList files={files} onRemove={removeFileHandler} />}
    </>
  );
};

export default FileUpload;
