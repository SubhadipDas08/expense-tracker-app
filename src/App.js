import React from "react";
import { ContextProvider } from "./context/ContextState";
import "bootstrap/dist/css/bootstrap.min.css";
import Budget from "./components/Budget";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import ExpenseTotal from "./components/ExpenseTotal";
import Remaining from "./components/Remaining";
import ExpenseList from "./components/ExpenseList";
import AddExpesne from "./components/AddExpesne";
import { Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const theme = createTheme({
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
  },
});

const useStyles = makeStyles({
  grid: {
    padding: "1px",
    background: "#cbd6df",
  },
});

const App = () => {
  const classes = useStyles();
  return (
    <ContextProvider>
      <ThemeProvider theme={theme}>
        <div className="container">
          <h1 className="mt-3">Expense Tracker</h1>
          <div className="row mt-3">
            <div className="col-sm">
              <Budget />
            </div>
            <div className="col-sm">
              <ExpenseTotal />
            </div>
            <div className="col-sm">
              <Remaining />
            </div>
          </div>
          <h1 className="mt-3">Expenses</h1>
          <div className="row">
            <Card className={classes.grid}>
              <ExpenseList />
            </Card>
          </div>
          <h2 className="mt-3">Add Expense</h2>
          <div className="row mt-3">
            <AddExpesne />
          </div>
        </div>
      </ThemeProvider>
    </ContextProvider>
  );
};

export default App;
