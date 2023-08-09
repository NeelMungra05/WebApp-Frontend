import React from "react";
import TableData from "../TableData/TableData";

const SourceAndTargetTables = () => {
  return (
    <div>
      <TableData type="sourceFields"  />
      <hr />
      <TableData type="targetFields" />
    </div>
  );
};

export default SourceAndTargetTables;
