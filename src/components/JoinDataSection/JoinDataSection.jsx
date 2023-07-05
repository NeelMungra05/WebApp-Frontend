import React from "react";
import styles from "../JoinDataSection/JoinDataSection.module.css";
import DiscardJoinDataButton from "../DiscardJoinDataButton/DiscardJoinDataButton";

const JoinDataSection = ({ join, onDiscardJoin }) => {
  return (
    <div className={styles.section__header}>
      <h2>Join Data</h2>
      <div className={styles.joinContainer}>
        <h3>{join.type}</h3>
        {join.tables.map((table, tableIndex) => (
          <p key={tableIndex}>{table}</p>
        ))}
        <DiscardJoinDataButton onClick={() => onDiscardJoin(join)} />
      </div>
      <hr />
    </div>
  );
};

export default JoinDataSection;
