import React from "react";
import Input from "../../UI/Input";
import styles from "./Reconciliation.module.css";

const Reconciliation = () => {
  const fileChangeHandler = (e) => {
    console.log("1 ", e.target.files[0]);
  };

  return (
    <form action="" className={styles.form}>
      <section className={`${styles.form__section} ${styles.form__section}`}>
        <div className={styles.section__header}>Step 1</div>
        <div className={styles.section__input}>
          <Input
            label="Source file"
            input={{
              type: "file",
              multiple: true,
              onChange: fileChangeHandler,
              accept: ".xlsx",
            }}
          />
        </div>
      </section>
      <section className={styles.form__section}>
        <div className={styles.section__header}>Step 2</div>
      </section>
      <div className={styles.form__navigation}>
        <button
          type="button"
          className={`${styles.form__button} ${styles["form__navigation--back"]}`}
        >
          Previous
        </button>
        <button
          type="button"
          className={`${styles.form__button} ${styles["form__navigation--forward"]}`}
        >
          Next
        </button>
      </div>
    </form>
  );
};

export default Reconciliation;
