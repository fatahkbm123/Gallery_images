import React from "react";
import {
  FormControl,
  InputLabel,
  Input,
  IconButton,
  makeStyles,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles({
  input: {
    width: "50%",
    "& .MuiFormLabel-root.Mui-focused": {
      color: "black",
    },
    "& .MuiInput": {
      color: "black",
      fontWeight: "bold",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "black",
    },
    "& .MuiInputLabel-formControl": {
      top: "10px",
    },
  },
});

function SearchInput({ values, setValues, onClick }) {
  const classes = useStyles();
  return (
    <FormControl fullWidth className={classes.input}>
      <InputLabel htmlFor="standard-adornment-amount">
        Search Images...
      </InputLabel>
      <Input
        id="standard-adornment-amount"
        value={values}
        onChange={setValues}
        endAdornment={
          <IconButton onClick={onClick}>
            <SearchIcon />
          </IconButton>
        }
      />
    </FormControl>
  );
}

export default SearchInput;
