import React, { useState } from "react";
import { Box, Button } from "@mui/material";

function ImageComponent({ imgSrc }) {
  const [isVisible, setIsVisble] = useState(true);
  return (
    <Box display="flex" flexDirection="row">
      {isVisible && (
        <>
          <Box component="img" src={imgSrc} width="30px" height="30px"></Box>
          <Button onClick={() => setIsVisble(false)}>X</Button>
        </>
      )}
    </Box>
  );
}

export default ImageComponent;
