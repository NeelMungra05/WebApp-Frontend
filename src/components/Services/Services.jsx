import React from "react";
import styles from "./Services.module.css";
import ServiceList from "./ServiceList";
import { useState } from "react";
import { useMemo } from "react";
import Reconciliation from "./Reconciliation/Reconciliation";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import useServiceHandler from "../../hooks/useServiceHandler";

const Services = () => {
  const { MAIN_SERVICE, SUB_SERVICE, serviceSelected } = useServiceHandler();

  const serviceListGenerator = (serviceData) => {
    return serviceData.map((data) => (
      <ServiceList
        key={data.id}
        img={data.img}
        alt={data.alt}
        header={data.header}
        content={data.content}
        onClick={data.onClick}
      />
    ));
  };

  let service = serviceListGenerator(MAIN_SERVICE);

  if (serviceSelected.reconciliation.selected) {
    service = serviceListGenerator(SUB_SERVICE);
    // return (
    //   <Provider store={store}>
    //     <Reconciliation />
    //   </Provider>
    // );
  }

  return <section className={styles.section}>{service}</section>;
};

export default Services;
