import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/homepage';
import AboutPage from './pages/about';
import ProjectsPage from './pages/projects';
import ArticlesPage from './pages/articles';
import ReadArticlePage from './pages/readArticle';
import ContactPage from './pages/contact';
import NotFoundPage from './pages/404';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/projects" component={ProjectsPage} />
        <Route path="/articles" component={ArticlesPage} />
        <Route path="/article/:id" component={ReadArticlePage} />
        <Route path="/contact" component={ContactPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
}

export default App;
