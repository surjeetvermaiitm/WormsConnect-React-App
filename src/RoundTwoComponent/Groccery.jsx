import React from "react";
import { Box } from "@mui/material";
import GrocceryItem from "./GrocceryItem";
import { grocery } from "../assets/data";

function Groccery() {
  return (
    <Box>
      {grocery.map((itemData, index) => {
        return <GrocceryItem {...itemData} key={index} />;
      })}
    </Box>
  );
}

export default Groccery;
