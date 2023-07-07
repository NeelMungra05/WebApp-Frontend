import React from "react";
import styles from "../JoinDataSection/JoinDataSection.module.css";

const JoinDataSection =({ join, index, onDiscard }) => {
  return (
    <div className={styles.section__header}>
      <h2>Join Data</h2>
      <div className={styles.joinContainer}>
        <h3>{join.type}</h3>
        {join.tables.map((table, tableIndex) => (
          <p key={tableIndex}>{table}</p>
        ))}
        <button
          className={styles.discardButton}
          onClick={() => onDiscard(index)}
        >
          Discard
        </button>
      </div>
      <hr />
    </div>
  );
};

export default JoinDataSection;

