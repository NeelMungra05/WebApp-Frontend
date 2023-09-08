import React, { useEffect, useState } from "react";
import CardWithTable from "../TabWithTable/TabWithTable";
import styles from "./SummaryData.module.css";
import { useSelector } from "react-redux/es/exports";
import Spinner from "../Spinner/Spinner";

const SummaryData = () => {
  const [displayedTableData, setDisplayedTableData] = useState([]);
  const [displayedCardIndex, setDisplayedCardIndex] = useState(0);
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleCardClick = (tableData, index) => {
    if (displayedCardIndex === index) {
      setDisplayedTableData([]);
      setDisplayedCardIndex(null);
    } else {
      setDisplayedTableData(tableData);
      setDisplayedCardIndex(index);
    }
  };

  const getFileNamesArray = (Files) => {
    return Object.values(Files).map((file) => file.name);
  };

  const sourceFiles = getFileNamesArray(
    useSelector((state) => state.files.sourceFile)
  );
  const targetFiles = getFileNamesArray(
    useSelector((state) => state.files.targetFile)
  );

  const sourceFields = useSelector((state) => state.fields.sourceFields);
  console.log(sourceFields);
  const targetFields = useSelector((state) => state.fields.targetFields);
  console.log(targetFields);
  const joins = useSelector((state) => state.joins);
  console.log("JOINS", joins);
  const reconJoins = useSelector((state) => state.reconJoins);
  console.log("RECON JOINS", reconJoins);

  useEffect(() => {
    const reconResult = async () => {
      // const data = new FormData();
      // sourceFiles.forEach((file) => data.append("source", file));
      // targetFiles.forEach((file) => data.append("target", file));
      // data.append("sourceFields", JSON.stringify(sourceFields));
      // data.append("targetFields", JSON.stringify(targetFields));
      // data.append("joins", JSON.stringify(joins));
      // data.append("reconJoin", JSON.stringify(reconJoins));
      // console.log("Data before sending to API:", data);
      const requestData = {
        source: sourceFiles,
        target: targetFiles,
        sourceFields,
        targetFields,
        joins,
        reconJoin: reconJoins,
      };

      try {
        const response = await fetch("http://127.0.0.1:8000/postload/recon/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestData),
        });

        if (!response.ok) {
          throw new Error("Some error occurred");
        }

        const jsonData = await response.json();
        setApiData(jsonData);
      } catch (err) {
        console.log(err);
        setError("An error occurred please try again some time later");
      } finally {
        setLoading(false);
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
        heading: "Source Vs Target KPIs",
        tableData: [
          {
            "Recon %": roundToTwoDecimal(apiData.kpis?.src_trgt?.[0]),
            "KDS Recon %": roundToTwoDecimal(apiData.kpis?.src_trgt?.[1]),
            "Text Recon %": roundToTwoDecimal(apiData.kpis?.src_trgt?.[2]),
            "Number Recon %": roundToTwoDecimal(apiData.kpis?.src_trgt?.[3]),
          },
        ],
      },
      {
        heading: "Target Vs Source KPIs",
        tableData: [
          {
            "Recon %": roundToTwoDecimal(apiData.kpis?.trgt_src?.[0]),
            "KDS Recon %": roundToTwoDecimal(apiData.kpis?.trgt_src?.[1]),
            "Text Recon %": roundToTwoDecimal(apiData.kpis?.trgt_src?.[2]),
            "Number Recon %": roundToTwoDecimal(apiData.kpis?.trgt_src?.[3]),
          },
        ],
      },
      {
        heading: "Source Vs Target Summary",
        tableData: generateSummaryTableData(apiData["source vs target"]),
      },
      {
        heading: "Target Vs Source Summary",
        tableData: generateSummaryTableData(apiData["target vs source"]),
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

  const content =
    error !== null ? (
      <p>{error}</p>
    ) : (
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

  const spinner = <Spinner />;

  return loading ? spinner : content;
};

export default SummaryData;
