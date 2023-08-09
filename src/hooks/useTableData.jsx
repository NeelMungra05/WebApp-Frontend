import { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { joinsActions } from "../store/joins-slice";

const useTableData = ({ type }) => {
  const [selectedTables, setSelectedTables] = useState([]);
  const [selectedJoins, setSelectedJoins] = useState([]);
  const fields = useSelector((state) => state.fields[type]);
  const dispatch = useDispatch();
  const joinTypeDropdownRef = useRef(null);

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
      dispatch(
        type === "sourceFields"
          ? joinsActions.addSourceJoins({
              type: selectedJoin,
              tables: selectedTables
                .map((val) =>
                  val
                    .split("|")
                    .map((oldVal) =>
                      oldVal.slice(-5) === ".xlsx" ? oldVal : oldVal + ".xlsx"
                    )
                )
                .flat(),
            })
          : joinsActions.addTargetJoins({
              type: selectedJoin,
              tables: selectedTables
                .map((val) =>
                  val
                    .split("|")
                    .map((oldVal) =>
                      oldVal.slice(-5) === ".xlsx" ? oldVal : oldVal + ".xlsx"
                    )
                )
                .flat(),
            })
      );
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
    dispatch(
      type === "sourceFields"
        ? joinsActions.removeSourceJoins({ index })
        : joinsActions.removeTargetJoins({ index })
    );
    const discardedTables = discardedJoin.tables;
    const remainingTables = discardedTables.slice(
      0,
      discardedTables.length - 1
    );

    setSelectedJoins(updatedJoins);
    setSelectedTables(remainingTables);

    if (joinTypeDropdownRef.current) {
      joinTypeDropdownRef.current.value = "";
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

  return {
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
  };
};

export default useTableData;
