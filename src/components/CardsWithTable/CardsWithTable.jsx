import React from 'react';
import styles from './CardsWithTable.module.css';

const CardsWithTable = ({ heading, icon, number, showTable, tableData, onCardClick }) => {
  const handleCardClick = () => {
    onCardClick(tableData);
  };

  return (
    <div className={styles.cardWithTable} onClick={handleCardClick}>
      <div className={styles.cardData}>
        <div className={styles.cardHeader}>
          <h3>{heading}</h3>
          <div className={styles.cardIcon}>{icon}</div>
        </div>
        <p>{number}</p>
      </div>
    </div>
  );
};

export default CardsWithTable;
