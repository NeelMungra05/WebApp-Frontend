import { useSelector } from "react-redux";

const useFieldSelectValidation = () => {
  const sourceFields = useSelector((state) => state.fields.sourceFields);
  const targetFields = useSelector((state) => state.fields.targetFields);

  const createValidation = (fields, property) =>
    Object.keys(fields).every((key) =>
      Object.values(fields[key]).some((val) => val[property] === true)
    );

  const properties = ["RF", "PK"];
  const validations = properties.reduce((acc, property) => {
    acc[`hasSelectedSource${property}`] = createValidation(
      sourceFields,
      property
    );
    acc[`hasSelectedTarget${property}`] = createValidation(
      targetFields,
      property
    );
    return acc;
  }, {});
  return validations;
};
export default useFieldSelectValidation;
