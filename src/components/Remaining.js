import React, { useContext } from "react";
import { ContextState } from "../context/ContextState";

const Remaining = () => {
  const { expenses, budget } = useContext(ContextState);

  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);

  const alert = totalExpenses > budget ? "alert-danger" : "alert-success";

  return (
    <div className={`alert p-3 ${alert}`}>
      <span>Remaining : ${budget - totalExpenses}</span>
    </div>
  );
};

export default Remaining;
