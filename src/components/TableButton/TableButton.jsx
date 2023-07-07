import React from "react";
import styles from "../TableButton/TableButton.module.css";

const TableButton = ({ table, onClick, disabled }) => {
  return (
    <button
      className={styles.tableButton}
      onClick={onClick}
      disabled={disabled}
    >
      {table}
    </button>
  );
};

export default TableButton;

