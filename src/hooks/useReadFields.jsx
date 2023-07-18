import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as xlsx from "xlsx";
import { fieldsAction } from "../store/fields-slice";

const useReadFields = ({ type = "source" }) => {
  let files;

  if (type === "source") {
    files = useSelector((state) => state.files.sourceFile);
  } else {
    files = useSelector((state) => state.files.targetFile);
  }

  const dispatch = useDispatch();

  const xlsxReader = useCallback((result) => {
    const workBook = xlsx.read(result, { type: "binary" });
    console.log("Called xlsxReader");
    const rowObjArr = xlsx.utils.sheet_to_json(
      workBook.Sheets[workBook.SheetNames[0]]
    );

    return Object.keys(rowObjArr[0]);
  }, []);

  const resultReducer = useCallback((result) => {
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
  }, []);

  useEffect(() => {
    const promises = files.map((file) => {
      return new Promise((resolve, reject) => {
        const fileReader = new FileReader();

        fileReader.onload = (e) => {
          const { result } = e.target;

          resolve({
            name: file.name,
            result: xlsxReader(result),
          });
        };

        fileReader.readAsBinaryString(file);
      });
    });

    Promise.all(promises).then((result) => {
      const reduceResult = resultReducer(result);

      dispatch(
        type === "source"
          ? fieldsAction.addSourceFields(reduceResult)
          : fieldsAction.addTargetFields(reduceResult)
      );
    });
  }, [files]);
};

export default useReadFields;
