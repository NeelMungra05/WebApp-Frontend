import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useFieldSelectValidation from "../../hooks/useFieldSelectValidation";
import useFormButton from "../../hooks/useFormButton";
import useReadFields from "../../hooks/useReadFields";
import { formButtonAction } from "../../store/formButton";
import FieldSelector from "../FieldSelector/FieldSelector";

const Selector = () => {
  useReadFields({ type: "source" });
  useReadFields({ type: "target" });
  const dispatch = useDispatch();
  const validations = useFieldSelectValidation();

  const isValid = Object.values(validations).reduce(
    (prev, curr) => prev && curr
  );

  console.table(validations);

  useFormButton({ isValid, buttonType: "next" });

  return (
    <main>
      <FieldSelector heading="Source Fields Selection" type="source" />
      <hr />
      <FieldSelector heading="Target Fields Selection" type="target" />
    </main>
  );
};

export default Selector;
