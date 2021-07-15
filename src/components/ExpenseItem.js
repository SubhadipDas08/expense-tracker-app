import React, { useContext } from "react";
import { TiDelete } from "react-icons/ti";
import { ContextState } from "../context/ContextState";

const ExpenseItem = (props) => {
  const { dispatch } = useContext(ContextState);

  const expenseDeleteHandler = () => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: props.id,
    });
  };
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {props.name}
      <div>
        <span
          style={{
            margin: "0.5rem",
          }}
        >
          ${props.cost}
        </span>
        <TiDelete
          style={{ color: "#f50057" }}
          cursor="pointer"
          size="1.5rem"
          onClick={expenseDeleteHandler}
        />
      </div>
    </li>
  );
};

export default ExpenseItem;
