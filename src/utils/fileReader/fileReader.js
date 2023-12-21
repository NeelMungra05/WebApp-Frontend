import { xlsxReader } from "./xlsxReader";

/**
 * @function
 * Will read the file and return promise if resolved will contain the content of file, if rejected will contain error.
 *
 * @param {File} file The file object from the FileList array.
 * @returns {Promise} Contains the result of reading from the file.
 */
const readSingleFile = async (file) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();

    fileReader.onerror = (err) => reject(err);

    fileReader.onload = ({ target }) =>
      resolve({ name: file.name, result: xlsxReader(target.result) });

    fileReader.readAsBinaryString(file);
  });
};
export { readSingleFile };
