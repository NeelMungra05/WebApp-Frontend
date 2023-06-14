import React, { useState } from "react";
import FileList from "../../FileList/FileList";
import FileUpload from "../../FileUpload/FileUpload";
import FormSection from "../../MultiStepForm/FormSection";
import styles from "./Reconciliation.module.css";

const Reconciliation = () => {
  const [steps, setSteps] = useState(1);
  const [nextButtonDiabled, setNextButtonDiabled] = useState(false);
  const [prevButtonDisable, setPrevButtonDisable] = useState(true);
  const [files, setFiles] = useState([]);

  const fileChangeHandler = (file) => {
    setFiles((prevState) => [...prevState, ...file]);
  };

  const fileRemoveHandler = (name) => {
    setFiles((prevState) => prevState.filter((file) => file.name !== name));
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
        <FileUpload
          onUpload={fileChangeHandler}
          label=" "
          accept=".xlsx"
          files={files}
          onRemove={fileRemoveHandler}
        />
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
