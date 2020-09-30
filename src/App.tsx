import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/globalStyle";
import { theme } from "styles/theme";
import Page from "page/page";

const App: React.FC = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Page />
      </ThemeProvider>
    </React.Fragment>
  );
};

export default App;
