import React from "react";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";

const BoxExamples = () => {
  return (
    <Paper elevation={5}>
      <Box p={5} display={{ xs: "block", sm: "none", md: "block" }}>
        This will hide on `sm` but show as a `block` on `xs` and `md`
      </Box>
    </Paper>
  );
};

export default BoxExamples;
