import * as React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import ArrowRight from "@mui/icons-material/ArrowRight";
import PinDropIcon from "@mui/icons-material/PinDrop";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import restaurants from "../data/mock_api.js/places_api";
import PinListItems from "./PinListItems";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import { Button, Fade, Menu, MenuItem, Typography } from "@mui/material";
import Modal from "./Modal";
import AddPin from "./AddPin";

export default function PinList({
  selectedChild,
  selectingLocation,
  setSelectingLocation,
  selectionCoords,
  setSelectionCoords,
  addPin,
  setAddPin,
}) {
  const [places, setPlaces] = React.useState(restaurants.data);
  const [elRefs, setElRefs] = React.useState([]);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  React.useEffect(() => {
    setElRefs((refs) =>
      Array(places.length)
        .fill()
        .map((_, i) => refs[i] || React.createRef())
    );
  }, [places]);

  return (
    <>
      <Box display={selectingLocation ? "none" : "block"} height="100%">
        {/* <ThemeProvider
          theme={createTheme({
            components: {
              MuiListItemButton: {
                defaultProps: {
                  disableTouchRipple: true,
                },
              },
            },
            palette: {
              mode: "dark",
              primary: { main: "rgb(102, 157, 246)" },
              background: { paper: "rgb(5, 30, 52)" },
            },
          })}
        > */}
        <Paper
          elevation={0}
          sx={{
            width: { xl: "25vw", md: "35w", sm: "40vw", xs: "100vw" },
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Main List Titles start from there */}
          <List component="nav" disablePadding>
            <ListItem component="a">
              <ListItemText
                sx={{ my: 0, textAlign: "center" }}
                primary="Lists"
                primaryTypographyProps={{
                  fontSize: 16,
                  fontWeight: "medium",
                  letterSpacing: 0,
                }}
              />
              {/* To switch between other lists */}

              <Tooltip title="Other Lists">
                <IconButton
                  onClick={handleClick}
                  size="large"
                  sx={{
                    "& svg": {
                      transition: "0.2s",
                      transform: "translateX(0) rotate(0)",
                    },
                    "&:hover": {
                      bgcolor: "unset",
                      "& svg:first-of-type": {
                        transform: "translateX(-4px) rotate(-20deg)",
                      },
                      "& svg:last-of-type": {
                        right: 0,
                        opacity: 1,
                      },
                    },
                    "&:after": {
                      content: '""',
                      position: "absolute",
                      height: "80%",
                      display: "block",
                      left: 0,
                      width: "1px",
                      bgcolor: "divider",
                    },
                  }}
                >
                  <FormatListBulletedIcon />
                  <ArrowRight
                    sx={{ position: "absolute", right: 4, opacity: 0 }}
                  />
                </IconButton>
              </Tooltip>
            </ListItem>
            <Divider />
            <ListItem
              component="div"
              disablePadding
              sx={{
                height: 56,
                ml: 2,
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <ListItemIcon sx={{ alignItems: "center" }}>
                <PinDropIcon color="primary" />
                <ListItemText
                  primary="Restaurants"
                  primaryTypographyProps={{
                    fontWeight: "medium",
                    variant: "h6",
                  }}
                />
              </ListItemIcon>

              <Button
                variant="contained"
                sx={{ mr: 3 }}
                onClick={(e) => {
                  setAddPin(true);
                }}
                endIcon={<AddLocationAltIcon />}
              >
                Add Pin
              </Button>
            </ListItem>
            <Divider />
            {/*  Pins start from there  */}
          </List>
          {/* Pins of the list will be displayed under that list */}
          <Box sx={{ overflow: "auto", width: "100%", height: "100%" }}>
            {places.map((pin, i) => {
              return (
                <div ref={elRefs[i]} key={i}>
                  <PinListItems
                    pin={pin}
                    selected={Number(selectedChild) === i}
                    refProp={elRefs[i]}
                  />
                </div>
              );
            })}
          </Box>
        </Paper>
        {/* </ThemeProvider> */}
      </Box>

      {/* Add pin modal window */}
      <Modal
        content={
          <AddPin
            selecting={selectingLocation}
            setSelecting={setSelectingLocation}
            setAddWindow={setAddPin}
            selectionCoords={selectionCoords}
            setSelectionCoords={setSelectionCoords}
          />
        }
        loginPage={addPin}
        setLoginPage={setAddPin}
        closable={false}
      />
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        {Object.entries(restaurants).map(([key, subject], i) => {
          return <MenuItem onClick={handleClose}>{key}</MenuItem>;
        })}
      </Menu>
    </>
  );
}
