import React from "react";
import { useDispatch } from "react-redux";
import { reconJoinAction } from "../../store/recon-join-slice";
import AllFieldSelector from "../AllFieldSelector/AllFieldSelector";

const PrimaryKeySelection = () => {
  const dispatch = useDispatch();

  const changeField = (left, fields) => {
    const changer = left
      ? reconJoinAction.changeSourcePK
      : reconJoinAction.changeTargetPK;

    console.log(fields);
    dispatch(changer(fields));
  };

  return (
    <div>
      <AllFieldSelector
        title="Primary Key Selection"
        fieldKey="PK"
        onSelection={changeField}
      />
    </div>
  );
};

export default PrimaryKeySelection;
