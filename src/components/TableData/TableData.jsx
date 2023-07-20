import React, { useState } from "react";
import styles from "../TableData/TableData.module.css";
import TableButton from "../TableButton/TableButton";
import JoinTypeSelect from "../SelectJoinType/SelectJoinType";
import JoinData from "../JoinDataSection/JoinDataSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";

const TableData = () => {
  const [selectedTables, setSelectedTables] = useState([]);
  const [selectedJoins, setSelectedJoins] = useState([]);

  const fields = useSelector((state) => state.fields.sourceFields);
  const tables = Object.keys(fields);
  const joinTypes = ["Inner Join", "Left Join"];

  const handleTableClick = (table, event) => {
    if (selectedTables.length < 2 && !selectedTables.includes(table)) {
      setSelectedTables([...selectedTables, table]);
    }
    event.preventDefault();
  };

  const handleJoinTypeChange = (event) => {
    const selectedJoin = event.target.value;
    if (selectedJoin && selectedTables.length === 2) {
      const newJoin = { type: selectedJoin, tables: selectedTables };
      setSelectedJoins([...selectedJoins, newJoin]);

      const joinedTables = selectedTables
        .map((table) =>
          table.slice(-5) === ".xlsx" ? table.slice(0, -5) : table
        )
        .join("|");

      const joinedTable = `${joinedTables}`;
      setSelectedTables([joinedTable]);
      event.target.value = "";
    }
  };

  const handleDiscardJoin = (index) => {
    const updatedJoins = selectedJoins.slice(0, index);
    const discardedJoin = selectedJoins[index];

    const discardedTables = discardedJoin.tables;
    const remainingTables = discardedTables.slice(
      0,
      discardedTables.length - 1
    );

    setSelectedJoins(updatedJoins);
    setSelectedTables(remainingTables);

    const joinTypeDropdown = document.getElementById("joinTypeDropdown");
    if (joinTypeDropdown) {
      joinTypeDropdown.value = "";
    }

    if (updatedJoins.length === 0) {
      setSelectedTables([]);
    }
  };

  const isTableUsed = (table) => {
    for (const join of selectedJoins) {
      if (join.tables.includes(table)) {
        return true;
      }
    }
    return false;
  };

  const getAvailableTables = () => {
    const usedTables = selectedJoins.reduce(
      (tables, join) => tables.concat(join.tables),
      []
    );
    return tables.filter(
      (table) => !selectedTables.includes(table) && !usedTables.includes(table)
    );
  };

  return (
    <div>
      <div className={styles.section__header}>
        <h2>Tables</h2>
        <div className={styles.tableContainer}>
          {tables.map((table, index) => (
            <TableButton
              key={index}
              table={table}
              onClick={(event) => handleTableClick(table, event)}
              disabled={
                (selectedTables.length === 2 &&
                  !selectedTables.includes(table)) ||
                isTableUsed(table)
              }
            />
          ))}
          <JoinTypeSelect
            onChange={handleJoinTypeChange}
            disabled={selectedTables.length !== 2}
            joinTypes={joinTypes}
          />
        </div>
        <hr />
      </div>

      {selectedJoins.map((join, index) => (
        <JoinData
          join={join}
          index={index}
          filesField={fields}
          onDiscard={handleDiscardJoin}
          key={index}
        />
      ))}
    </div>
  );
};

export default TableData;
