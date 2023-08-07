import React, { useEffect, useState } from "react";
import CardWithTable from "../TabWithTable/TabWithTable";
import styles from "./SummaryData.module.css";
import { useSelector } from "react-redux/es/exports";

const SummaryData = () => {
  const [displayedTableData, setDisplayedTableData] = useState([]);
  const [displayedCardIndex, setDisplayedCardIndex] = useState(0);
  const [apiData, setApiData] = useState(null);

  const handleCardClick = (tableData, index) => {
    if (displayedCardIndex === index) {
      setDisplayedTableData([]);
      setDisplayedCardIndex(null);
    } else {
      setDisplayedTableData(tableData);
      setDisplayedCardIndex(index);
    }
  };

  const sourceFiles = useSelector((state) => state.files.sourceFile);
  const targetFiles = useSelector((state) => state.files.targetFile);
  const sourceFields = useSelector((state) => state.fields.sourceFields);
  const targetFields = useSelector((state) => state.fields.targetFields);
  const joins = useSelector((state) => state.joins);
  const reconJoins = useSelector((state) => state.reconJoins);

  useEffect(() => {
    const reconResult = async () => {
      const data = new FormData();
      sourceFiles.forEach((file) => data.append("source", file));
      targetFiles.forEach((file) => data.append("target", file));
      data.append("sourceFields", JSON.stringify(sourceFields));
      data.append("targetFields", JSON.stringify(targetFields));
      data.append("joins", JSON.stringify(joins));
      data.append("reconJoin", JSON.stringify(reconJoins));

      try {
        const response = await fetch("http://127.0.0.1:8000/postload/recon/", {
          method: "POST",
          body: data,
        });

        if (!response.ok) {
          throw new Error("Some error occurred");
        }

        const jsonData = await response.json();
        setApiData(jsonData);
      } catch (err) {
        console.log(err);
      }
    };

    reconResult();
  }, [sourceFiles, targetFiles, sourceFields, targetFields, joins, reconJoins]);

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

  useEffect(() => {
    if (apiData) {
      const cardsData = generateCardsData();
      if (cardsData.length > 0) {
        handleCardClick(cardsData[0].tableData, 0);
      }
    }
  }, [apiData]);


  const generateCardsData = () => {
    if (!apiData) return [];

    const roundToTwoDecimal = (num) => {
      return parseFloat(num).toFixed(2);
    };

    const cardsData = [
      {
        heading: "SRS VS TGT KPIs",
        tableData: [
          {
          'Recon %': roundToTwoDecimal(apiData.kpis?.src_trgt?.[0]),
          'KDS Recon %': roundToTwoDecimal(apiData.kpis?.src_trgt?.[1]),
          'Text Recon %': roundToTwoDecimal(apiData.kpis?.src_trgt?.[2]),
          'Number Recon %': roundToTwoDecimal(apiData.kpis?.src_trgt?.[3]),
          },
        ],
      },
      {
        heading: "TGT VS SRC KPIs",
        tableData: [
          {
          'Recon %': roundToTwoDecimal(apiData.kpis?.trgt_src?.[0]),
          'KDS Recon %': roundToTwoDecimal(apiData.kpis?.trgt_src?.[1]),
          'Text Recon %': roundToTwoDecimal(apiData.kpis?.trgt_src?.[2]),
          'Number Recon %': roundToTwoDecimal(apiData.kpis?.trgt_src?.[3]),
          },
        ],
      },
      {
        heading: "SRS VS TGT SUMMARY",
        tableData: generateSummaryTableData(apiData['source vs target']),
      },
      {
        heading: "TGT VS SRC SUMMARY",
        tableData: generateSummaryTableData(apiData['target vs source']),
      },
    ];

    return cardsData;
  };

  const generateSummaryTableData = (data) => {
    if (!data) return [];
    return Object.entries(data).reduce((acc, [key, value]) => {
      value.forEach((val, index) => {
        if (!acc[index]) {
          acc[index] = { Fields: `Value${index + 1}` };
        }
        acc[index][key] = val;
      });
      return acc;
    }, []);
  };

  const cardsData = generateCardsData();

  return (
    <div className={styles.summaryDataContainer}>
      <div className={styles.cardContainer}>
        <div className={styles.cardGroup}>
          <div className={styles.tabContainer}>
            {cardsData.map((card, index) => (
              <CardWithTable
                key={index}
                heading={card.heading}
                showTable={card.tableData.length > 0}
                tableData={card.tableData}
                onCardClick={() => handleCardClick(card.tableData, index)}
                isActive={displayedCardIndex === index}
              />
            ))}
          </div>
        </div>
      </div>
      <div className={styles.tableContainer}>
        {displayedTableData.length > 0 && (
          <div className={styles.tableSection}>
            <h3>Recon Results</h3>
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
