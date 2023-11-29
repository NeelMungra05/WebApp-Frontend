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
import PrimaryKeySelection from "../../PrimaryKeySelection/PrimaryKeySelection";
import SummaryData from "../../SummaryData/SummaryData";
import RequiredKeySelection from "../../RequiredKeySelection/RequiredKeySelection";
import { subServiceAction } from "../../../store/subService-slice";

const Reconciliation = ({ subServiceSelected }) => {
  const steps = useSelector((state) => state.steps.steps);
  const {
    showPrevButton: prevButton,
    showNextButton: nextButton,
    showSubmitButton: submitButton,
  } = useSelector((state) => state.formButton);
  const dispatch = useDispatch();

  dispatch(subServiceAction.change(subServiceSelected));

  const handleButton = (direction) => {
    const isPrev = direction === "prev";
    const newSteps = isPrev ? steps - 1 : steps + 1;

    dispatch(formButtonAction.nextButton(newSteps !== 6));
    dispatch(formButtonAction.prevButton(newSteps !== 1));

    dispatch(isPrev ? stepsAction.previous() : stepsAction.next());
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

    case 4:
      content = <PrimaryKeySelection />;
      break;

    case 5:
      content = <RequiredKeySelection />;
      break;

    case 6:
      content = <SummaryData />;
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
            onClick={() => handleButton("prev")}
          >
            <span className={styles["form__navigation--back"]}>Previous</span>
          </button>
          <button
            type="button"
            className={`${styles.form__button} ${styles.form__button__next}`}
            disabled={!nextButton}
            onClick={() => handleButton("next")}
          >
            <span className={styles["form__navigation--forward"]}>Next</span>
          </button>
        </div>
      </form>
    </>
  );
};

export default Reconciliation;
