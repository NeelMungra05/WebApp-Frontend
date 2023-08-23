import React, { useState, useEffect } from "react";
import FileList from "../FileList/FileList";
import Spinner from "../Spinner/Spinner";
import styles from "./FileUpload.module.css";
import { fileAction } from "../../store/files";
import { useSelector, useDispatch } from "react-redux";

const FileUpload = (props) => {
  const { heading, isSource = true } = props;
  const [fetchedFiles, setFetchedFiles] = useState([]);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const files = useSelector((state) =>
    isSource ? state.files.sourceFile : state.files.targetFile
  );

  const dispatch = useDispatch();

  const fetchFiles = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setFetchedFiles(data.files);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching files:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const url = isSource
      ? "http://127.0.0.1:8000/files/list/source/"
      : "http://127.0.0.1:8000/files/list/target/";
    fetchFiles(url);
  }, [isSource]);

  const toggleFileSelection = (fileName) => {
    setSelectedFiles((prevSelectedFiles) =>
      prevSelectedFiles.includes(fileName)
        ? prevSelectedFiles.filter((file) => file !== fileName)
        : [...prevSelectedFiles, fileName]
    );
  };

  const addFetchedFiles = () => {
    const filesToAdd = selectedFiles.map((file) => ({
      name: file,
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
    setSelectedFiles((prevSelectedFiles) =>
      prevSelectedFiles.filter((file) => file !== fileName)
    );

    if (isSource) {
      dispatch(fileAction.removeSourceFile(fileName));
    } else {
      dispatch(fileAction.removeTargetFile(fileName));
    }
  };

  return (
    <>
      <div className={styles.section__header}>{heading}</div>
      <div className={styles.uploadBox}>
        {isLoading ? (
          <Spinner />
        ) : (
          <div className={`${styles.uploadBox__input} `}>
            {fetchedFiles.map((fileName) => (
              <div className={styles.uploadBox__file} key={fileName}>
                <input
                  className={styles.uploadBox__checkbox}
                  type="checkbox"
                  checked={selectedFiles.includes(fileName)}
                  onChange={() => toggleFileSelection(fileName)}
                />
                <span className={styles.uploadBox__filename}>{fileName}</span>
              </div>
            ))}
          </div>
        )}
      </div>
      <button
        type="button"
        className={styles.uploadBox__button}
        onClick={addFetchedFiles}>
        <span>Choose files</span>
      </button>

      {files && <FileList files={files} onRemove={removeFileHandler} />}
    </>
  );
};

export default FileUpload;
