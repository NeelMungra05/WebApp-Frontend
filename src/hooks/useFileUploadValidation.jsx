import { useSelector } from "react-redux";

const DEFAULT_FILE_COUNT = {
  postload: 5,
  preload: 5,
  financial: 8,
};

const useFileUploadValidation = ({ type, reconSelected }) => {
  const files = useSelector((state) => {
    return type === "source" ? state.files.sourceFile : state.files.targetFile;
  });

  const isNotZero = files.length !== 0;

  const isValidFileFormat = files.every(
    (file) =>
      file.name.split(".")[file.name.split(".").length - 1].toLowerCase() ===
      "xlsx"
  );

  const isLess = files.length <= DEFAULT_FILE_COUNT[reconSelected];

  const areLessThan50MB = files.every((file) => {
    const fileSize = file.size / (1024 * 1024);
    return fileSize <= 50;
  });

  return {
    isLess,
    isNotZero,
    areLessThan50MB,
    isValidFileFormat,
    defaultReconFileCount: DEFAULT_FILE_COUNT[reconSelected],
    fileCount: files.length,
  };
};

export default useFileUploadValidation;
