import React from "react";
import styles from "./ServiceList.module.css";
import img from "../../assets/recon.png";

const ServiceList = (props) => {
  return (
    <div className={styles.section__items}>
      <div className={styles.card}>
        <img src={props.img} alt={props.alt} className={styles.card__img} />
        <div className={styles.card__content}>
          <h1 className={styles.card__header}>{props.header}</h1>
          <p className={styles.card__text}>{props.content}</p>
          <button onClick={props.onClick} className={styles.card__btn}>
            Explore
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceList;
