import React from "react";
import styles from "./ProgressBar.module.css";
import { useSelector, useDispatch } from "react-redux";
import useSteps from "../../hooks/useSteps";

const ProgressBar = () => {
  const steps = useSelector((state) => state.steps.steps);

  const { length, stepInfoArr: stepArr } = useSteps();

  const fillProgression = (steps / length) * 100;
  const barFillStyle = {
    width: `${fillProgression}%`,
  };

  const stepsInfo = stepArr.map((data, idx) => {
    return (
      <p>
        <span>{idx + 1}</span>
        <span>{data}</span>
      </p>
    );
  });

  return (
    <div className={styles.container}>
      <div className={styles.steps}>{stepsInfo}</div>
      <div className={styles.progress_bar}>
        <div className={styles.progress_bar__fill} style={barFillStyle}></div>
      </div>
    </div>
  );
};

export default ProgressBar;
