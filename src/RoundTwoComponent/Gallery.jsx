import React from "react";
import { Box } from "@mui/material";
import { imageData } from "../assets/data";
import ImageComponent from "./ImageComponent";

function Gallery() {
  return (
    <Box display="flex" flexDirection="column">
      {imageData.map((imgSrc, index) => {
        return <ImageComponent {...imgSrc} key={index} />;
      })}
    </Box>
  );
}

export default Gallery;
