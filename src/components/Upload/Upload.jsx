import React from "react";
import { useDispatch } from "react-redux";
import useFileUploadValidation from "../../hooks/useFileUploadValidation";
import FileUpload from "../FileUpload/FileUpload";
import styles from "./Upload.module.css";
import { formButtonAction } from "../../store/formButton";

const Upload = () => {
  const sourceValidation = useFileUploadValidation({ type: "source" });
  const targetValidation = useFileUploadValidation({ type: "target" });
  const dispatch = useDispatch();

  const isValid = Object.values(sourceValidation).every(
    (condition, idx) =>
      condition === true && Object.values(targetValidation)[idx] === condition
  );

  console.table(sourceValidation && targetValidation);
  dispatch(formButtonAction.nextButton(isValid));

  return (
    <div className={styles.uploader}>
      <div className={styles.uploader__source}>
        {!sourceValidation.isValidFileFormat && (
          <p className={styles.error}>File should be in xlsx format only.</p>
        )}
        <FileUpload label=" " accept=".xlsx" heading="Source File Upload" />
      </div>

      <div className={styles.uploader__target}>
        <FileUpload
          label=" "
          accept=".xlsx"
          heading="Target File Upload"
          isSource={false}
        />
      </div>
    </div>
  );
};

export default Upload;
