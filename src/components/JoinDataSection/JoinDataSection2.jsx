import React from "react";
import styles from "../JoinDataSection/JoinDataSection.module.css";
import CustomMultiSelect from "../customMultiselect/customMultiselect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins, faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { joinsActions } from "../../store/joins-slice";

const JOIN_TYPES = {
  INNER_JOIN: "Inner Join",
};

const ICONS = {
  [JOIN_TYPES.INNER_JOIN]: faCoins,
};

const DISCARD_BUTTON_TEXT = "x";

const JoinDataSection2 = ({ join, index, onDiscard, filesField }) => {
  const dispatch = useDispatch();

  const joinDataObject = join.tables.reduce((acc, table) => {
    const splittedFiles = table
      .split("|")
      .map((val) => (val.slice("-5") === ".xlsx" ? val : val.concat(".xlsx")));

    console.log(splittedFiles);

    const fields = splittedFiles.map((val) =>
      Object.keys(filesField[val]).filter((field) => filesField[val][field].PK)
    );

    const setUnion = new Set();

    fields.forEach((value) => value.forEach((val) => setUnion.add(val)));

    acc[table] = Array.from(setUnion);
    return acc;
  }, {});

  const addJoinsFields = (isLeft, selectedOptions) => {
    const type = isLeft ? "leftOn" : "rightOn";
    dispatch(
      joinsActions.addSourceJoinsFields({ type, selectedOptions, index })
    );
    dispatch(
      joinsActions.addTargetJoinsFields({ type, selectedOptions, index })
    );
  };

  // const joinDataObject = join.tables.reduce((acc, table) => {
  //   acc[table] = tableOptionsMapping[table] || [];
  //   return acc;
  // }, {});

  const iconToUse = ICONS[join.type] || faCircleHalfStroke;

  return (
    <div className={styles.section__header}>
      <h2>Join Data</h2>
      <div className={styles.joinContainer}>
        <button
          className={styles.discardButton}
          onClick={() => onDiscard(index)}
        >
          {DISCARD_BUTTON_TEXT}
        </button>
        <h3>{join.type}</h3>
        <div className={styles.joindata}>
          {Object.entries(joinDataObject).map(
            ([table, options], tableIndex) => (
              <React.Fragment key={tableIndex}>
                <CustomMultiSelect
                  className={styles.joinselect}
                  options={options}
                  placeholder={table}
                  isLeft={tableIndex < Object.keys(joinDataObject).length - 1}
                  onAddFields={addJoinsFields}
                />
                {tableIndex < Object.keys(joinDataObject).length - 1 && (
                  <FontAwesomeIcon
                    icon={iconToUse}
                    className={styles.iconBetweenDropdowns}
                  />
                )}
              </React.Fragment>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default JoinDataSection2;
