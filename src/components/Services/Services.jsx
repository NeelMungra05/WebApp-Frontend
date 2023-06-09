import React from "react";
import styles from "./Services.module.css";
import img from "../../assets/recon.jpg";

const Services = () => {
  return (
    <section className={styles.section}>
      <div className={styles.section__items}>
        <div className={styles.card}>
          <img src={img} alt="Reconciliation" className={styles.card__img} />
          <div className={styles.card__content}>
            <h1 className={styles.card__header}>Data Reconciliation</h1>
            <p className={styles.card__text}>
              Get your data check and covered with our data reconciliation tool
            </p>
            <button className={styles.card__btn}>
              Explore <span>&rarr;</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
