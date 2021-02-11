import React, { useState, useEffect, useRef } from "react";
import {
  makeStyles,
  FormControl,
  InputLabel,
  FormHelperText,
  MenuItem,
  Select,
  CircularProgress,
} from "@material-ui/core";
import SearchInput from "./SearchInput";
import Gallery from "./Gallery";
import { DataPage, DataCategory } from "../Data";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "80%",
    margin: "0 auto",
    justifyContent: "center",
    alignItems: "center",
    height: "90vh",
    flexDirection: "column",
  },
  title: {
    fontFamily: "Bebas Neue, cursive",
    marginTop: "-50px",
    marginBottom: "20px",
    fontSize: "3.5rem",
  },

  formSelect: {
    display: "flex",
    justifyContent: "center",
    marginTop: "15px",
    "& .MuiFormLabel-root.Mui-focused": {
      color: "black",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "black",
    },
    "& > *": {
      margin: "0 20px",
    },
  },

  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    backgroundColor: theme.palette.background.paper,
  },
  titleResult: {
    fontFamily: "Bebas Neue, cursive",
    textAlign: "center",
    marginTop: "20px",
    marginBottom: "50px",
  },
}));

function ImageSearch() {
  const [values, setValues] = useState("");
  const [page, setPage] = useState(80);
  const [category, setCategory] = useState("all");
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("island");
  const myAPIKey = useRef("20223851-e267afdfef34f5b5659bcb33a");

  const handleChangePage = (e) => {
    setPage(e.target.value);
  };

  const handleChangeCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = () => {
    setQuery(values);
  };

  useEffect(() => {
    axios
      .get(
        `https://pixabay.com/api/?key=${myAPIKey.current}&q=${query}&image_type=${category}&pretty=true&per_page=${page}`
      )
      .then((res) => {
        setTimeout(() => {
          setImages(res.data.hits);
        }, 1000);

        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [page, category, query]);

  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <h1 className={classes.title}>images gallery</h1>
        {/* SearchComponent */}
        <SearchInput
          values={values}
          setValues={(e) => setValues(e.target.value)}
          onClick={handleSubmit}
        />

        <div className={classes.formSelect}>
          {/* Page */}
          <FormControl>
            <InputLabel id="page">Page</InputLabel>
            <Select
              labelId="page"
              id="demo-simple-select-helper-page"
              value={page}
              onChange={handleChangePage}
            >
              {DataPage.map((val, index) => (
                <MenuItem key={index} value={val}>
                  {val}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText>Page Images for Result</FormHelperText>
          </FormControl>
          {/* Category */}
          <FormControl className={classes.select}>
            <InputLabel id="category">Category</InputLabel>
            <Select
              labelId="category"
              id="demo-simple-select-helper-page"
              value={category}
              onChange={handleChangeCategory}
            >
              {DataCategory.map((val, index) => (
                <MenuItem key={index} value={val}>
                  {val}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText>Category Images for Result</FormHelperText>
          </FormControl>
        </div>
      </div>

      {/* Result */}
      {loading ? (
        <div
          style={{
            margin: "15px auto",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <CircularProgress color="secondary" />
        </div>
      ) : (
        <div className="container">
          {!loading && images.length === 0 ? (
            <h1 className={classes.titleResult}>Images Not Found!</h1>
          ) : (
            <h1 className={classes.titleResult}>Result Images</h1>
          )}
          <Gallery images={images} />
        </div>
      )}
    </>
  );
}

export default ImageSearch;
