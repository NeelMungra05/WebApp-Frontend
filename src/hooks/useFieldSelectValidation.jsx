import { useMemo } from "react";
import { useCallback } from "react";
import { useSelector } from "react-redux";

const useFieldSelectValidation = () => {
  const sourceFields = useSelector((state) => state.fields.sourceFields);
  const targetFields = useSelector((state) => state.fields.targetFields);

  const hasSelectedFields = (fields, property) =>
    Object.values(fields).some((field) =>
      Object.values(field).some((val) => val[property] === true)
    );

  const hasSelectedSourceRF = hasSelectedFields(sourceFields, "RF");
  const hasSelectedTargetRF = hasSelectedFields(targetFields, "RF");
  const hasSelectedSourcePK = hasSelectedFields(sourceFields, "PK");
  const hasSelectedTargetPK = hasSelectedFields(targetFields, "PK");

  return {
    hasSelectedSourceRF,
    hasSelectedTargetRF,
    hasSelectedTargetPK,
    hasSelectedSourcePK,
  };
};

export default useFieldSelectValidation;
