import React, { useState } from "react";
import { ThemeProvider } from "styled-components";

import darkTheme from "../themes/dark";
import lightTheme from "../themes/light";

import Container from "./Container";
import Card from "./Card";
import Button from "./Button";
import GitHubLink from "./GitHubLink";

const App = () => {
  const stored = localStorage.getItem("isDarkMode");
  const [isDarkMode, setIsDarkMode] = useState(
    stored === "true" ? true : false
  );
  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Container>
        <Card>
          Dark Mode is {isDarkMode ? "Enabled" : "Disabled"}
          <Button
            onClick={() => {
              setIsDarkMode(!isDarkMode);
              localStorage.setItem("isDarkMode", !isDarkMode);
            }}
          >
            Toggle Dark Mode
          </Button>
        </Card>
        <GitHubLink />
      </Container>
    </ThemeProvider>
  );
};

export default App;
