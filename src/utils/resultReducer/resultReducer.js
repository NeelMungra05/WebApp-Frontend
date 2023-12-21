/**
 * @typedef {Object} Financial
 * @property {string} name
 * @property {boolean} GB
 * @property {boolean} AB
 * @property {boolean} GBDisabled
 * @property {boolean} ABDisabled
 */

/**
 * @typedef {Object} NonFinancial
 * @property {string} name
 * @property {boolean} RF
 * @property {boolean} PK
 * @property {boolean} PKDisabled
 */

/**
 *
 * Process an array of string values and transforms them into object of objects.
 *
 * @function
 *
 * @param {string[]} result An array of strings representing the columns name
 * @param {"financial" | "nonFinancial"} reconType It will conatin what type of recon has been selected
 * @returns {Object} An object of objects, where each inner object has the structure:
 * {
 *  name:string(field name),
 *  RF: boolean (initial value false),
 *  PK: boolean (initial value false),
 *  PKDisabled: boolean (intial value true)
 * }
 *
 * @example
 * const processedFieldNames = resultReducer(["KUNNR","LIFNR","WERKS","AUGRP"])
 */
const resultReducer = (result, reconType) => {
  const newResult = result.reduce((acc, curr) => {
    const fieldObj = curr.result.reduce((resAcc, resCurr) => {
      resAcc[resCurr] = { ...resultObjectGenerator(resCurr, reconType) };
      return resAcc;
    }, {});

    acc[curr.name] = {
      ...fieldObj,
    };

    return acc;
  }, {});

  return newResult;
};

/**
 * @function
 * Will return result object based on what is passed in field name and what type of reconciliation has been selected.
 *
 * @param {string} name name - It will be name of the field.
 * @param {string} reconType reconType - It will be value of what reconType is.
 *
 * @returns {Financial | NonFinancial} - Result object will be based on what is reconType:-
 *  if Financial then return type would be
 * {
 *  name: string,
 *  GB:boolean,
 *  AB:boolean,
 *  GBDisabled: boolean,
 *  ABDisabled: boolean
 * }
 * if NonFinancial then return type would be
 * {
 *  name: string,
 *  RF: boolean,
 *  PK: boolean,
 *  PKDisabled: boolean
 * }
 */
const resultObjectGenerator = (name, reconType) => {
  if (reconType === "financial") {
    return {
      name,
      GB: false,
      AB: false,
      GBDisabled: false,
      ABDisabled: false,
    };
  }
  return {
    name,
    RF: false,
    PK: false,
    PKDisabled: true,
  };
};

export { resultReducer };
