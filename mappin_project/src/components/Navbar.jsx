import React from "react";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Tab,
  Tabs,
  Tooltip,
  Typography,
} from "@mui/material";
import { Link, Navigate, Outlet, useNavigate } from "react-router-dom";

//Styled Component imports
import StyledToolbar from "../styles/Navbar";

// Icon imports
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import PushPinIcon from "@mui/icons-material/PushPin";
import Modal from "./Modal";
import UserContext from "../context/AuthContext";
import Sign from "./Sign";

function Navbar(props) {
  const [open, setOpen] = React.useState(false);
  const [loginPage, setLoginPage] = React.useState(false);
  const [value, setValue] = React.useState(0);
  const { auth, onLogout } = React.useContext(UserContext);

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
    console.log(newValue);
  };

  const navigate = useNavigate();
  const handleClick = (e) => navigate(e);

  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <AppBar position="sticky" color="default">
          <StyledToolbar>
            <Box display="flex">
              <Typography variant="h4" component="div">
                MapPin
              </Typography>
              <PushPinIcon sx={{ fontSize: "40px" }} />
            </Box>

            <Tabs
              value={auth ? value : ""}
              onChange={auth ? handleTabChange : null}
            >
              <Tooltip title="Home">
                <Tab
                  icon={<HomeIcon />}
                  onClick={(e) => handleClick("/home")}
                />
              </Tooltip>
              <Tooltip title="Explore">
                <Tab icon={<ExploreIcon />} />
              </Tooltip>{" "}
              *
              <Tooltip title="Lists">
                <Tab
                  icon={<FormatListBulletedIcon />}
                  onClick={(e) => handleClick("/lists")}
                />
              </Tooltip>
            </Tabs>
            {/* Kullanıcı giriş yaptıysa profile sekmesi, yapmadıysa login butonu
          göster */}
            {auth ? (
              <Box>
                <Tooltip title="Open settings">
                  <IconButton onClick={(e) => setOpen(true)} sx={{ p: 0 }}>
                    <Avatar
                      alt="Profile Photo"
                      src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    />
                  </IconButton>
                </Tooltip>
              </Box>
            ) : (
              <Button variant="contained" onClick={(e) => setLoginPage(true)}>
                Sign In
              </Button>
            )}
          </StyledToolbar>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={open}
            onClose={(e) => setOpen(false)}
          >
            <MenuItem onClick={(e) => setOpen(false)}>
              <Typography textAlign="center">Profile</Typography>
            </MenuItem>
            <MenuItem onClick={(e) => setOpen(false)}>
              <Typography textAlign="center">Settings</Typography>
            </MenuItem>
            <Link to="/" style={{ textDecoration: "none", color: "pink" }}>
              <MenuItem
                onClick={(e) => {
                  setOpen(false);
                  onLogout();
                  // makes the selected tab firt one on every logout
                  setValue(0);
                }}
              >
                <Typography textAlign="center">Logout</Typography>
              </MenuItem>
            </Link>
          </Menu>
        </AppBar>
        <Outlet />
      </div>

      <Modal
        content={<Sign setLoginPage={setLoginPage} />}
        loginPage={loginPage}
        setLoginPage={setLoginPage}
        closable={true}
      />
    </>
  );
}

export default Navbar;
