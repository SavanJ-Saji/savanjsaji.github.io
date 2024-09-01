import React, { useEffect, useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactGA from "react-ga4";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

import Homepage from "./pages/homepage";
import About from "./pages/about";
import Projects from "./pages/projects";
import Articles from "./pages/articles";
import ReadArticle from "./pages/readArticle";
import Contact from "./pages/contact";
import Notfound from "./pages/404";
import Navbar from "./components/Navbar"; // Import the Navbar component

import { TRACKING_ID } from "./data/tracking";
import "./app.css";
import { ThemeProvider, ThemeContext, themes } from "./src/theme-provider.js"; // Ensure the path is correct

const DarkModeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>
      {theme === themes.light ? "Switch to Dark Mode" : "Switch to Light Mode"}
    </button>
  );
};

const App = () => {
  useEffect(() => {
    ReactGA.initialize(TRACKING_ID);
    ReactGA.send("pageview");
  }, []);

  return (
    <ThemeProvider>
      <StyledThemeProvider theme={(theme) => theme}>
        <Router>
          <Navbar /> {/* Add the Navbar component */}
          <DarkModeToggle /> {/* Add the DarkModeToggle component */}
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/article/:id" element={<ReadArticle />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </Router>
      </StyledThemeProvider>
    </ThemeProvider>
  );
};

export default App;
