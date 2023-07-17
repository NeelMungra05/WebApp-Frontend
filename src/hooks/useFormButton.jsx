import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { formButtonAction } from "../store/formButton";

const useFormButton = ({ isValid, buttonType }) => {
  const dispatch = useDispatch();
  const button = useSelector((state) =>
    buttonType === "next"
      ? state.formButton.showNextButton
      : state.formButton.showPreviousButton
  );

  const action =
    buttonType === "next"
      ? formButtonAction.nextButton
      : formButtonAction.prevButton;

  useEffect(() => {
    dispatch(action(isValid));
  }, [isValid]);
};

export default useFormButton;
