import React from "react";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";

const BreakpointHelper = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  if (matches) {
    return (
      <Paper elevation={5}>
        <Box p={5}>
          BreakpointHelper will render everything up from 'sm' which is 600px
        </Box>
      </Paper>
    );
  }
  return <></>;
};

export default BreakpointHelper;
