import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fieldsAction } from "../store/fields-slice";
import { readSingleFile } from "../utils/fileReader/fileReader";
import { resultReducer } from "../utils/resultReducer/resultReducer";

/**
 * @customHook
 * Custom hook for reading the files uploaded and dispatching it to the store.
 *
 * @returns {Boolean} loading - Will indicate whether to use spinner or not.
 *
 * @example
 * useReadFields();
 */
const useReadFields = () => {
  const files = useSelector((state) => state.files);

  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  /**
   * @function
   * Reads the files and then pass the data to state via action which is an instance of fieldsAction
   *
   * @param {Function} action action - It will be instance of which state action to be used for fieldsAction
   * @param {File[]} fileList fileList - It will be any array of file object
   * @returns {void}  Void
   */
  const readFiles = async (action, fileList) => {
    const result = await Promise.all(fileList.map(readSingleFile));
    const finalResult = resultReducer(result);
    dispatch(action(finalResult));
  };

  /**
   * Perrform side effect in function component
   *
   * @function
   * @name useEffect
   * @param {Function} effect - The function containing the side effect code
   * @param {Array} dependencies - An optional array of dependencies for the effect
   * @returns {void}
   *
   */
  useEffect(() => {
    const sourceFilesList = files.sourceFile;
    const targetFilesList = files.targetFile;

    readFiles(fieldsAction.addSourceFields, sourceFilesList);
    readFiles(fieldsAction.addTargetFields, targetFilesList);

    setLoading(false);
  }, [files]);

  return loading;
};

export default useReadFields;
