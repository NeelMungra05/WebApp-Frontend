import React from "react";
import styles from "./Services.module.css";
import ServiceList from "./ServiceList";
import { useState } from "react";
import { useMemo } from "react";
import Reconciliation from "./Reconciliation/Reconciliation";
import { Provider, useDispatch } from "react-redux";
import { store } from "../../store/store";
import useServiceHandler from "../../hooks/useServiceHandler";
import { subServiceAction } from "../../store/subService-slice";

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
    const isFinancialSelected = serviceSelected.reconciliation.type.financial;
    const isPostloadSelected = serviceSelected.reconciliation.type.postLoad;

    if (isFinancialSelected || isPostloadSelected) {
      const subServiceSelected = {
        preload: false,
        financial: isFinancialSelected,
        postload: isPostloadSelected,
      };

      return (
        <Provider store={store}>
          <Reconciliation subServiceSelected={subServiceSelected} />
        </Provider>
      );
    }

    service = serviceListGenerator(SUB_SERVICE);
  }

  return <section className={styles.section}>{service}</section>;
};

export default Services;
