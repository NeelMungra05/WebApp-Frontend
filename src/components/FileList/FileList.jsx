import React from "react";
import FileItem from "./FileItem";
import styles from "./FileList.module.css";

const FileList = (props) => {
  const { files } = props;

  const content = files.map((file) => (
    <FileItem
      key={file.name}
      name={file.name}
      size={file.size}
      onRemove={props.onRemove}
    />
  ));

  return <div className={styles.wrapper}>{content}</div>;
};

export default FileList;
