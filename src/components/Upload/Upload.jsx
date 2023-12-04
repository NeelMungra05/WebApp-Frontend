import React from "react";
import { useDispatch, useSelector } from "react-redux";
import useFileUploadValidation from "../../hooks/useFileUploadValidation";
import FileUpload from "../FileUpload/FileUpload";
import styles from "./Upload.module.css";
import { formButtonAction } from "../../store/formButton";
import useFormButton from "../../hooks/useFormButton";

const Upload = () => {
  const reconType = useSelector((state) => state.subService.reconType);

  const reconSelected = Object.keys(reconType).find((key) => reconType[key]);

  const sourceValidation = useFileUploadValidation({
    type: "source",
    reconSelected,
  });
  const targetValidation = useFileUploadValidation({
    type: "target",
    reconSelected,
  });
  const dispatch = useDispatch();

  const isValid = Object.entries(sourceValidation).every(
    ([key, condition], idx) =>
      key !== "defaultReconFileCount" && key !== "fileCount"
        ? condition === true &&
          Object.values(targetValidation)[idx] === condition
        : true
  );

  const isSourceAndTargetFileCountSame =
    reconSelected === "financial" &&
    sourceValidation.fileCount === targetValidation.fileCount;

  console.table(isValid, sourceValidation, targetValidation);

  useFormButton({
    isValid: isValid && isSourceAndTargetFileCountSame,
    buttonType: "next",
  });

  return (
    <div className={styles.uploader}>
      <div className={styles.uploader__source}>
        {!sourceValidation.isValidFileFormat && (
          <p className={styles.error}>File should be in xlsx format only.</p>
        )}
        {!sourceValidation.areLessThan50MB && (
          <p className={styles.error}>
            All file size should be less than 50 mb.
          </p>
        )}
        {!sourceValidation.isLessThan5 && (
          <p className={styles.error}>Maximum of only 5 files can be upload.</p>
        )}
        <FileUpload label=" " accept=".xlsx" heading="Source File Upload" />
      </div>

      <div className={styles.uploader__target}>
        {!targetValidation.isValidFileFormat && (
          <p className={styles.error}>File should be in xlsx format only.</p>
        )}
        {!targetValidation.areLessThan50MB && (
          <p className={styles.error}>
            All file size should be less than 50 mb.
          </p>
        )}
        {!targetValidation.isLessThan5 && (
          <p className={styles.error}>Maximum of only 5 files can be upload.</p>
        )}
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
