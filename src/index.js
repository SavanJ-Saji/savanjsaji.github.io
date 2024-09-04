import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initGA, logPageView } from './analytics';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import RootLayout from '../layout'; // Import the RootLayout

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RootLayout>
      <Router>
        <Route component={App} />
      </Router>
    </RootLayout>
  </React.StrictMode>
);

// Initialize Google Analytics
initGA();

const Main = () => {
    useEffect(() => {
        logPageView();
    }, []);

    return <App />;
};

// Measure performance only in development mode
if (process.env.NODE_ENV === 'development') {
  reportWebVitals(console.log);
}
