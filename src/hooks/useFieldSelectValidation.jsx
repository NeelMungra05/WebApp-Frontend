import { useSelector } from "react-redux";

/**
 * Custom React hook for field selection validation.
 *
 * @returns {Object} Validation object containing properties for each validation check.
 * @property {boolean} hasSelectedSourceRF - Indicates if at least one source field has RF property selected.
 * @property {boolean} hasSelectedSourcePK - Indicates if at least one source field has PK property selected.
 * @property {boolean} hasSelectedTargetRF - Indicates if at least one target field has RF property selected.
 * @property {boolean} hasSelectedTargetPK - Indicates if at least one target field has PK property selected.
 * @property {boolean} hasSelectedSourceGB - Indicates if at least one source field has GB property selected (for financial recon).
 * @property {boolean} hasSelectedSourceAB - Indicates if at least one source field has AB property selected (for financial recon).
 * @property {boolean} hasSelectedTargetGB - Indicates if at least one target field has GB property selected (for financial recon).
 * @property {boolean} hasSelectedTargetAB - Indicates if at least one target field has AB property selected (for financial recon).
 */
const useFieldSelectValidation = () => {
  const reconType = useSelector((state) => state.subService.reconType);
  const reconSelected = reconType.financial ? "financial" : "nonFinancial";
  const sourceFields = useSelector((state) => state.fields.sourceFields);
  const targetFields = useSelector((state) => state.fields.targetFields);
  /**
   * Helper function to create validation based on the specified property.
   *
   * @param {Object} fields - The fields object to validate.
   * @param {string} property - The property to check (e.g., "RF" or "PK").
   * @returns {boolean} True if at least one field has the specified property, false otherwise.
   */
  const createValidation = (fields, property) =>
    Object.keys(fields).every((key) =>
      Object.values(fields[key]).some((val) => val[property] === true)
    );

  // List of properties based on reconSelected
  const properties =
    reconSelected === "financial" ? ["GB", "AB"] : ["RF", "PK"];

  /**
   * Generate validations object by reducing the properties.
   *
   * @type {Object}
   */
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
