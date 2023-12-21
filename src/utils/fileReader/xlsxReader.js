import * as xlsx from "xlsx";

/**
 * Parses data from a FileReader "onload" event into an array of object keys of the 1st row.
 *
 * @function
 * @param {string} result The data loaded from the FileReader. This is assumed to be the binary content of XLSX file
 * @returns {string[]} An array containing the first row(column names) of the parsed file.
 *
 */
const xlsxReader = (result) => {
  const workBook = xlsx.read(result, { type: "binary" });
  const rowObjArr = xlsx.utils.sheet_to_json(
    workBook.Sheets[workBook.SheetNames[0]]
  );

  return Object.keys(rowObjArr[0]);
};
export { xlsxReader };
