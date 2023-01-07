import {
  Autocomplete,
  Input,
  InputAdornment,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Navigate } from "react-router-dom";
import Map from "../components/Map";
import Navbar from "../components/Navbar";
import UserContext from "../context/AuthContext";
import SearchIcon from "@mui/icons-material/Search";

function LimitedMain() {
  const { auth } = React.useContext(UserContext);
  const locations = [
    { title: "Istanbul", pins: 2559 },
    { title: "Berlin", pins: 1000 },
    { title: "Amsterdam", pins: 2542 },
  ];

  return (
    <>
      {auth ? (
        <Navigate replace to="/home" />
      ) : (
        <div style={{ position: "relative", height: "100%" }}>
          <Box
            height="100%"
            display="flex"
            flexDirection="column"
          >
            <Box zIndex="-99" sx={{ height: "65%" }}>
              <Map />
            </Box>
            <Box
              sx={{ backgroundColor: "black", width: "100%", height: "35%" }}
            ></Box>
          </Box>
          <Box
            position="absolute"
            top="0"
            width="100%"
            height="100%"
            margin="auto"
            display="flex"
            flexDirection="column"
            zIndex={10}
          >
            <Paper
              sx={{
                width: { xl: "50%", md: "70%", sm: "80%", xs: "85%" },
                height: { xl: "80%", md: "90%", sm: "80%", xs: "60%" },
                position: "relative",
                top: "100px",
                left: "10vw",
                borderRadius: "30% 70% 84% 16% / 30% 30% 70% 70%",
                boxShadow: "100",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography
                variant="h1"
                sx={{
                  width: "80%",
                  fontWeight: "700",
                  position: "relative",
                  left: "3vw",
                  top: "100px",
                }}
              >
                Create Pins, Share Them and Explore!
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  position: "relative",
                  top: "15vh",
                  left: "7vw",
                }}
              >
                <TextField
                  color="primary"
                  sx={{
                    width: "30vw",
                  }}
                  label="Search lists"
                  variant="outlined"
                />
                <SearchIcon sx={{ position: "relative", left: "-3vw" }} />
              </Box>
            </Paper>
          </Box>
        </div>
      )}
    </>
  );
}

export default LimitedMain;
