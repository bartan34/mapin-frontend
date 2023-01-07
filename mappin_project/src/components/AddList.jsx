import {
  Box,
  Button,
  Container,
  Stack,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import restaurants from "../data/mock_api.js/places_api";

function AddList({ setOpen }) {
  const [value, setValue] = React.useState({
    title: "",
    description: "",
    public: false,
  });

  function handleChange(event) {
    if (event.target.name == "title") {
      setValue((e) => ({ ...value, title: event.target.value }));
    } else if (event.target.name == "description") {
      setValue((e) => ({ ...value, description: event.target.value }));
    } else {
      setValue((e) => ({ ...value, public: event.target.checked }));
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      title: data.get("title"),
      description: data.get("description"),
      public: data.get("public"),
    });

    setOpen(false);
  };
  return (
    <Container component="main" maxWidth="xs">
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
        }}
      >
        <Typography component="h1" variant="h5">
          Create List
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="title"
            label="List Title"
            name="title"
            autoComplete="off"
            value={value.title}
            onChange={handleChange}
          />
          <TextField
            id="outlined-multiline-static"
            label="List Description"
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
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography>Public</Typography>
            <Switch
              checked={value.public}
              onChange={handleChange}
              id="public"
              name="public"
              inputProps={{ "aria-label": "controlled" }}
            />
            <Typography>Private</Typography>
          </Stack>
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
    </Container>
  );
}

export default AddList;
