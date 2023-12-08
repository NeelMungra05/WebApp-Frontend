import React, { useMemo } from "react";
import ProgressBar from "../../ProgressBar/ProgressBar";
import FormSection from "../../MultiStepForm/FormSection";
import NavigationButton from "../../NavigationButton/NavigationButton";
import ServiceSteps from "../ServiceSteps";
import { useDispatch, useSelector } from "react-redux";
import { formButtonAction } from "../../../store/formButton";
import { stepsAction } from "../../../store/steps";
import { subServiceAction } from "../../../store/subService-slice";
import styles from "./Reconciliation.module.css";
import useSteps from "../../../hooks/useSteps";

const Reconciliation = ({ subServiceSelected }) => {
  const steps = useSelector((state) => state.steps.steps);
  const {
    showPrevButton: prevButton,
    showNextButton: nextButton,
    showSubmitButton: submitButton,
  } = useSelector((state) => state.formButton);
  const dispatch = useDispatch();

  dispatch(subServiceAction.change(subServiceSelected));

  const content = useMemo(() => {
    return (
      <ServiceSteps steps={steps} isPostLoad={subServiceSelected.postload} />
    );
  }, [steps, subServiceSelected.postload]);

  const { length: totalSteps } = useSteps();

  const handleButton = (direction) => {
    const isPrev = direction === "prev";
    const newSteps = isPrev ? steps - 1 : steps + 1;

    dispatch(formButtonAction.nextButton(newSteps !== totalSteps));
    dispatch(formButtonAction.prevButton(newSteps !== 1));
    dispatch(isPrev ? stepsAction.previous() : stepsAction.next());
  };

  return (
    <>
      <ProgressBar />
      <form action="" className={styles.form}>
        <FormSection
          className={styles.form__section}
          activeClassName={styles["form__section--active"]}>
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
