import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fieldsAction } from "../store/fields-slice";

const useReadFields = ({ type = "source", setLoading }) => {
  const sourceFiles = useSelector((state) => state.files.sourceFile);
  console.log("sourcefiles", sourceFiles);
  const targetFiles = useSelector((state) => state.files.targetFile);
  console.log("targetfiles", targetFiles);
  const dispatch = useDispatch();

  const resultReducer = useCallback((result) => {
    const newResult = Object.keys(result).reduce((acc, filename) => {
      const columns = result[filename];
      console.log("Processing filename:", filename);
      console.log("Columns:", columns);

      const fieldObj = columns.reduce((resAcc, resCurr) => {
        resAcc[resCurr] = {
          name: resCurr,
          RF: false,
          PK: false,
          PKDisabled: true,
        };
        return resAcc;
      }, {});

      acc[filename] = {
        ...fieldObj,
      };

      return acc;
    }, {});

    return newResult;
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = "http://127.0.0.1:8000/files/headers/";
        const listOfSource = sourceFiles.map((item) => item.name);
        const listOfTarget = targetFiles.map((item) => item.name);
        const requestData = {
          sourceFiles: listOfSource,
          targetFiles: listOfTarget,
        };
        console.log("requestData", requestData);

        const files = type === "source" ? listOfSource : listOfTarget;
        const response = await fetch(apiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestData),
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        console.log("Response", data);

        const headersData =
          type === "source" ? data.sourceHeaders : data.targetHeaders;

        if (headersData) {
          const reduceResult = resultReducer(headersData);

          dispatch(
            type === "source"
              ? fieldsAction.addSourceFields(reduceResult)
              : fieldsAction.addTargetFields(reduceResult)
          );

          if (type === "target") {
            setLoading(false);
          }
        } else {
          console.error("Invalid data format received");
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching column names:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [type, sourceFiles, targetFiles, dispatch, resultReducer, setLoading]);
};

export default useReadFields;
