import React, { useMemo, useCallback } from "react";
import FileUpload from "../../FileUpload/FileUpload";
import FormSection from "../../MultiStepForm/FormSection";
import ProgressBar from "../../ProgressBar/ProgressBar";
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
import TableButton from "../../TableButton/TableButton";
import styles from "./Reconciliation.module.css";
import NavigationButton from "../../NavigationButton/NavigationButton";

const Reconciliation = ({ subServiceSelected }) => {
  const steps = useSelector((state) => state.steps.steps);
  const {
    showPrevButton: prevButton,
    showNextButton: nextButton,
    showSubmitButton: submitButton,
  } = useSelector((state) => state.formButton);
  const dispatch = useDispatch();

  dispatch(subServiceAction.change(subServiceSelected));

  const handleButton = useCallback(
    (direction) => {
      const isPrev = direction === "prev";
      const newSteps = isPrev ? steps - 1 : steps + 1;

      console.log("Dispatching actions...");
      dispatch(formButtonAction.nextButton(newSteps !== 6));
      dispatch(formButtonAction.prevButton(newSteps !== 1));
      dispatch(isPrev ? stepsAction.previous() : stepsAction.next());
    },
    [dispatch, steps]
  );

  const content = useMemo(() => {
    switch (steps) {
      case 1:
        return <Upload />;
      case 2:
        return <Selector />;
      case 3:
        return <SourceAndTargetTables />;
      case 4:
        return <PrimaryKeySelection />;
      case 5:
        return <RequiredKeySelection />;
      case 6:
        return <SummaryData />;
      default:
        return null;
    }
  }, [steps]);

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
        <NavigationButton
          handleButton={handleButton}
          prevButton={prevButton}
          nextButton={nextButton}
        />
      </form>
    </>
  );
};

export default Reconciliation;
