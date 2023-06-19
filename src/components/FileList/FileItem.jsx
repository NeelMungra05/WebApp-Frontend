import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt, faXmark } from "@fortawesome/free-solid-svg-icons";
import styles from "./FileItem.module.css";
import { fileAction } from "../../store/files";
import { useSelector, useDispatch } from "react-redux";

const FileItem = (props) => {
  const deleteClickHandler = () => {
    props.onRemove(props.name);
  };

  return (
    <section className={styles.uploaded_area}>
      <li className={styles.row}>
        <div className={styles.contents}>
          <FontAwesomeIcon className={styles.fileicon} icon={faFileAlt} />
          <div className={styles.details}>
            <span className={styles.img_name}>{props.name}</span>
            <span className={styles.size}>{props.size} KB</span>
          </div>
        </div>
        <FontAwesomeIcon
          className={styles.delete_icon}
          icon={faXmark}
          onClick={deleteClickHandler}
        />
      </li>
    </section>
  );
};

export default FileItem;
