import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down("sm")]: {
      backgroundColor: theme.palette.secondary.main,
    },
    [theme.breakpoints.up("md")]: {
      backgroundColor: theme.palette.primary.main,
    },
    [theme.breakpoints.up("lg")]: {
      backgroundColor: "green",
    },
  },
}));

const MakeStyles = () => {
  const classes = useStyles();
  return (
    <Paper elevation={5} className={classes.root}>
      <Box p={5}>The background color will change based on screen width</Box>
    </Paper>
  );
};

export default MakeStyles;
