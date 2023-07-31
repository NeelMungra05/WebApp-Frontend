import React from 'react';
import styles from './CardsWithTable.module.css'; // Import the CSS module

const CardsWithTable = ({ heading, icon, number, showTable, tableData, onCardClick }) => {
  const handleCardClick = () => {
    onCardClick(tableData);
  };

  return (
    <div className={styles.cardWithTable} onClick={handleCardClick}>
      <div>
        <h3>{heading}</h3>
        <div>{icon}</div>
        <p>Number: {number}</p>
      </div>
    </div>
  );
};

export default CardsWithTable;
