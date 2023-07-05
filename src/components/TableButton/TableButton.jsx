import React from "react";
import styles from "../TableButton/TableButton.module.css";

const TableButton = ({ table, isSelected, onClick, isLastSelected }) => {
  return (
    <button
      className={styles.tableButton}
      onClick={() => onClick(table)}
      disabled={isSelected || isLastSelected}
    >
      {table}
    </button>
  );
};

export default TableButton;
