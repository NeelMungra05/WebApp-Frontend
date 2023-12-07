import React from "react";
import styles from "./NavigationButton.module.css";

const NavigationButton = ({ handleButton, prevButton, nextButton }) => {
  return (
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
  );
};

export default NavigationButton;
