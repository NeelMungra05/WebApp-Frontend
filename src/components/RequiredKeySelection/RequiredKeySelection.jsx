import React from "react";
import { useDispatch } from "react-redux";
import { reconJoinAction } from "../../store/recon-join-slice";
import AllFieldSelector from "../AllFieldSelector/AllFieldSelector";

const RequiredKeySelection = () => {
  const dispatch = useDispatch();

  const changeField = (left, fields) => {
    const changer = left
      ? reconJoinAction.changeSourceOrder
      : reconJoinAction.changeTargetOrder;

    console.log(fields);
    dispatch(changer(fields));
  };

  return (
    <div>
      <AllFieldSelector
        title="Required Fields"
        fieldKey="RF"
        onSelection={changeField}
      />
    </div>
  );
};

export default RequiredKeySelection;
