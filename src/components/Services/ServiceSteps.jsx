import React, { useCallback } from "react";
import Upload from "../Upload/Upload";
import Selector from "../Selector/Selector";
import SourceAndTargetTables from "../SourceAndTargetTables/SourceAndTargetTables";
import PrimaryKeySelection from "../PrimaryKeySelection/PrimaryKeySelection";
import RequiredKeySelection from "../RequiredKeySelection/RequiredKeySelection";
import SummaryData from "../SummaryData/SummaryData";

const getContentForPostLoad = (steps) => {
  switch (steps) {
    case 1:
      return <Upload />;
    case 2:
      return <Selector />;
    case 3:
      return <SourceAndTargetTables />;
    case 4:
      return <PrimaryKeySelection />;
    case 5:
      return <RequiredKeySelection />;
    case 6:
      return <SummaryData />;
    default:
      return null;
  }
};

const getContentForFinancial = (steps) => {
  switch (steps) {
    case 1:
      return <Upload />;
    case 2:
      return <Selector />;
    case 3:
      return <RequiredKeySelection />;
    case 4:
      return <SummaryData />;
    default:
      return null;
  }
};

const ServiceSteps = ({ steps, isPostLoad }) => {
  return isPostLoad
    ? getContentForPostLoad(steps)
    : getContentForFinancial(steps);
};

export default ServiceSteps;
