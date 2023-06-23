import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useRef } from "react";
import Input from "../UI/Input";
import styles from "./FieldBox.module.css";

const FieldBox = () => {
  return (
    <div className={styles.container}>
      <h6 className={styles.heading}>Filename.xlsx</h6>
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
      <div className={styles.container__fields}>
        <Input
          label="field 1"
          reverse={true}
          input={{
            id: "field1",
            type: "checkbox",
          }}
        />
        <Input
          label="field 2"
          reverse={true}
          input={{
            id: "field2",
            type: "checkbox",
          }} />
        <div>
        Here you will find our list of known bugs and pending feature
        requests. If your problem is not listed in there, or in the FAQ, or
        in the manuals, read the Feedback page to find out how to report
        bugs to us. PLEASE read the Feedback page carefully: it is there to
        save you time as well as us. Do not send us one-line bug reports
        telling us `it doesn't work'.
        </div>
      </div>
    </div>
  );
};

export default FieldBox;
