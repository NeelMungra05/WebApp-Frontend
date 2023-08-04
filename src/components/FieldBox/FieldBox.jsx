import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fieldsAction } from "../../store/fields-slice";
import Input from "../UI/Input";
import styles from "./FieldBox.module.css";

const FieldBox = (props) => {
  const { fileName, id, type } = props;
  const scrollBoxDivRef = useRef();
  const list = useSelector((state) =>
    type === "source" ? state.fields.sourceFields : state.fields.targetFields
  );
  const originalList = Object.keys(list)
    .filter((val) => val === fileName)
    .reduce((acc, key) => {
      acc = list[key];
      return acc;
    }, {});
  const dispatch = useDispatch();
  const action =
    type === "source"
      ? fieldsAction.changeSourceState
      : fieldsAction.changeTargetState;
  const [searchList, setSearchList] = useState(originalList);

  useEffect(() => {
    const currentHeight = scrollBoxDivRef.current.scrollHeight;
    const scrollThresholdHeight = scrollBoxDivRef.current.clientHeight;

    if (currentHeight > scrollThresholdHeight) {
      scrollBoxDivRef.current.classList.remove(styles.disabled);
    }
  }, [originalList]);

  const searchInputHandler = (e) => {
    const searchValue = e.target.value.trim();

    if (searchValue === "") {
      setSearchList(originalList);
    }
    setSearchList(
      Object.values(originalList).filter((value) =>
        value.name.toLowerCase().includes(searchValue.toLowerCase())
      )
    );
  };

  /**
   *  At the time of this writing only I and God can understand this function.
   *  Now only God can understand this.
   */
  const checkBoxChangeHandler = (e) => {
    const name = e.target.name;
    const fieldName = name.split("|")[1];

    if (name.split("|").includes("primaryKey")) {
      const pkSelectedCount = Object.values(originalList).filter((value) =>
        value.name === fieldName ? value.PK === false : value.PK === true
      ).length;

      console.log(pkSelectedCount);

      if (pkSelectedCount <= 4) {
        dispatch(
          action({
            [fileName]: {
              ...originalList,
              [fieldName]: {
                ...originalList[fieldName],
                PK: !originalList[fieldName].PK,
              },
            },
          })
        );
      } else {
        const updatedState = Object.assign(
          {},
          ...Object.keys(originalList).map((value) => ({
            [value]: {
              ...originalList[value],
              PKDisabled: !originalList[value].PK,
            },
          }))
        );
        console.log(updatedState);

        dispatch(
          action({
            [fileName]: updatedState,
          })
        );
      }
    } else {
      const pkSelectedCount = Object.values(originalList).filter((value) =>
        value.name === fieldName ? value.PK === false : value.PK === true
      ).length;

      if (pkSelectedCount <= 4) {
        console.log("Selected Me");
        dispatch(
          action({
            [fileName]: {
              ...originalList,
              [fieldName]: {
                ...originalList[fieldName],
                RF: !originalList[fieldName].RF,
                PKDisabled: originalList[fieldName].RF,
                PK: false,
              },
            },
          })
        );
      } else {
        const updatedState = { ...originalList };
        dispatch(
          action({
            [fileName]: {
              ...updatedState,
              [fieldName]: {
                ...updatedState[fieldName],
                RF: !originalList[fieldName].RF,
                PKDisabled: true,
                PK: false,
              },
            },
          })
        );
      }
    }
  };

  const fieldsChoice = (
    <>
      <div className={styles.checkboxContainer}>
        <div className={styles.fieldHeading}>PK</div>
        <div className={styles.fieldHeading}>RF</div>
        <div className={styles.fieldHeading}>Description</div>
      </div>
      {Object.keys(searchList).map((field) => (
        <div
          key={`${id}${fileName}${searchList[field].name}`}
          className={styles.checkboxContainer}
        >
          <Input
            label=""
            reverse={true}
            input={{
              key: `${id}${fileName}${searchList[field].name}-primaryKey`,
              id: `${id}${fileName}${searchList[field].name}-primaryKey`,
              name: `${fileName}|${searchList[field].name}|primaryKey`,
              disabled: originalList[searchList[field].name].PKDisabled,
              type: "checkbox",
              onChange: checkBoxChangeHandler,
              checked: originalList[searchList[field].name].PK,
            }}
          />
          <Input
            label=""
            reverse={true}
            input={{
              key: `${id}${fileName}${searchList[field].name}`,
              id: `${id}${fileName}${searchList[field].name}`,
              name: `${fileName}|${searchList[field].name}`,
              type: "checkbox",
              onChange: checkBoxChangeHandler,
              checked: originalList[searchList[field].name].RF,
            }}
          />
          <div className={styles.fieldName}>{searchList[field].name}</div>
        </div>
      ))}
    </>
  );

  return (
    <div className={styles.container}>
      <h6 className={styles.heading}>{fileName}</h6>
      <div className={styles.container__search}>
     
        <Input
          label=""
          input={{
            type: "text",
            placeholder: "Search the fieldname",
            onChange: searchInputHandler,
          }}
        />
         <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className={styles["container__search--logo"]}
        />
  
      </div>
      <div ref={scrollBoxDivRef} className={styles.container__fields}>
        {fieldsChoice}
      </div>
    </div>
  );
};

export default FieldBox;
