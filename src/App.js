import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/homepage';
import AboutPage from './pages/about';
import ProjectsPage from './pages/projects';
import ArticlesPage from './pages/articles';
import ReadArticlePage from './pages/readArticle';
import ContactPage from './pages/contact';
import NotFoundPage from './pages/404';
import Navbar from './components/common/navBar.jsx'; // Added import statement

function App() {
  return (
    <Router>
      {/* Added Navbar component */}
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/article/:id" element={<ReadArticlePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
