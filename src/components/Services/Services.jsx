import React from "react";
import styles from "./Services.module.css";
import img from "../../assets/recon.jpg";
import ServiceList from "./ServiceList";

const Services = () => {
  return (
    <section className={styles.section}>
      <ServiceList
        img={img}
        alt="Reconciliation"
        header="Data Reconciliation"
        content="Get your data check and covered with our data reconciliation tool"
      />
      <ServiceList
        img={img}
        alt="Reconciliation"
        header="Data Reconciliation"
        content="Get your data check and covered with our data reconciliation tool"
      />
      <ServiceList
        img={img}
        alt="Reconciliation"
        header="Data Reconciliation"
        content="Get your data check and covered with our data reconciliation tool"
      />
    </section>
  );
};

export default Services;
