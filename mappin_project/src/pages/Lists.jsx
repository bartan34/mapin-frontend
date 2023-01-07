import {
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import { Navigate } from "react-router-dom";
import UserContext from "../context/AuthContext";
import AddIcon from "@mui/icons-material/Add";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import SortIcon from "@mui/icons-material/Sort";
import GridViewIcon from "@mui/icons-material/GridView";
import ViewStreamIcon from "@mui/icons-material/ViewStream";

import restaurants from "../data/mock_api.js/places_api";
import ListViewItem from "../components/ListViewItem";
import Modal from "../components/Modal";
import AddList from "../components/AddList";

function Lists() {
  const { auth } = React.useContext(UserContext);
  const [lists, setLists] = React.useState(restaurants);
  const [createList, setCreateList] = React.useState(false);
  return (
    <>
      {auth == false ? (
        <Navigate replace to="/" />
      ) : (
        <div style={{ height: "100%", overflow: "auto" }}>
          <Paper
            sx={{
              height: "100%",
              width: "100%",
              borderRadius: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1rem",
              justifyContent: "space-around",
              p: 3,
            }}
          >
            {/* button line */}
            <Box
              sx={{
                width: "85%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 3,
                }}
              >
                <Button
                  variant="contained"
                  startIcon={<AddIcon />}
                  sx={{
                    borderRadius: "1rem",
                    textTransform: "none",
                    fontSize: 16,
                  }}
                  onClick={(e) => {
                    setCreateList(true);
                  }}
                >
                  Create
                </Button>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <Button
                  variant="outlined"
                  sx={{
                    borderRadius: "1rem",
                    textTransform: "none",
                    fontSize: 16,
                  }}
                >
                  <FilterAltIcon />
                  Filter
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    borderRadius: "1rem",
                    textTransform: "none",
                    fontSize: 16,
                  }}
                >
                  <SortIcon />
                </Button>
                <Paper
                  elevation={12}
                  sx={{
                    height: "100%",
                    borderRadius: "3rem",
                    display: "flex",
                    gap: "7px",
                    p: "5px",
                  }}
                >
                  <IconButton
                    sx={{
                      backgroundColor: "gray",
                    }}
                  >
                    <GridViewIcon />
                  </IconButton>
                  <IconButton>
                    <ViewStreamIcon />
                  </IconButton>
                </Paper>
              </Box>
            </Box>
            {/* Main content */}
            <Box
              sx={{
                height: "90%",
                width: "80%",
                display: "flex",
                justifyContent: "space-between",
                gap: "1rem",
              }}
            >
              {/* refine lists section */}
              <Paper
                elevation={12}
                sx={{
                  height: "200px",
                  borderRadius: "2rem",
                  display: "flex",
                  flexDirection: "column",
                  p: 3,
                  gap: 2,
                }}
              >
                <Box
                  display="flex"
                  flexDirection="row"
                  alignItems="center"
                  justifyContent="space-around"
                  gap="0.5rem"
                >
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "gray",
                      color: "white",
                      borderRadius: "1.2rem",
                      textTransform: "none",
                      width: "6rem",

                      "&:hover": {
                        backgroundColor: "lightgray",
                      },
                    }}
                  >
                    All
                  </Button>
                  <Divider orientation="vertical" flexItem />
                  <Typography variant="body2" color="lightgray">
                    {" "}
                    5 Lists
                  </Typography>
                </Box>

                <Box
                  display="flex"
                  flexDirection="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#80669d",
                      color: "white",
                      borderRadius: "1.2rem",
                      textTransform: "none",
                      width: "6rem",

                      "&:hover": {
                        backgroundColor: "pink",
                      },
                    }}
                  >
                    My Lists
                  </Button>
                  <Divider orientation="vertical" flexItem />

                  <Typography variant="body2" color="lightgray">
                    {" "}
                    2 Lists
                  </Typography>
                </Box>

                <Box
                  display="flex"
                  flexDirection="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#5dbea3",
                      color: "white",
                      borderRadius: "1.2rem",
                      textTransform: "none",
                      width: "6rem",

                      "&:hover": {
                        backgroundColor: "lightgreen",
                      },
                    }}
                  >
                    Following
                  </Button>
                  <Divider orientation="vertical" flexItem />

                  <Typography variant="body2" color="lightgray">
                    {" "}
                    3 Lists
                  </Typography>
                </Box>
              </Paper>

              {/* list view section */}
              <Paper
                elevation={12}
                sx={{
                  height: "100%",
                  width: "80%",
                  borderRadius: "2rem",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  p: 3,
                  overflow: "auto",
                }}
              >
                <Grid container spacing={2}>
                  {Object.entries(lists).map(([key, subject], i) => {
                    return (
                      <Grid item xl={4} lg={6} md={6} sm={12}>
                        <ListViewItem key={key} subject={subject} />
                      </Grid>
                    );
                  })}
                </Grid>
              </Paper>
            </Box>
          </Paper>
          <Modal
            content={<AddList setOpen={setCreateList} />}
            loginPage={createList}
            setLoginPage={setCreateList}
            closable={true}
          />
        </div>
      )}
    </>
  );
}

export default Lists;
