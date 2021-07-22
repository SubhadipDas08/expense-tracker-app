import React, { useState, useContext } from "react";
import { ContextState } from "../context/ContextState";
import { v4 as uuidv4 } from "uuid";
import { TextField, Button, Card, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const AddExpesne = (props) => {
  const { dispatch } = useContext(ContextState);

  const [name, setName] = useState("");
  const [cost, setCost] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    const expense = {
      id: uuidv4(),
      name,
      cost: parseInt(cost),
    };
    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });
    setCost("");
    setName("");
  };

  const useStyles = makeStyles({
    button: {
      paddingTop: "0.7rem",
      paddingBottom: "0.7rem",
    },
    grid: {
      padding: "10px",
      background: "#cbd6df",
    },
    strech: {
      flexGrow: "1",
    },
  });

  const classes = useStyles();

  return (
    <form onSubmit={submitHandler}>
      <Card className={classes.grid}>
        {/* <CardContent className={classes.grid}> */}
        <Grid container direction="column" spacing={1}>
          <Grid
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            container
            item
          >
            <Grid item container spacing={2} xs={12} sm="auto">
              <Grid item className={classes.strech}>
                <TextField
                  size="small"
                  fullWidth={true}
                  label="Expense name"
                  color="secondary"
                  variant="filled"
                  placeholder="Enter the expense name"
                  required={true}
                  id="name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </Grid>
              <Grid item className={classes.strech}>
                <TextField
                  type="number"
                  size="small"
                  fullWidth={true}
                  label="Expense cost"
                  variant="filled"
                  required={true}
                  color="secondary"
                  placeholder="Enter the expense cost"
                  id="cost"
                  value={cost}
                  onChange={(event) => setCost(event.target.value)}
                />
              </Grid>
              <Grid item>
                <Button
                  type="submit"
                  className={classes.button}
                  variant="contained"
                  size="large"
                  color="secondary"
                >
                  Save
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {/* </CardContent> */}
      </Card>
    </form>
  );
};

export default AddExpesne;
