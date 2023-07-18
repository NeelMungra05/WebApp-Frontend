import { useSelector } from "react-redux";

const DEFAULT_STATE = {
  isLessThan5: true,
  isNotZero: false,
  areLessThan50MB: true,
  isValidFileFormat: false,
};

const useFileUploadValidation = ({ type }) => {
  const files = useSelector((state) => {
    return type === "source" ? state.files.sourceFile : state.files.targetFile;
  });

  const isNotZero = files.length !== 0;

  const isValidFileFormat = files.every(
    (file) =>
      file.name.split(".")[file.name.split(".").length - 1].toLowerCase() ===
      "xlsx"
  );

  const isLessThan5 = files.length <= 5;

  const areLessThan50MB = files.every((file) => {
    const fileSize = file.size / (1024 * 1024);
    return fileSize <= 50;
  });

  return {
    isLessThan5,
    isNotZero,
    areLessThan50MB,
    isValidFileFormat,
  };
};

export default useFileUploadValidation;
