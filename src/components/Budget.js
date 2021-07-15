import React, { useState, useContext } from "react";
import ViewBudget from "./ViewBudget";
import EditBudget from "./EditBudget";
import { ContextState } from "../context/ContextState";

const Budget = () => {
  const { budget, dispatch } = useContext(ContextState);
  const [isEditing, setIsEditing] = useState(false);

  const editClickHandler = () => {
    setIsEditing(true);
  };

  const saveClickHandler = (value) => {
    dispatch({
      type: "SET_BUDGET",
      payload: value,
    });
    setIsEditing(false);
  };

  return (
    <div className="alert alert-secondary p-2 d-flex align-items-center justify-content-between">
      {isEditing ? (
        <EditBudget saveClickHandler={saveClickHandler} budget={budget} />
      ) : (
        <ViewBudget editClickHandler={editClickHandler} budget={budget} />
      )}
    </div>
  );
};

export default Budget;
