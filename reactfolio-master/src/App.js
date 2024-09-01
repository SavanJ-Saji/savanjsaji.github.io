import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { ThemeProvider as StyledThemeProvider } from 'styled-components';
// import { ThemeProvider } from '@material-ui/core/styles';
import Navbar from './components/common/navBar.jsx';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ArticlesPage from './pages/ArticlesPage';
import ReadArticlePage from './pages/ReadArticlePage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/404';
import ThemeToggle from './components/Toggle';
import { ThemeProvider as AppThemeProvider, ThemeContext } from './theme-provider';
import './global.css'; // Import global CSS
import styled from 'styled-components';

const Button = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
`;

function MainComponent() {
  return <Button>Click Me</Button>;
}

const AppContent = () => {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    document.body.style.backgroundColor = theme.background;
    document.body.style.color = theme.color;
  }, [theme]);

  return (
    <div className="content">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/article/:id" element={<ReadArticlePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

const App = () => {
  return (
    <AppThemeProvider>
      <Router>
        <Navbar />
        <ThemeToggle />
        <AppContent />
        <MainComponent />
      </Router>
    </AppThemeProvider>
  );
};

export default App;
