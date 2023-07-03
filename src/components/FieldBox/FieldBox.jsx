import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import Input from "../UI/Input";
import styles from "./FieldBox.module.css";

const FieldBox = (props) => {
  const { fileName, fields, id } = props;
  const scrollBoxDivRef = useRef();
  const [searchList, setSearchList] = useState(fields);

  useEffect(() => {
    const currentHeight = scrollBoxDivRef.current.scrollHeight;
    const scrollThresholdHeight = scrollBoxDivRef.current.clientHeight;
  
    if (currentHeight > scrollThresholdHeight) {
      scrollBoxDivRef.current.classList.remove(styles.disabled);
    }
  }, [fields]);
  
  const searchInputHandler = (e) => {
    const searchValue = e.target.value.trim();

    if (searchValue === "") {
      setSearchList(fields);
    }
    setSearchList(
      fields.filter((item) => {
        if (item.toLowerCase().includes(searchValue.toLowerCase())) {
          return item;
        }
      })
    );
  };

const fieldsChoice = (
  <>
    <div className={styles.checkboxContainer}>
      <div className={styles.fieldHeading}>PK</div>
      <div className={styles.fieldHeading}>RF</div>
      <div className={styles.fieldHeading}>Description</div>
    </div>
    {searchList.map((field) => (
      <div key={`${id}${fileName}${field}`} className={styles.checkboxContainer}>
      <Input
        label=""
        reverse={true}
        input={{
              key: `${id}${fileName}${field}-primaryKey`,
              id: `${id}${fileName}${field}-primaryKey`,
              name: `${fileName}-${field}-primaryKey`,
              type: "checkbox",
            }}
      />
      <Input
        label=""
        reverse={true}
        input={{
              key: `${id}${fileName}${field}`,
              id: `${id}${fileName}${field}`,
              name: `${fileName}-${field}`,
              type: "checkbox",
            }}
      />
      <div className={styles.fieldName}>{field}</div>
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
