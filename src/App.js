import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "./styles/Global";
import GlobalFonts from "./styles/Font";
//eslint-disable-next-line
import { lightTheme, darkTheme } from "./styles/Theme";

import DashBoard from "./pages/DashBoard";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <GlobalFonts />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashBoard />} />
          <Route path="/home" element={<DashBoard />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
