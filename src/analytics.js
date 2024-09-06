// analytics.js
import ReactGA from 'react-ga4';

export const initGA = (trackingID) => {
    // Initialize Google Analytics
    ReactGA.initialize(trackingID);
};

export const logPageView = () => {
    // Log the page view
    ReactGA.send({ hitType: "pageview", page: window.location.pathname + window.location.search });
};
