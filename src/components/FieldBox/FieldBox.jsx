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
            type: "checkbox",
          }}
        />
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
          doloremque inventore adipisci vero perspiciatis voluptate, qui aut
          velit, veritatis fuga sit? Dolorum aliquam nihil illum quam quia nemo
          delectus architecto, dolorem quae inventore corporis omnis vel, quidem
          ullam. Accusantium officia repudiandae voluptas! Aut quos
          exercitationem et labore debitis, voluptate facilis, unde ex nisi
          corporis quam vitae? Ut, porro. Numquam aliquid tempore sit? Saepe
          provident impedit doloremque error qui ut a atque illum perferendis
          quasi! Nulla sed repellendus ad, eligendi delectus, nemo sunt quasi
          deserunt, aliquam nesciunt quidem modi? Eum itaque quidem possimus?
          Minus animi eligendi at esse sint accusamus maiores.
        </div>
      </div>
    </div>
  );
};

export default FieldBox;
