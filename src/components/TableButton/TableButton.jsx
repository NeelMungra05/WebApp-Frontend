import React from "react";
import styles from "../TableButton/TableButton.module.css";
import { extractFilenameFromPath } from "../../Utility/getFileName";

const TableButton = ({ table, onClick, disabled }) => {
  return (
    <button
      className={styles.tableButton}
      onClick={onClick}
      disabled={disabled}>
      {extractFilenameFromPath(table)}
    </button>
  );
};

export default TableButton;
