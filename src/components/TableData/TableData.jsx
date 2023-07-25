import React from "react";
import styles from "../TableData/TableData.module.css";
import TableButton from "../TableButton/TableButton";
import JoinTypeSelect from "../SelectJoinType/SelectJoinType";
import JoinData from "../JoinDataSection/JoinDataSection";
import useTableData from "../../hooks/useTableData";

const TableData = ({ type }) => {
  const {
    selectedTables,
    selectedJoins,
    fields,
    tables,
    joinTypes,
    handleTableClick,
    handleJoinTypeChange,
    handleDiscardJoin,
    isTableUsed,
    getAvailableTables,
  } = useTableData( {type} );

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
