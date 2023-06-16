import React from "react";
import FileItem from "./FileItem";
import styles from "./FileList.module.css";

const FileList = (props) => {
  const { files } = props;

  console.log(files);

  const content = files.map((file) => (
    <FileItem
      name={file.name}
      onRemove={props.onRemove}
      size={(file.size / 1024).toFixed(0)}
    />
  ));

  return <div className={styles.wrapper}>{content}</div>;
};

export default FileList;
