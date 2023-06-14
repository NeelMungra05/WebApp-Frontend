import React from "react";
import FileItem from "./FileItem";

const FileList = (props) => {
  const { files } = props;

  const content = files.map((file) => (
    <FileItem name={file.name} onRemove={props.onRemove} />
  ));

  return (
    <div>
      <ul>{content}</ul>
    </div>
  );
};

export default FileList;
