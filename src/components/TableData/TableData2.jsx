import React from "react";
import styles from "../TableData/TableData.module.css";
import TableButton from "../TableButton/TableButton";
import JoinTypeSelect from "../SelectJoinType/SelectJoinType";

import JoinData2 from "../JoinDataSection/JoinDataSection2";
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
  } = useTableData({ type });

  // const heading = type === 'sourceFields' ? 'Primary Key Selection' : 'Target Tables';

  return (
    <div>
      <div className={styles.section__header}>
        <h2>Primary Key Selection</h2>
    
        <hr />
      </div>

      {selectedJoins.map((join, index) => (
        <JoinData2
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
