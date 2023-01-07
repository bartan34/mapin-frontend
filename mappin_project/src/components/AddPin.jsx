import { Box, Button, IconButton, TextField, Typography } from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";

function AddPin({
  selecting,
  setSelecting,
  setAddWindow,
  selectionCoords,
  setSelectionCoords,
}) {
  const [value, setValue] = React.useState({
    title: "",
    description: "",
    location: selectionCoords,
  });

  function handleChange(event) {
    if (event.target.name == "title") {
      setValue((e) => ({ ...value, title: event.target.value }));
    } else if (event.target.name == "description") {
      setValue((e) => ({ ...value, description: event.target.value }));
    } 
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      title: data.get("title"),
      description: data.get("description"),
      location: selectionCoords,
    }); }



  return (
    <Box
      bgcolor={"background.default"}
      color={"text.primary"}
      p={3}
      borderRadius={5}
      sx={{
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
      }}
    >
      <IconButton
        onClick={() => {
          setAddWindow(false);
          setSelecting(false);
        }}
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          m: 0,
          transition: "0.2s",
          "&:hover, &:focus": { transform: " rotate(45deg)" },
        }}
      >
        <CloseIcon />
      </IconButton>
      <Typography component="h1" variant="h5">
        Create Pin
      </Typography>
      <Button
        onClick={() => {
          setSelecting(true);
          setAddWindow(false);
          setSelectionCoords(false); 
        }}
        variant="contained"
        color={!selectionCoords ? "error" : "success"}
      >
        {!selectionCoords ? "Select Location" : "Change Location"}
      </Button>

      {/* <Typography component="h1" variant="body1">
        {selectionCoords[0]}
      </Typography>
      <Typography component="h1" variant="body1">
        {selectionCoords[1]}
      </Typography> */}
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="title"
            label="Pin Title"
            name="title"
            autoComplete="off"
            value={value.title}
            onChange={handleChange}
          />
          <TextField
            id="outlined-multiline-static"
            label="Pin Description"
            name="description"
            required
            fullWidth
            multiline
            placeholder="Max 240 characters"
            rows={4}
            inputProps={{ maxLength: 240 }}
            value={value.description}
            onChange={handleChange}
          />
         
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Create List
          </Button>
        </Box>
    </Box>
  );
}
export default AddPin;
