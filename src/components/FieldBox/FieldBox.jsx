import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Input from "../UI/Input";
import styles from "./FieldBox.module.css";

const FieldBox = () => {
  return (
    <div>
      <h6>Filename.xlsx</h6>
      <div>
        <Input
          label=""
          input={{
            type: "text",
            placeholder: "Search the fieldname",
          }}
        />
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </div>
      <div>
        <Input
          label="field 1"
          reverse={true}
          input={{
            type: "checkbox",
          }}
        />
      </div>
    </div>
  );
};

export default FieldBox;
