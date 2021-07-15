import { createContext, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  budget: 10000,
  expenses: [
    { id: uuidv4(), name: "Laptop", cost: 799 },
    { id: uuidv4(), name: "Headphones", cost: 85 },
    { id: uuidv4(), name: "Phone", cost: 299 },
  ],
};

export const ContextReducer = (state, action) => {
  switch (action.type) {
    case "SET_BUDGET":
      return {
        ...state,
        budget: action.payload,
      };
    case "DELETE_EXPENSE":
      return {
        ...state,
        expenses: state.expenses.filter(
          (expense) => expense.id !== action.payload
        ),
      };
    case "ADD_EXPENSE":
      return {
        ...state,
        expenses: [action.payload, ...state.expenses],
      };
    default:
      return state;
  }
};

export const ContextState = createContext();

export const ContextProvider = (props) => {
  const [state, dispatch] = useReducer(ContextReducer, initialState);

  return (
    <ContextState.Provider
      value={{
        expenses: state.expenses,
        budget: state.budget,
        dispatch,
      }}
    >
      {props.children}
    </ContextState.Provider>
  );
};
