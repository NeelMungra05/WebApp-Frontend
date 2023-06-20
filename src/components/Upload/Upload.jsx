import React from "react";
import FileUpload from "../FileUpload/FileUpload";
import styles from "./Upload.module.css";

const Upload = () => {
  return (
    <div className={styles.uploader}>
     
      <div className={styles.uploader__source}>
   
        <FileUpload 
        label=" " 
        accept=".xlsx" 
        heading ="Source File Upload"
         />
      </div>
      
      <div className={styles.uploader__target}>
     
        <FileUpload
          label=" "
          accept=".xlsx"
          heading = "Target files upload"
          isSource={false}
        />
      </div>
    </div>
  );
};

export default Upload;
