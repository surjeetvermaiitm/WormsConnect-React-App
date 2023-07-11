import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";

function GrocceryItem({ name, votes }) {
  const [value, setValue] = useState(votes);
  return (
    <Box display="flex" flexDirection="row" gap={4}>
      <Typography>
        {name} - Votes {value}{" "}
      </Typography>

      <Button
        variant="contained"
        onClick={() => setValue((value) => value + 1)}
      >
        +
      </Button>
      <Button
        variant="contained"
        disabled={value === 0}
        onClick={() => setValue((value) => value - 1)}
      >
        -
      </Button>
    </Box>
  );
}

export default GrocceryItem;
