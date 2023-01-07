import { Paper, Typography, Grow } from "@mui/material";
import React from "react";

function Pin(props) {
  return (
    <div>
      <Grow in={props.opacity}>
        <Paper
          sx={{
            borderRadius: "1.2rem",
            padding: "10px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "200px",
            gap: "3px",
            "&:hover": {
              background: "#1798c7",
              cursor: "pointer",
            },
          }}
          elevation={10}
          onClick={(e) => {
            props.selectChild(props.index);
          }}
        >
          <Typography textAlign="center">{props.name}</Typography>
          <img
            src={props.photo}
            style={{ borderRadius: "0.8rem", width: "50px", height: "50px" }}
          />
        </Paper>
      </Grow>
    </div>
  );
}

export default Pin;
