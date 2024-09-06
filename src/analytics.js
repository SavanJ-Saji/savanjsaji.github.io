import ReactGA from 'react-ga4';

const TRACKING_ID = "SGPRFB29JG"; // Replace with your Google Analytics tracking ID

export default function RootLayout({ children }) {
  ReactGA.initialize(TRACKING_ID);

  return (
    <html lang="en">
      <head>
        <title>Next.js</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
