import React from "react";
import FileItem from "./FileItem";
import styles from "./FileList.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/fontawesome-free-solid";

const FileList = (props) => {
  const { files } = props;

  const content = files.map((file) => (
    <FileItem name={file.name} onRemove={props.onRemove} />
  ));

  return (
    <div className={styles.wrapper}>
      {/* <header>Source File Upload</header> */}
      <section className={styles.progress_area}>
        <li className={styles.row}>
          <FontAwesomeIcon className={styles.fileicon} icon="fas fa-file-alt" />
          <div className={styles.contents}>
            <div className={styles.details}>
              <span className={styles.img_name}>{content} Uploading</span>
              <span className={styles.percent}>50%</span>
            </div>
            <div className={styles.progress_bar}>
              <div className={styles.progress}></div>
            </div>
          </div>
        </li>
      </section>
      <section className={styles.uploaded_area}>
        <li className={styles.row}>
          <div className={styles.contents}>
            <FontAwesomeIcon
              className={styles.fileicon}
              icon="fas fa-file-alt"
            />
            <div className={styles.details}>
              <span className={styles.img_name}>{content} Uploaded</span>
              <span className={styles.size}>70KB</span>
            </div>
          </div>
          <FontAwesomeIcon className={styles.checkicon} icon={faCheck} />
        </li>
      </section>
    </div>
  );
};

export default FileList;
