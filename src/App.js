import React, { useContext, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/common/navBar.jsx';
import Toggle from './Toggle.js';
import { ThemeProvider, ThemeContext } from './theme-provider';
import './global.css'; // Import global CSS

// Lazy load pages
const HomePage = lazy(() => import('./pages/homepage'));
const AboutPage = lazy(() => import('./pages/about'));
const ProjectsPage = lazy(() => import('./pages/projects'));
const ArticlesPage = lazy(() => import('./pages/articles'));
const ReadArticlePage = lazy(() => import('./pages/readArticle'));
const ContactPage = lazy(() => import('./pages/contact'));
const NotFoundPage = lazy(() => import('./pages/404'));

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
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/articles" element={<ArticlesPage />} />
          <Route path="/article/:id" element={<ReadArticlePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
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
