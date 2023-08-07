import React, { useEffect, useState } from "react";
import CardWithTable from "../CardsWithTable/CardsWithTable";
import styles from "./SummaryData.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faKiwiBird } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux/es/exports";

const SummaryData = () => {
  const cardsData = [
    { heading: "Card 1", icon: faUser, number: 100, tableData: [] },
    { heading: "Card 2", icon: faKiwiBird, number: 200, tableData: [] },
    { heading: "Card 3", icon: faUser, number: 300, tableData: [] },
    {
      heading: "Card 4",
      icon: faKiwiBird,
      number: 400,
      tableData: [
        { column1: "Data 1", column2: "Data 2" },
        { column1: "Data 3", column2: "Data 4" },
      ],
    },
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

  const fileToFormBody = (files, data, name) =>
    Array.from(files).forEach((file) => data.append(name, file));

  const sourceFiles = useSelector((state) => state.files.sourceFile);
  const targetFiles = useSelector((state) => state.files.targetFile);
  const sourceFields = useSelector((state) => state.fields.sourceFields);
  const targetFields = useSelector((state) => state.fields.targetFields);
  const joins = useSelector((state) => state.joins);
  const reconJoins = useSelector((state) => state.reconJoins);
  console.log(
    "🚀 ~ file: SummaryData.jsx:46 ~ SummaryData ~ reconJoins:",
    reconJoins
  );

  useEffect(() => {
    const reconResult = async () => {
      let data = new FormData();
      Array.from(sourceFiles).forEach((file) => data.append("source", file));
      Array.from(targetFiles).forEach((file) => data.append("target", file));
      data.append("sourceFields", JSON.stringify(sourceFields));
      data.append("targetFields", JSON.stringify(targetFields));
      data.append("joins", JSON.stringify(joins));
      data.append("reconJoin", JSON.stringify(reconJoins));

      const response = await fetch("http://127.0.0.1:8000/postload/recon/", {
        method: "POST",
        body: data,
      });

      if (!response.ok) {
        throw new Error("Some error occurred");
      }

      return response.json();
    };

    reconResult()
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }, []);

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
              icon={<FontAwesomeIcon icon={card.icon} />}
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
            <table className={styles.mainTable}>
              {generateTableHeaders()}
              <tbody>{generateTableRows()}</tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default SummaryData;
