import React, { useEffect, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import ReactGA from "react-ga4";
import styled from "styled-components";

import Homepage from "./pages/homepage";
import About from "./pages/about";
import Projects from "./pages/projects";
import Articles from "./pages/articles";
import ReadArticle from "./pages/readArticle";
import Contact from "./pages/contact";
import Notfound from "./pages/404";

import { TRACKING_ID } from "./data/tracking";
import "./app.css";
import { ThemeProvider, ThemeContext } from "./theme-provider"; // Ensure the path is correct

const DarkModeToggle = () => {
  const isDarkMode = useContext(ThemeContext); // Define the 'isDarkMode' variable using the useContext hook
  const toggleColorMode = () => {
    // Implement the toggleColorMode function if needed
  };

  return (
    <>
      <DarkModeToggle />
      <Container isDark={isDarkMode}>
        <Main>null</Main>
      </Container>
      {/* Footer component */}
      <button onClick={toggleColorMode}>
        {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
    </>
  );
};

export const Container = styled.div`
  background-color: ${({ isDark }) => (isDark ? "#222" : "#fff")};
`;

export const Main = styled.main`
  /* Add your styles for Main here */
`;
// Remove the duplicate import statement for 'React'
// Remove the declaration of ToggleButton since it is not being used

// Remove the duplicate declaration of DarkModeToggle

function App() {
  useEffect(() => {
    if (TRACKING_ID !== "") {
      ReactGA.initialize(TRACKING_ID);
    }
  }, []);

  return (
    <ThemeProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/article/:slug" element={<ReadArticle />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
