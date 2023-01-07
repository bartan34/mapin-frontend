import { createTheme } from "@mui/material";

export const LightTheme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#1798c7",
      contrastText: "#000000",
    },
    secondary: {
      main: "#004164",
    },
    background: {
      default: "#ffffff",
      paper: "#f0f0f0",
    },
    error: {
      main: "#f7291a",
    },
    info: {
      main: "#000992",
    },
    text: {
      primary: "#000000",
    },
  },
  typography: {
    fontFamily: "Nunito",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
  props: {
    MuiAppBar: {
      color: "default",
    },
  },
  overrides: {
    MuiButton: {
      root: {
        border: 0,
        borderRadius: 3,
        boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
        color: "white",
        height: 48,
        padding: "0 30px",
      },
    },
  },
});
