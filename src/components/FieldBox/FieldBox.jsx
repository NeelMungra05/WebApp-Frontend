import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useRef } from "react";
import Input from "../UI/Input";
import styles from "./FieldBox.module.css";

const FieldBox = (props) => {
  const { fileName, fields, id } = props;

  const fieldsChoice = fields.map((field) => (
    <Input
      label={field}
      reverse={true}
      input={{
        key: `${id}${fileName}${field}`,
        id: `${id}${fileName}${field}`,
        name: `${fileName}-${field}`,
        type: "checkbox",
      }}
    />
  ));

  return (
    <div className={styles.container}>
      <h6 className={styles.heading}>{fileName}</h6>
      <div className={styles.container__search}>
        <Input
          label=""
          input={{
            type: "text",
            placeholder: "Search the fieldname",
          }}
        />
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className={styles["container__search--logo"]}
        />
      </div>
      <div className={styles.container__fields}>{fieldsChoice}</div>
    </div>
  );
};

export default FieldBox;
