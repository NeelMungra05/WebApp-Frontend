import React from "react";
import FileUpload from "../FileUpload/FileUpload";

const Upload = () => {
  return (
    <div>
      <FileUpload lable=" " accept=".xlsx" heading="Target Files Upload" />
      <FileUpload label=" " accept=".xlsx" heading="Source Files Upload" />
    </div>
  );
};

export default Upload;
