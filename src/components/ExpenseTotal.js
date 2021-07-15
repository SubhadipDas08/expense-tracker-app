import React, { useContext } from "react";
import { ContextState } from "../context/ContextState";

const ExpenseTotal = (props) => {
  const { expenses } = useContext(ContextState);

  const total = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);

  return (
    <div className="alert alert-primary p-3">
      <span>Expenses so far : ${total}</span>
    </div>
  );
};

export default ExpenseTotal;
