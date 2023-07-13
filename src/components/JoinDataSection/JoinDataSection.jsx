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


<div className = {styles.joindata}>
    
        {join.tables.map((table, tableIndex) => (
          <select className={styles.joinselect}>
          <option key={tableIndex}>{table}</option>
          <option key={tableIndex}>{table}</option>
          
          </select>
        ))}
        </div>
        
      
      </div>
      <hr />
    </div>
  );
};

export default JoinDataSection;

