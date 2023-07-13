import React from "react";
import useReadFields from "../../hooks/useReadFields";
import FieldSelector from "../FieldSelector/FieldSelector";

const Selector = () => {
  useReadFields({ type: "source" });
  useReadFields({ type: "target" });

  return (
    <main>
      <FieldSelector heading="Source Fields Selection" type="source" />
      <hr />
      <FieldSelector heading="Target Fields Selection" type="target" />
    </main>
  );
};

export default Selector;
