import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import ZIcon from "../assets/images/z-icon.svg.svg";
import EditIcon from "../assets/images/edit.svg";
import GridIcon from "../assets/images/grid.svg";
import FileIcon from "../assets/images/file.svg";
import DataIcon from "../assets/images/data.svg";
import SettingsIcon from "../assets/images/Settings.svg";

function MenuBar() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      sx={{ bgcolor: "secondary.main", p: 4 }}
      gap={5}
      height="100%"
    >
      <Box
        component="img"
        src={ZIcon}
        alt="icon"
        height="20.57px"
        width="24px"
      ></Box>
      <Box
        component="img"
        src={EditIcon}
        alt="icon"
        height="20.57px"
        width="24px"
      ></Box>
      <Box
        component="img"
        src={GridIcon}
        alt="icon"
        height="20.57px"
        width="24px"
      ></Box>
      <Box
        component="img"
        src={FileIcon}
        alt="icon"
        height="30px"
        width="30px"
      ></Box>
      <Box
        component="img"
        src={DataIcon}
        alt="icon"
        height="30px"
        width="30px"
      ></Box>
      <Box
        component="img"
        src={SettingsIcon}
        alt="icon"
        height="30px"
        width="30px"
      ></Box>
    </Box>
  );
}

export default MenuBar;
