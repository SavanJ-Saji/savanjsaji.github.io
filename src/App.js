import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/homepage';
import AboutPage from './pages/about';
import ProjectsPage from './pages/projects';
import ArticlesPage from './pages/articles';
import ReadArticlePage from './pages/readArticle';
import ContactPage from './pages/contact';
import NotFoundPage from './pages/404';
import Navbar from './components/common/navBar.jsx';
import Toggle from './Toggle.js';
import { ThemeProvider, ThemeContext } from './theme-provider';
import './global.css'; // Import global CSS

const AppContent = () => {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    document.body.style.backgroundColor = theme.background;
    document.body.style.color = theme.color;
    if (theme === 'dark') {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
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
    <ThemeProvider>
      <Router>
        <Navbar />
        <Toggle />
        <AppContent />
      </Router>
    </ThemeProvider>
  );
};

export default App;
