import React from "react";
import { useState } from "react";
import FormSection from "../../MultiStepForm/FormSection";
import Input from "../../UI/Input";
import styles from "./Reconciliation.module.css";

const Reconciliation = () => {
  const [steps, setSteps] = useState(1);
  const [nextButtonDiabled, setNextButtonDiabled] = useState(false);
  const [prevButtonDisable, setPrevButtonDisable] = useState(true);

  const fileChangeHandler = (e) => {
    console.log("1 ", e.target.files[0]);
  };

  const prevButtonHandler = (e) => {
    if (steps - 1 === 1) {
      setPrevButtonDisable(true);
    } else {
      setPrevButtonDisable(false);
    }

    setNextButtonDiabled(false);
    setSteps((prev) => prev - 1);
  };

  const nextButtonHandler = (e) => {
    if (steps + 1 === 3) {
      setNextButtonDiabled(true);
    } else {
      setNextButtonDiabled(false);
    }

    setPrevButtonDisable(false);
    setSteps((prev) => prev + 1);
  };

  return (
    <form action="" className={styles.form}>
      <FormSection
        currentStep={steps}
        defaultStep={1}
        className={styles.form__section}
        activeClassName={styles["form__section--active"]}
      >
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
      </FormSection>

      <FormSection
        currentStep={steps}
        defaultStep={2}
        className={styles.form__section}
        activeClassName={styles["form__section--active"]}
      >
        <div className={styles.section__header}>Step 2</div>
      </FormSection>

      <FormSection
        currentStep={steps}
        defaultStep={3}
        className={styles.form__section}
        activeClassName={styles["form__section--active"]}
      >
        <div className={styles.section__header}>Step 3</div>
      </FormSection>

      <div className={styles.form__navigation}>
        <button
          type="button"
          className={`${styles.form__button} ${styles["form__navigation--back"]}`}
          disabled={prevButtonDisable}
          onClick={prevButtonHandler}
        >
          Previous
        </button>
        <button
          type="button"
          className={`${styles.form__button} ${styles["form__navigation--forward"]}`}
          disabled={nextButtonDiabled}
          onClick={nextButtonHandler}
        >
          Next
        </button>
      </div>
    </form>
  );
};

export default Reconciliation;
