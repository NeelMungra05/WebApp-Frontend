import React from "react";
import { useState, useMemo } from "react";
import img from "../assets/recon.png";
import img1 from "../assets/profiling.png";
import img2 from "../assets/transformation.png";

const useServiceHandler = () => {
  const [serviceSelected, setServiceSelected] = useState({
    reconciliation: {
      selected: false,
      type: { postLoad: false, financial: false },
    },
    profiling: false,
    transformation: false,
  });

  /**
   *
   * @param {string} serviceType - The type of service selected
   * @param {string} serviceModule - The name of subservice selected
   */
  const serviceHandler = (serviceType, serviceModule) => {
    setServiceSelected({
      reconciliation:
        serviceType === "reconciliation"
          ? {
              selected: true,
              type: {
                postLoad: serviceModule === "postload",
                financial: serviceModule === "financial",
              },
            }
          : false,
      profiling: serviceType === "profiling",
      transformation: serviceType === "transformation",
    });
  };

  const MAIN_SERVICE = useMemo(() => {
    return [
      {
        id: 1,
        img: img,
        alt: "Reconciliation",
        header: "Data Reconciliation",
        content:
          // "Comparing and aligning data from various sources to ensure accuracy, consistency, and reliable insights for effective decision-making.",
          "Unlocking Data Precision: Introducing Our State-of-the-Art Reconciliation Tool for Streamlined Accuracy and Unparalleled Insights.",
        onClick: () => serviceHandler("reconciliation"),
      },
      {
        id: 2,
        img: img1,
        alt: "Profiling",
        header: "Data Profiling",
        content:
          "Mastering Data Excellence: Unveiling Our Dynamic Data Profiling & Quality Analysis Tool for Informed Decision-Making & Precision!",
        onClick: () => serviceHandler("profiling"),
      },
      {
        id: 3,
        img: img2,
        alt: "Transformation",
        header: "Data Transformation",
        content:
          "Align today's data with tomorrow's Process : Unleashing the Future of Data with Our Transformative Tool for Seamless Data Integration and Analysis.",
        onClick: () => serviceHandler("transformation"),
      },
    ];
  }, [serviceHandler]);

  const SUB_SERVICE = useMemo(() => {
    return [
      {
        id: 1,
        img: img,
        alt: "Preload Reconciliation",
        header: "Preload Reconciliation",
        content:
          "Align today's data with tomorrow's Process : Unleashing the Future of Data with Our Transformative Tool for Seamless Data Integration and Analysis.",
        onClick: () => serviceHandler("reconciliation", "postload"),
      },
      {
        id: 2,
        img: img,
        alt: "Financial Reconciliation",
        header: "Financial Reconciliation",
        content:
          "Align today's data with tomorrow's Process : Unleashing the Future of Data with Our Transformative Tool for Seamless Data Integration and Analysis.",
        onClick: () => serviceHandler("reconciliation", "financial"),
      },
    ];
  }, [serviceHandler]);

  return {
    MAIN_SERVICE,
    SUB_SERVICE,
    serviceSelected,
  };
};

export default useServiceHandler;
