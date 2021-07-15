import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const EditBudget = (props) => {
  const [value, setValue] = useState(props.budget);

  const useStyles = makeStyles({
    margin: {
      marginLeft: "1rem",
    },
  });
  const classes = useStyles();
  return (
    <>
      <TextField
        required={true}
        color="primary"
        type="number"
        id="name"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <Button
        className={classes.margin}
        variant="contained"
        size="large"
        color="primary"
        onClick={() => props.saveClickHandler(value)}
      >
        Save
      </Button>
    </>
  );
};

export default EditBudget;
