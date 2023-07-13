import { useDispatch, useSelector } from "react-redux";

const useFieldSelectValidation = () => {
  const dispatch = useDispatch();
  const sourceFields = useSelector((state) => state.fields.sourceFields);
  const targetFields = useSelector((state) => state.fields.targetFields);

  const hasSelectedSourceRF =
    Object.keys(sourceFields).filter((key) => {
      return (
        Object.values(sourceFields[key]).filter((val) => val.RF === true)
          .length > 0
      );
    }).length > 0;

  const hasSelectedTargetRF =
    Object.keys(targetFields).filter((key) => {
      return (
        Object.values(targetFields[key]).filter((val) => val.RF === true)
          .length > 0
      );
    }).length > 0;

  const hasSelectedSourcePK =
    Object.keys(sourceFields).filter((key) => {
      return (
        Object.values(sourceFields[key]).filter((val) => val.PK === true)
          .length > 0
      );
    }).length > 0;

  return {
    hasSelectedSourceRF,
    hasSelectedTargetRF,
  };
};

export default useFieldSelectValidation;
