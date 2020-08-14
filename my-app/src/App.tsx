import React from "react";
import Box from "@material-ui/core/Box";
import SimpleMediaQuery from "./components/HookExamples/SimpleMediaQuery";
import BreakpointHelper from "./components/HookExamples/BreakpointHelper";
import MakeStyles from "./components/MakeStyles/MakeStyles";
import BoxExamples from "./components/BoxExamples/BoxExamples";
import StyledComponents from "./components/StyledComponents/StyledComponents";

function App() {
  return (
    <>
      <Box p={2}>
        <SimpleMediaQuery />
      </Box>
      <Box p={2}>
        <BreakpointHelper />
      </Box>
      <Box p={2}>
        <MakeStyles />
      </Box>
      <Box p={2}>
        <BoxExamples />
      </Box>
      <Box p={2}>
        <StyledComponents />
      </Box>
    </>
  );
}

export default App;
