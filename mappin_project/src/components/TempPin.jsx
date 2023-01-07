import { Box, Grow, IconButton, Tooltip } from "@mui/material";
import React from "react";
import PushPinIcon from "@mui/icons-material/PushPin";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DeleteIcon from "@mui/icons-material/Delete";

function TempPin(props) {
  return (
    <div>
      <Grow in={props.opacity}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100px",
            height: "50px",
          }}
        >
          <Box display="flex" flexDirection="row" justifyContent="center">
            <IconButton
              sx={{ transform: "translate(-110%, -150%)", color: "green" }}
              onClick={() => {
                props.setAddPin(true);
              }}
            >
              <Tooltip title="Accept">
                <CheckCircleIcon />
              </Tooltip>
            </IconButton>
            <IconButton
              sx={{ transform: "translate(-130%, -150%)", color: "red" }}
              onClick={() => {
                props.setSelectionCoords(false);
                props.setAddPin(true);

              }}
            >
              <Tooltip title="Delete">
                <DeleteIcon />
              </Tooltip>
            </IconButton>
          </Box>
          <Box textAlign="center">
            <PushPinIcon
              sx={{
                color: "black",
                fontSize: "2rem",
                transform: "translate(-150%, -200%)",
              }}
            />
          </Box>
        </Box>
      </Grow>
    </div>
  );
}

export default TempPin;
