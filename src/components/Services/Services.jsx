import React from "react";
import styles from "./Services.module.css";
import img from "../../assets/recon.jpg";
import ServiceList from "./ServiceList";
import { useState } from "react";
import { useMemo } from "react";

const Services = () => {
  const [serviceSelected, setServiceSelected] = useState({
    reconciliation: false,
    profiling: false,
    transformation: false,
  });

  const reconciliationHandler = (e) => {
    setServiceSelected({
      reconciliation: true,
      profiling: false,
      transformation: false,
    });
  };

  const profilingHandler = (e) => {
    setServiceSelected({
      reconciliation: false,
      profiling: true,
      transformation: false,
    });
  };

  const transformationHandler = (e) => {
    setServiceSelected({
      reconciliation: false,
      profiling: false,
      transformation: true,
    });
  };

  const SERVICE_INFO = useMemo(() => {
    return [
      {
        id: 1,
        img: img,
        alt: "Reconciliation",
        header: "Data Reconciliation",
        content:
          "Get your data check and covered with our data reconciliation tool",
        onClick: reconciliationHandler,
      },
      {
        id: 2,
        img: img,
        alt: "Profiling",
        header: "Data Profiling",
        content:
          "Get your data check and covered with our data reconciliation tool",
        onClick: profilingHandler,
      },
      {
        id: 3,
        img: img,
        alt: "Transformation",
        header: "Data Transformation",
        content:
          "Get your data check and covered with our data reconciliation tool",
        onClick: transformationHandler,
      },
    ];
  }, [reconciliationHandler, profilingHandler, transformationHandler]);

  let service = SERVICE_INFO.map((data) => (
    <ServiceList
      key={data.id}
      img={data.img}
      alt={data.alt}
      header={data.header}
      content={data.content}
      onClick={data.onClick}
    />
  ));

  if (serviceSelected.reconciliation) {
    service = <p>Reconciliation clicker....</p>;
  }

  return <section className={styles.section}>{service}</section>;
};

export default Services;
