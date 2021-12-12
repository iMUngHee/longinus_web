import React from "react";
import { BrowserRouter } from "react-router-dom";

// GlobalStyle
import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/Global";
import GlobalFonts from "./styles/Font";
import { lightTheme, darkTheme } from "./styles/Theme";
import { useThemeContext } from "./contexts/themeContext";

// Components
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';

const Container = styled.div`

`;

function App() {
  const { theme } = useThemeContext();
  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
          <GlobalStyles />
          <GlobalFonts />
          <Container>
            <Sidebar />
            <Header />
          </Container>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
