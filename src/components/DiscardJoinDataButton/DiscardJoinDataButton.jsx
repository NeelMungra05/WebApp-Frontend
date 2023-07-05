import React from "react";
import styles from "../DiscardJoinDataButton/DiscardJoinDataButton.module.css";

const DiscardJoinDataButton = ({ onClick }) => {
    return (
      <button
        className={styles.discardButton}
        type="button"
        onClick={onClick}
      >
        Discard
      </button>
    );
  };
  
  export default DiscardJoinDataButton;