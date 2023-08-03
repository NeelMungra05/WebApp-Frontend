import React from "react";

const STEPS_INFO = {
  0: "Src & Trgt Upload",
  1: "Field Selection",
  2: "Src & Trgt Join",
  3: "Src & Trgt Mapping",
  4: "RF Selection",
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
