import React from "react";
import { Box, Typography } from "@mui/material";
import ProfileIcon from "../assets/images/profile.svg";
import BellIcon from "../assets/images/bell-icon.svg";
import ToggleIcon from "../assets/images/toggle.svg";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function NavBar() {
  return (
    <Box
      width="100%"
      height="100%"
      //   borderBottom={0.5}
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      sx={{ p: 4, boxShadow: 2 }}
    >
      <Box></Box>
      <Box display="flex" flexDirection="row" gap={3} alignItems="center">
        <Box
          component="img"
          src={ToggleIcon}
          alt="icon"
          height="40px"
          width="40px"
        ></Box>
        <Box
          component="img"
          src={BellIcon}
          alt="icon"
          height="25px"
          width="25px"
        ></Box>
        <Box>
          <Typography fontSize={16}>Jessica James</Typography>
        </Box>
        <Box
          component="img"
          src={ProfileIcon}
          alt="icon"
          height="40px"
          width="40px"
        ></Box>
        <KeyboardArrowDownIcon />
      </Box>
    </Box>
  );
}

export default NavBar;
