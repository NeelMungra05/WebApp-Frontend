import React, { useState } from "react";
import styles from "../TableData/TableData.module.css";
import TableButton from "../TableButton/TableButton";
import JoinTypeSelect from "../SelectJoinType/SelectJoinType";
import JoinDataSection from "../JoinDataSection/JoinDataSection";

const TableData = () => {
    const [selectedTables, setSelectedTables] = useState([]);
    const [selectedJoins, setSelectedJoins] = useState([]);
    const [lastSelectedTable, setLastSelectedTable] = useState(null);
  
    const tables = ["Table1", "Table2", "Table3", "Table4"];
    const joinTypes = ["Full Join", "Inner Join", "Right Join", "Left Join"];
  
    const handleTableClick = (table) => {
      if (!selectedTables.includes(table)) {
        setSelectedTables([...selectedTables, table]);
        setLastSelectedTable(table);
      }
    };
  
    const handleJoinTypeChange = (event) => {
      const selectedJoin = event.target.value;
      if (selectedJoin && selectedTables.length < tables.length) {
        const newJoin = { type: selectedJoin, tables: selectedTables };
        setSelectedJoins([...selectedJoins, newJoin]);
      }
    };
  
    const handleDiscardJoin = (joinToDiscard) => {
      const filteredJoins = selectedJoins.filter((join) => join !== joinToDiscard);
      setSelectedJoins(filteredJoins);
      setSelectedTables(joinToDiscard.tables);
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
                isSelected={selectedTables.includes(table)}
                onClick={handleTableClick}
                isLastSelected={table === lastSelectedTable}
              />
            ))}
            <JoinTypeSelect
              onChange={handleJoinTypeChange}
              disabled={selectedTables.length === 0}
              joinTypes={joinTypes}
            />
          </div>
          <hr />
        </div>
  
        {selectedJoins.slice(0, selectedTables.length - 1).map((join, index) => (
          <JoinDataSection
            join={join}
            key={index}
            onDiscardJoin={handleDiscardJoin}
          />
        ))}
      </div>
    );
  };
  
  export default TableData;