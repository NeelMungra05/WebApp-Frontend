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
    joinTypeDropdownRef,
  } = useTableData({ type });

  const heading = type === "sourceFields" ? "Source Tables" : "Target Tables";

  return (
    <div>
      <div className={styles.section__header}>
        <h2>{heading}</h2>
        <div className={styles.tableContainer}>
          {tables.map((table, index) => (
            <TableButton
              key={index}
              table={table}
              onClick={(event) => handleTableClick(table, event)}
              disabled={
                (selectedTables.length === 2 &&
                  !selectedTables.includes(table)) ||
                isTableUsed(table) ||
                tables.length === 1
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
