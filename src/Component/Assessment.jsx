import React from "react";
import {
  Box,
  Typography,
  TextField,
  FormControl,
  InputAdornment,
  Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import Card from "./Card";
import { data } from "../assets/data";

function Assessment() {
  return (
    <Box sx={{ p: 4 }}>
      <Typography fontSize={34} fontWeight={600}>
        {" "}
        Candidate Assessments
      </Typography>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        marginBottom={3}
      >
        <FormControl sx={{ gap: "0.5rem", width: "50rem" }}>
          <TextField
            required
            fullWidth
            id="query-id"
            placeholder="Search Assessments"
            size="small"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </FormControl>
        <Button
          sx={{
            justifyContent: "start",
            textTransform: "initial",
            boxShadow: "none",
            gap: "0.4rem",
            backgroundColor: "primary.main",
            borderRadius: 2,
            pl: 3,
            pr: 3,
          }}
          variant="contained"
          size="small"
        >
          {" "}
          <AddIcon fontSize="small" />
          <Typography color="white.main">Create New</Typography>
        </Button>
      </Box>
      <Box
        display="flex"
        flexWrap="wrap"
        width="100%"
        flexDirection="row"
        gap={5}
      >
        {data.map((student, index) => {
          return <Card {...student} key={index} />;
        })}
      </Box>
    </Box>
  );
}

export default Assessment;
