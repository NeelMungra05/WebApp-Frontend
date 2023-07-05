import React from "react";
import styles from "./Services.module.css";
import img from "../../assets/reconciliation.png";
import img1 from "../../assets/Data-Mining.jpg";
import img2 from "../../assets/EDRA.jpg";
import ServiceList from "./ServiceList";
import { useState } from "react";
import { useMemo } from "react";
import Reconciliation from "./Reconciliation/Reconciliation";
import { Provider } from "react-redux";
import { store } from "../../store/store";

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
          // "Comparing and aligning data from various sources to ensure accuracy, consistency, and reliable insights for effective decision-making.",
          "Analyzing data to understand its characteristics, patterns, and quality for better decision-making and data management.",
        onClick: reconciliationHandler,
      },
      {
        id: 2,
        img: img1,
        alt: "Profiling",
        header: "Data Profiling",
        content:
          "Analyzing data to understand its characteristics, patterns, and quality for better decision-making and data management.",
        onClick: profilingHandler,
      },
      {
        id: 3,
        img: img2,
        alt: "Transformation",
        header: "Data Transformation",
        content:
        "Analyzing data to understand its characteristics, patterns, and quality for better decision-making and data management.",
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
    return (
      <Provider store={store}>
        <Reconciliation />
      </Provider>
    );
  }

  return <section className={styles.section}>{service}</section>;
};

export default Services;
