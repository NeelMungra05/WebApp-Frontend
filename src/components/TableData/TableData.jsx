import React, { useState } from "react";
import styles from "./TableData.module.css";
import TableButton from "../TableButton/TableButton";
import JoinTypeSelect from "../SelectJoinType/SelectJoinType";
import JoinDataSection from "../JoinDataSection/JoinDataSection";

const TableData = () => {
  const [selectedTables, setSelectedTables] = useState([]);
  const [selectedJoins, setSelectedJoins] = useState([]);

  const tables = ["Table1", "Table2", "Table3", "Table4"];
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
        .map((table) => table.slice(5))
        .join("");

      const joinedTable = `Table${joinedTables}`;
      setSelectedTables([joinedTable]);
    }
  };

  const handleDiscardJoin = (index) => {
    const updatedJoins = [...selectedJoins];
    updatedJoins.splice(index, updatedJoins.length - index);

    if (index > 0) {
      const previousJoin = updatedJoins[index - 1];
      setSelectedTables(previousJoin.tables);
    } else {
      setSelectedTables([]);
    }

    setSelectedJoins(updatedJoins);
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
                (selectedTables.length === 2 && !selectedTables.includes(table)) ||
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
        <JoinDataSection
          join={join}
          index={index}
          onDiscard={handleDiscardJoin}
          key={index}
        />
      ))}
    </div>
  );
};

export default TableData;
