import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Sign from "./components/Sign";
import LimitedMain from "./pages/LimitedMain";
import Main from "./pages/Main";
import NotFound from "./pages/NotFound";
import SignUp from "./pages/SignUp";
import { UserProvider } from "./context/AuthContext";
import { LightTheme } from "./styles/LightTheme";
import { DarkTheme } from "./styles/DarkTheme";
import Lists from "./pages/Lists";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={DarkTheme}>
        <UserProvider>
          <Routes>
            <Route path="/" element={<Navbar />}>
              <Route path="/" element={<LimitedMain />} />
              <Route path="home" element={<Main />} />
              <Route path="lists" element={<Lists />} />
            </Route>
            <Route path="login" element={<Sign />} />
            <Route path="register" element={<SignUp />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </UserProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
