import React from "react";
import { useStyles } from "./style.js";
import { Container, TextField } from "@material-ui/core";

const Search = ({ name, value, onChange, placeholder }) => {
  const classes = useStyles();
  return (
    <Container>
      <form className={classes.root} noValidate>
        <TextField
          value={value}
          onChange={onChange}
          name={name}
          label={placeholder}
          variant="outlined"
        />
      </form>
    </Container>
  );
};

export default Search;
