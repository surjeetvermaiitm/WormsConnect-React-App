import React from "react";
import { Box, Button, Typography } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

import DuplicateIcon from "../assets/images/duplicate.svg";
import CopyIcon from "../assets/images/copy.svg";

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#707070",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.mode === "dark" ? "#CCCCCC" : "#CCCCCC",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#CCCCCC",
      border: "6px solid #707070",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

function Card({
  course = "Devops",
  nameWithDate = "Pranithi, 10 Nov '22",
  Invited = 120,
  Evaluated = 100,
  DroppedOff = 3,
  Qualified = 98,
  progress = 70,
  progressColor = "green",
}) {
  return (
    <Box
      sx={{ p: 2 }}
      height="279px"
      width="386px"
      boxShadow={1}
      borderRadius={2}
    >
      <Box display="flex" flexDirection="column">
        <Box display="flex" flexDirection="row" justifyContent="space-between">
          <Box>
            <Typography fontSize={24} fontWeight={600}>
              {course}
            </Typography>
            <Typography
              fontSize={14}
              fontWeight={400}
              sx={{ color: "tertiary.text" }}
            >
              {nameWithDate}
            </Typography>
          </Box>
          <Box>
            <Button
              variant="outlined"
              size="small"
              sx={{ textTransform: "none" }}
            >
              <Typography sx={{ color: "tertiary.main" }}>View</Typography>
            </Button>
          </Box>
        </Box>
        <Box display="flex" flexDirection="row" sx={{ mt: 1 }}>
          <Box width="50%" borderRight={1}>
            <Box display="flex" flexDirection="column" gap={2}>
              <Box
                display="flex"
                flexDirection="row"
                width="90%"
                justifyContent="space-between"
              >
                <Typography> Invited</Typography>
                <Typography>{Invited}</Typography>
              </Box>
              <Box
                display="flex"
                flexDirection="row"
                width="90%"
                justifyContent="space-between"
              >
                <Typography> Evaluated</Typography>
                <Typography>{Evaluated}</Typography>
              </Box>
            </Box>
          </Box>
          <Box width="50%" sx={{ ml: 2 }}>
            <Box display="flex" flexDirection="column" gap={2}>
              <Box
                display="flex"
                flexDirection="row"
                width="90%"
                justifyContent="space-between"
              >
                <Typography>Dropped Off</Typography>
                <Typography>{DroppedOff}</Typography>
              </Box>
              <Box
                display="flex"
                flexDirection="row"
                width="90%"
                justifyContent="space-between"
              >
                <Typography>Qualified</Typography>
                <Typography>{Qualified}</Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        <Typography sx={{ color: progressColor + ".main", mt: 2 }}>
          Qualifying
        </Typography>
        <Box display="flex" flexDirection="row" alignItems="center" gap={2}>
          <Box sx={{ width: "90%" }}>
            <LinearProgress
              variant="determinate"
              value={70}
              color={progressColor}
            />
          </Box>
          <Box sx={{ width: "10%" }}>
            <Typography variant="body2" color="secondary.main">{`${Math.round(
              progress
            )}%`}</Typography>
          </Box>
        </Box>
        <Box display="flex" flexDirection="row" justifyContent="space-between">
          <Box display="flex" flexDirection="row" sx={{ mt: 1 }} gap={2}>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
            >
              <Box
                component="img"
                src={DuplicateIcon}
                alt="icon"
                height="30px"
                width="30px"
              ></Box>
              <Typography fontSize={12} color="tertiary.text">
                Duplicate
              </Typography>
            </Box>
            <Box sx={{ ml: 3 }}>
              <Box
                component="img"
                src={CopyIcon}
                alt="icon"
                height="30px"
                width="30px"
              ></Box>
              <Typography
                sx={{ ml: -2, mt: -1 }}
                fontSize={12}
                color="tertiary.text"
              >
                Copy link
              </Typography>
            </Box>
          </Box>
          <FormControlLabel
            control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Card;
