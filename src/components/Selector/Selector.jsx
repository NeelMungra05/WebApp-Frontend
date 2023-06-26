import React, { useCallback } from "react";
import FieldSelector from "../FieldSelector/FieldSelector";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import * as xlsx from "xlsx";
import { fieldsAction } from "../../store/fields-slice";

const Selector = () => {
  const files = useSelector((state) => state.files.sourceFile);
  const dispatch = useDispatch();

  const xlsxReader = useCallback((result) => {
    const workBook = xlsx.read(result, { type: "binary" });

    const rowObjArr = xlsx.utils.sheet_to_json(
      workBook.Sheets[workBook.SheetNames[0]]
    );

    return Object.keys(rowObjArr[0]);
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
      dispatch(fieldsAction.addSourceFields(result));
    });
  }, [files]);

  return (
    <main>
      <FieldSelector />
    </main>
  );
};

export default Selector;
