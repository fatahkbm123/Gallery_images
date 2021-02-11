import React from "react";
import {
  Container,
  GridList,
  GridListTile,
  GridListTileBar,
  IconButton,
  makeStyles,
} from "@material-ui/core";
import InfoIcon from "@material-ui/icons/Info";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles({
  tileBar: {
    "& .MuiGridListTileBar-title": {
      textTransform: "capitalize",
      marginBottom: "8px",
    },
  },
});

function Gallery({ images }) {
  const classes = useStyles();
  const matches = useMediaQuery("(max-width:600px)");

  return (
    <Container>
      <GridList cellHeight={300} cols={matches ? 2 : 3}>
        {images.map((item) => (
          <GridListTile key={item.id}>
            <img src={item.webformatURL} alt={item.user} />
            <GridListTileBar
              className={classes.tileBar}
              title={item.type}
              subtitle={<span>By: {item.user}</span>}
              actionIcon={
                <IconButton aria-label={`info about ${item.user}`}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </Container>
  );
}

export default Gallery;
