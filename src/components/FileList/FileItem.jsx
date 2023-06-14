import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/fontawesome-free-solid";
import React from "react";

const FileItem = (props) => {
  return (
    <li>
      <span>{props.name}</span>
      <FontAwesomeIcon icon={faTrash} />
    </li>
  );
};

export default FileItem;
