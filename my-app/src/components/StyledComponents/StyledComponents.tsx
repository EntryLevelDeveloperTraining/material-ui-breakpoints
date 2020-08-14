import React from "react";
import Paper from "@material-ui/core/Paper";
import { compose, spacing, palette, breakpoints } from "@material-ui/system";
import styled from "styled-components";

const Box = styled.div`
  ${breakpoints(compose(spacing, palette))}
`;

const BoxExamples = () => {
  return (
    <Paper elevation={5}>
      <Box p={{ xs: 5, sm: 10 }}>This uses a styled-components Box</Box>
    </Paper>
  );
};

export default BoxExamples;
