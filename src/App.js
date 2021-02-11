import React from "react";
import { CssBaseline, makeStyles } from "@material-ui/core";
import ImageSearch from "./components/ImageSearch";

const useStyles = makeStyles({
  root: {
    height: "90vh",
    background: `url(${process.env.PUBLIC_URL + "/assets/bg2.jpg"})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
});

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <ImageSearch />
    </div>
  );
}

export default App;
