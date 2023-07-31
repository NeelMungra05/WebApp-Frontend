import React, { useState } from 'react';
import CardWithTable from '../CardsWithTable/CardsWithTable';
import styles from './SummaryData.module.css';

const SummaryData = () => {
  const cardsData = [
    { heading: 'Card 1', icon: 'Icon 1', number: 100, tableData: [
      { column1: 'Data 1', column2: 'Data 2' },
      { column1: 'Data 3', column2: 'Data 4' },
    ]},
    { heading: 'Card 2', icon: 'Icon 2', number: 200, tableData: [] },
    { heading: 'Card 3', icon: 'Icon 3', number: 300, tableData: [] },
    { heading: 'Card 4', icon: 'Icon 4', number: 400, tableData: [
      { column1: 'Data A', column2: 'Data B', column3: 'Data C' },
    ]},
  ];

  const [displayedTableData, setDisplayedTableData] = useState([]);
  const [displayedCardIndex, setDisplayedCardIndex] = useState(null);

  const handleCardClick = (tableData, index) => {
    if (displayedCardIndex === index) {
      setDisplayedTableData([]);
      setDisplayedCardIndex(null);
    } else {
      setDisplayedTableData(tableData);
      setDisplayedCardIndex(index);
    }
  };

  const generateTableHeaders = () => {
    if (displayedTableData.length === 0) return null;
    const firstRowKeys = Object.keys(displayedTableData[0]);
    return (
      <thead>
        <tr>
          {firstRowKeys.map((key) => (
            <th key={key}>{key}</th>
          ))}
        </tr>
      </thead>
    );
  };

  const generateTableRows = () => {
    if (displayedTableData.length === 0) return null;
    return displayedTableData.map((row, index) => (
      <tr key={index}>
        {Object.values(row).map((value, index) => (
          <td key={index}>{value}</td>
        ))}
      </tr>
    ));
  };

  return (
    <div className={styles.summaryDataContainer}>
      <div className={styles.cardContainer}>
        <div className={styles.cardGroup}>  
          {cardsData.map((card, index) => (
            <CardWithTable
              key={index}
              heading={card.heading}
              icon={card.icon}
              number={card.number}
              showTable={card.tableData.length > 0}
              tableData={card.tableData}
              onCardClick={() => handleCardClick(card.tableData, index)}
            />
          ))}
        </div>
      </div>
      <div className={styles.tableContainer}>
        {displayedTableData.length > 0 && (
          <div className={styles.tableSection}>
            <h3>Displayed Table</h3>
            <table>
              {generateTableHeaders()}
              <tbody>
                {generateTableRows()}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default SummaryData;
