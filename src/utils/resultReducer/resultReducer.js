/**
 * Process an array of string values and transforms them into object of objects.
 *
 * @function
 *
 * @param {string[]} result An array of strings representing the columns name
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
const resultReducer = (result) => {
  const newResult = result.reduce((acc, curr) => {
    const fieldObj = curr.result.reduce((resAcc, resCurr) => {
      resAcc[resCurr] = {
        name: resCurr,
        RF: false,
        PK: false,
        PKDisabled: true,
      };
      return resAcc;
    }, {});

    acc[curr.name] = {
      ...fieldObj,
    };

    return acc;
  }, {});

  return newResult;
};

export { resultReducer };
