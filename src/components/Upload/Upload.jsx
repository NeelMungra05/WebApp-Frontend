import React from "react";
import FileUpload from "../FileUpload/FileUpload";
import styles from "./Upload.module.css";

const Upload = () => {
  return (
    <div className={styles.uploader}>
     
      <div className={styles.uploader__source}>
      <h3 >Source Files Upload</h3>
        <FileUpload label=" " 
        accept=".xlsx" 
         />
      </div>
      
      <div className={styles.uploader__target}>
      <h3>Target Files Upload</h3>  
        <FileUpload
          label=" "
          accept=".xlsx"
          isSource={false}
        />
      </div>
    </div>
  );
};

export default Upload;
