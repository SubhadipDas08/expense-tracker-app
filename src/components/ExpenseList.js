import React, { useContext } from "react";
import ExpenseItem from "./ExpenseItem";
import { ContextState } from "../context/ContextState";

const ExpenseList = () => {
  const { expenses } = useContext(ContextState);

  return (
    <>
      <ul style={{ padding: "0", margin: "0" }}>
        {expenses.map((expense) => (
          <ExpenseItem
            id={expense.id}
            name={expense.name}
            cost={expense.cost}
            key={expense.id}
          />
        ))}
      </ul>
    </>
  );
};

export default ExpenseList;
