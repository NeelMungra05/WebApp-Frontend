import React, { useState, useEffect } from "react";
import FileList from "../FileList/FileList";
import Spinner from "../Spinner/Spinner";
import styles from "./FileUpload.module.css";
import { fileAction } from "../../store/files";
import { useSelector, useDispatch } from "react-redux";
import { extractFilenameFromPath } from "../../Utility/getFileName";

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
    if (selectedFiles.includes(fileName)) {
      removeFileHandler(fileName);
    } else {
      addFetchedFiles(fileName);
    }
  };

  const addFetchedFiles = (fileName) => {
    setSelectedFiles((prevSelectedFiles) => [...prevSelectedFiles, fileName]);

    const selectedFile = fetchedFiles.find((file) => file.name === fileName);

    if (selectedFile) {
      const fileToAdd = {
        name: selectedFile.name,
        size: selectedFile.size,
      };

      if (isSource) {
        dispatch(fileAction.addSourceFile([fileToAdd]));
      } else {
        dispatch(fileAction.addTargetFile([fileToAdd]));
      }
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
            {fetchedFiles.map((file) => (
              <div className={styles.uploadBox__file} key={file.name}>
                <input
                  className={styles.uploadBox__checkbox}
                  type="checkbox"
                  checked={selectedFiles.includes(file.name)}
                  onChange={() => toggleFileSelection(file.name)}
                />
                <span className={styles.uploadBox__filename}>
                  {extractFilenameFromPath(file.name)}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      {files && <FileList files={files} onRemove={removeFileHandler} />}
    </>
  );
};

export default FileUpload;
