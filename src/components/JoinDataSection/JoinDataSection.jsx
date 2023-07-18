import React from "react";
import styles from "../JoinDataSection/JoinDataSection.module.css";
// import Multiselect from 'multiselect-react-dropdown';
import CustomMultiSelect from "../customMultiselect/customMultiselect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins, faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";

const JOIN_TYPES = {
  INNER_JOIN: 'Inner Join',
};

const ICONS = {
  [JOIN_TYPES.INNER_JOIN]: faCoins,
};

const DISCARD_BUTTON_TEXT = 'x';

const tableOptionsMapping = {
  Table1: ['T1-A', 'T1-B', 'T1-C','T1-A', 'T1-B', 'T1-C','T1-A', 'T1-B', 'T1-C'],
  Table2: ['T2-A', 'T2-B', 'T2-C'],
};

const JoinDataSection = ({ join, index, onDiscard }) => {
  console.log(join.tables);

  const joinDataObject = join.tables.reduce((acc, table) => {
    acc[table] = tableOptionsMapping[table] || [];
    return acc;
  }, {});

  const iconToUse = ICONS[join.type] || faCircleHalfStroke;

  return (
   <div className={styles.section__header}>
      <h2>Join Data</h2>
      <div className={styles.joinContainer}>
        <button className={styles.discardButton} onClick={() => onDiscard(index)}>
          {DISCARD_BUTTON_TEXT}
        </button>
        <h3>{join.type}</h3>
        <div className={styles.joindata}>
          {Object.entries(joinDataObject).map(([table, options], tableIndex) => (
            <React.Fragment key={tableIndex}>
              <CustomMultiSelect
                className={styles.joinselect}
                options={options}
                placeholder={table}
              />
              {tableIndex < Object.keys(joinDataObject).length - 1 && (
                <FontAwesomeIcon
                  icon={iconToUse}
                  className={styles.iconBetweenDropdowns}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JoinDataSection;
