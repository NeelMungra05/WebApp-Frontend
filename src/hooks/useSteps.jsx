import React from "react";
import { useDispatch, useSelector } from "react-redux";

const POST_LOAD = {
  0: "Data Object Upload",
  1: "Field Selection",
  2: "Joining Condition",
  3: "Primary Key Condition",
  4: "Recon Order",
  5: "Summary",
};

const FINANCIAL = {
  0: "Data Object Upload",
  1: "Field Selection",
  2: "Financial Recon Order",
  3: "Summary",
};

const useSteps = () => {
  const subServiceSelected = useSelector((state) => state.subService.reconType);

  const SERVICE_INFO = subServiceSelected.postload ? POST_LOAD : FINANCIAL;

  const length = Object.keys(SERVICE_INFO).length;

  const stepInfoArr = Object.keys(SERVICE_INFO).map((idx) => SERVICE_INFO[idx]);

  return {
    length,
    stepInfoArr,
  };
};

export default useSteps;
