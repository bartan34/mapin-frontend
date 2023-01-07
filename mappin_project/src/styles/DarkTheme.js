import { createTheme } from "@mui/material";

export const DarkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1798c7",
      contrastText: "#000000",
    },
    secondary: {
      main: "#004164",
    },
    error: {
      main: "#f7291a",
    },
    info: {
      main: "#000992",
    },
  },
  typography: {
    fontFamily: "Nunito",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
  tabs: {
    backgroundColor:"green",
    
  },
  props: {
    MuiAppBar: {
      color: "default",
    },
  },
});
