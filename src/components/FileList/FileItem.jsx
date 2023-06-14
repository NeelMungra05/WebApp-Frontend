import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/fontawesome-free-solid";
import React from "react";

const FileItem = (props) => {
  const deleteClickHandler = () => {
    props.onRemove(props.name);
  };

  return (
    <li>
      <span>{props.name}</span>
      <FontAwesomeIcon icon={faTrash} onClick={deleteClickHandler} />
    </li>
  );
};

export default FileItem;