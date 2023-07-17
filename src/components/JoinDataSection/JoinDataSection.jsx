import React from "react";
import styles from "../JoinDataSection/JoinDataSection.module.css";
// import { IconName } from "react-icons/fa";


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
    
        {/* {join.tables.map((table, tableIndex) => (
          <select className={styles.joinselect} >
          <option key={tableIndex}>{table}</option>
          </select>
    ))} */}


  {join.tables.map((table, tableIndex) => (
          <select id="multiple-select" multiple>
          <option value="1">Books</option>
          <option value="2">Movies, Music & Games</option>
          <option value="3">Electronics & Computers</option>
          <option value="4">Home, Garden & Tools</option>
          <option value="5">Health & Beauty</option>
          <option value="6">Toys, Kids & Baby</option>
          <option value="7">Clothing & Jewelry</option>
          <option value="8">Sports & Outdoors</option>
      </select>
    ))}



        </div>
        
      
      </div>
      <hr />
    </div>
  );
};

export default JoinDataSection;

