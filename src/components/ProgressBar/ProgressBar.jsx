import React from "react";
import styles from "./ProgressBar.module.css";

const ProgressBar = () => {
  const barFillStyle = {
    width: `30%`,
  };

  return (
    <div className={styles.container}>
      <div className={styles.progress_bar}>
        <div className={styles.progress_bar__fill} style={barFillStyle}></div>
      </div>
    </div>
  );
};

export default ProgressBar;
