import React from "react";
import { Button } from "@material-ui/core";

const ViewBudget = (props) => {
  return (
    <>
      <span>Budget : ${props.budget}</span>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        onClick={props.editClickHandler}
      >
        Edit
      </Button>
    </>
  );
};

export default ViewBudget;
