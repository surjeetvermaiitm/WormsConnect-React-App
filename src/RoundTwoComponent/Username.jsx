import React, { useState } from "react";
import { Box, Typography, TextField, FormControl, Button } from "@mui/material";

function RoundTwo() {
  const [formInputVal, setFormInputVal] = useState("");
  const [showInputValue, setShowInputValue] = useState(false);
  const submitHandler = () => {
    setShowInputValue(formInputVal);
  };
  return (
    <Box>
      <Button onClick={submitHandler} variant="contained">
        {" "}
        Change Username
      </Button>
      <FormControl>
        <TextField
          placeholder=""
          onChange={(event) => setFormInputVal(event.target.value)}
        ></TextField>
      </FormControl>
      <Typography>{showInputValue}</Typography>
    </Box>
  );
}

export default RoundTwo;
