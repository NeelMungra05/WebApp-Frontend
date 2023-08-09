import React from 'react';
import styles from './TabWithTable.module.css';

const TabWithTable = ({ heading, showTable, tableData, onCardClick, isActive }) => {
  const handleCardClick = () => {
    onCardClick(tableData);
  };

  return (
    <div
      className={`${styles.cardWithTable} ${isActive ? styles.active : ''}`}
      onClick={handleCardClick}
    >
      <div className={styles.cardData}>
        <div className={styles.cardHeader}>
          <h3>{heading}</h3>
        </div>
      </div>
    </div>
  );
};

export default TabWithTable;