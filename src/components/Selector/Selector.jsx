import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useFieldSelectValidation from "../../hooks/useFieldSelectValidation";
import useFormButton from "../../hooks/useFormButton";
import useReadFields from "../../hooks/useReadFields";
import { formButtonAction } from "../../store/formButton";
import FieldSelector from "../FieldSelector/FieldSelector";
import Spinner from "../Spinner/Spinner";

const Selector = () => {
  const [loading, setLoading] = useState(true);

  useReadFields({ type: "source", setLoading });
  useReadFields({ type: "target", setLoading });
  const dispatch = useDispatch();
  const validations = useFieldSelectValidation();

  const isValid = Object.values(validations).reduce(
    (prev, curr) => prev && curr
  );

  console.table(validations);

  useFormButton({ isValid, buttonType: "next" });

  const fieldSelectors = (
    <main>
      <FieldSelector heading="Source Fields Selection" type="source" />
      <hr />
      <FieldSelector heading="Target Fields Selection" type="target" />
    </main>
  );

  const spinner = <Spinner />;

  return loading ? spinner : fieldSelectors;
};

export default Selector;
