import React from "react";

const STEPS_INFO = {
  0: "Data Object Upload",
  1: "Field Selection",
  2: "Joining Condition",
  3: "Primary Key Condition",
  4: "Recon Order",
  5: "Summary",
};

const useSteps = () => {
  const length = Object.keys(STEPS_INFO).length;

  const stepInfoArr = Object.keys(STEPS_INFO).map((idx) => STEPS_INFO[idx]);

  return {
    length,
    stepInfoArr,
  };
};

export default useSteps;
