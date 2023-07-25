import React, { useState } from "react";
import FileUpload from "../../FileUpload/FileUpload";
import FormSection from "../../MultiStepForm/FormSection";
import ProgressBar from "../../ProgressBar/ProgressBar";
import styles from "./Reconciliation.module.css";
import { useDispatch, useSelector } from "react-redux";
import { stepsAction } from "../../../store/steps";
import { formButtonAction } from "../../../store/formButton";
import Upload from "../../Upload/Upload";
import FieldSelector from "../../FieldSelector/FieldSelector";
import Selector from "../../Selector/Selector";
import SourceAndTargetTables from "../../SourceAndTargetTables/SourceAndTargetTables";

const Reconciliation = () => {
  const steps = useSelector((state) => state.steps.steps);
  const {
    showPrevButton: prevButton,
    showNextButton: nextButton,
    showSubmitButton: submitButton,
  } = useSelector((state) => state.formButton);
  const dispatch = useDispatch();

  const prevButtonHandler = (e) => {
    if (steps - 1 === 1) {
      dispatch(formButtonAction.prevButton(false));
    } else {
      dispatch(formButtonAction.prevButton(true));
    }

    dispatch(formButtonAction.nextButton(true));
    dispatch(stepsAction.previous());
  };

  const nextButtonHandler = (e) => {
    if (steps + 1 === 3) {
      dispatch(formButtonAction.nextButton(false));
    } else {
      dispatch(formButtonAction.nextButton(true));
    }

    dispatch(formButtonAction.prevButton(true));
    dispatch(stepsAction.next());
  };

  let content;

  switch (steps) {
    case 1:
      content = <Upload />;
      break;

    case 2:
      content = <Selector />;
      break;

    case 3:
      content = <SourceAndTargetTables />;
      break;
    default:
      break;
  }

  return (
    <>
      <ProgressBar />
      <form action="" className={styles.form}>
        <FormSection
          className={styles.form__section}
          activeClassName={styles["form__section--active"]}
        >
          {content}
        </FormSection>
        <div className={styles.form__navigation}>
          <button
            type="button"
            className={`${styles.form__button} ${styles.form__button__previous}`}
            disabled={!prevButton}
            onClick={prevButtonHandler}
          >
            <span className={styles["form__navigation--back"]}>Previous</span>
          </button>
          <button
            type="button"
            className={`${styles.form__button} ${styles.form__button__next}`}
            disabled={!nextButton}
            onClick={nextButtonHandler}
          >
            <span className={styles["form__navigation--forward"]}>Next</span>
          </button>
        </div>
      </form>
    </>
  );
};

export default Reconciliation;
