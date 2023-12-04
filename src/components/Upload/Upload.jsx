import React from "react";
import { useDispatch, useSelector } from "react-redux";
import useFileUploadValidation from "../../hooks/useFileUploadValidation";
import FileUpload from "../FileUpload/FileUpload";
import styles from "./Upload.module.css";
import { formButtonAction } from "../../store/formButton";
import useFormButton from "../../hooks/useFormButton";
import CustomError from "../CustomError/CustomError";

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
    reconSelected === "financial"
      ? sourceValidation.fileCount === targetValidation.fileCount
      : true;

  useFormButton({
    isValid: isValid && isSourceAndTargetFileCountSame,
    buttonType: "next",
  });

  const renderUploader = (validation, label, heading, isSource = true) => (
    <div
      className={isSource ? styles.uploader__source : styles.uploader__target}>
      {!validation.isValidFileFormat && (
        <CustomError message="File should be in xlsx format only." />
      )}
      {!validation.areLessThan50MB && (
        <CustomError message="All file size should be less than 50 MB." />
      )}
      {!validation.isLessThan5 && (
        <CustomError message="Maximum of only 5 files can be uploaded." />
      )}
      <FileUpload
        label={label}
        accept=".xlsx"
        heading={heading}
        isSource={isSource}
      />
    </div>
  );

  return (
    <div className={styles.uploader}>
      {renderUploader(sourceValidation, " ", "Source File Upload")}
      {renderUploader(targetValidation, " ", "Target File Upload", false)}
    </div>
  );
};

export default Upload;
