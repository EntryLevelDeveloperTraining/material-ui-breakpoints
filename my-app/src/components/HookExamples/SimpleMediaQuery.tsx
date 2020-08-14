import React from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";

const SimpleMediaQuery = () => {
  const matches = useMediaQuery("(min-width:600px)");
  if (matches) {
    return (
      <Paper elevation={5}>
        <Box p={5}>SimpleMediaQuery breakpoint has a min width of 600px</Box>
      </Paper>
    );
  }
  return <></>;
};

export default SimpleMediaQuery;
