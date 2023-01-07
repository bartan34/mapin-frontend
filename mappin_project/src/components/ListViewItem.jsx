import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Chip,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import PushPinIcon from "@mui/icons-material/PushPin";

function ListViewItem({ key, subject }) {
  return (
    <Paper
      sx={{
        borderRadius: "1.2rem",
        display: "flex",
        flexDirection: "column",
        p: 2,
        gap: "1rem",
      }}
    >
      {/* Main Content */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography mb="10px" variant="h5">
          Favorite Restaurants
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            mb: "10px",
            width: "100%",
          }}
        >
          <img
            src={subject[1].photo.images.small.url}
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
              borderRadius: "0.8rem",
              padding: "0.2rem",
            }}
          />
          <img
            src={subject[3].photo.images.small.url}
            style={{
              width: "50%",
              height: "100px",
              objectFit: "cover",
              borderRadius: "0.8rem",
              padding: "0.2rem",
            }}
          />

          <img
            src={subject[4].photo.images.small.url}
            style={{
              width: "50%",
              height: "100px",
              objectFit: "cover",
              borderRadius: "0.8rem",
              padding: "0.2rem",
            }}
          />
        </Box>
        <Typography variant="body2" color="lightgray">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu
        </Typography>
      </Box>
      <Divider />
      {/* Bottom section */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Chip
          avatar={
            <Avatar
              alt="Boris"
              src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
          }
          label="Boris"
          variant="outlined"
        />
        <Box display="flex" flexDirection="row " alignItems="center">
          <AvatarGroup total={24} sx={{ fontSize: 1 }}>
            <Avatar
              alt="Remy Sharp"
              src="https://media.istockphoto.com/id/1381221247/photo/beautiful-afro-girl-with-curly-hairstyle.jpg?b=1&s=170667a&w=0&k=20&c=0x91osZOkL8EfhTEEGNa2EeCGN2gdMTNULOsUFW_0i4="
              sx={{ width: 30, height: 30 }}
            />
            <Avatar
              alt="Travis Howard"
              src="https://cdn.pixabay.com/photo/2016/02/11/16/59/dog-1194083_960_720.jpg"
              sx={{ width: 30, height: 30 }}
            />
            <Avatar
              alt="Agnes Walker"
              src="https://media.istockphoto.com/id/1368424494/photo/studio-portrait-of-a-cheerful-woman.jpg?b=1&s=170667a&w=0&k=20&c=VEE1756TeCzYH2uPsFZ_P8H3Di2j_jw8aOT6zd7V8JY="
              sx={{ width: 30, height: 30 }}
            />
          </AvatarGroup>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", gap: "5px" }}>
          <Chip
            variant="outlined"
            label="Restaurant"
            color="primary"
            size="small"
          />
          <Chip
            variant="outlined"
            label="Istanbul"
            color="primary"
            size="small"
          />
          <Chip variant="outlined" label="Cafe" color="primary" size="small" />
        </Box>
        <Chip icon={<PushPinIcon />} label="13" size="small" />
      </Box>
    </Paper>
  );
}

export default ListViewItem;
