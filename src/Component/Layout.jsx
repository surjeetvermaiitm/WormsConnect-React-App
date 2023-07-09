import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import MenuBar from "./MenuBar";
import NavBar from "./NavBar";
import Assessment from "./Assessment";

function Layout() {
  return (
    <Box height="100%">
      <Box display="flex" flexDirection="row" height="100%">
        <Box width="8%" height="90vh">
          <MenuBar />
        </Box>
        <Box display="flex" flexDirection="column" width="92%" height="100%">
          <Box height="92px">
            <NavBar />
          </Box>
          <Box>
            <Assessment />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Layout;
