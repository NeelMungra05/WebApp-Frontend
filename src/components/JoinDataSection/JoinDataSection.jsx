import React from "react";
import styles from "../JoinDataSection/JoinDataSection.module.css";

const JoinDataSection =({ join, index, onDiscard }) => {
  return (
    <div className={styles.section__header}>
      <h2>Join Data</h2>
      <div className={styles.joinContainer}>
      <button
          className={styles.discardButton}
          onClick={() => onDiscard(index)}
        >
          x
        </button>
        <h3>{join.type}</h3>



        {/* new code */}
        {join.tables.map((table, tableIndex) => (
          <select>
          <option key={tableIndex}>{table}</option>
          </select>
        ))}
        
      
      </div>
      <hr />
    </div>
  );
};

export default JoinDataSection;

