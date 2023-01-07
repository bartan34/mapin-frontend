import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import PushPinIcon from "@mui/icons-material/PushPin";
import UserContext from "../context/AuthContext";
import { Navigate } from "react-router-dom";

function Sign({ setLoginPage }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const loginData = new FormData(event.currentTarget);
  };

  const { auth, onLogin } = React.useContext(UserContext);

  return (
    <>
      {auth === true ? (
        <Navigate replace to="/home" />
      ) : (
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
            <PushPinIcon sx={{ fontSize: "40px" }} />

            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                onClick={(e) => {
                  setLoginPage(false);
                  onLogin();
                }}
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="register" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      )}
    </>
  );
}

export default Sign;
