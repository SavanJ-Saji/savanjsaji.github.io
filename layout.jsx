'use client';
import { Analytics } from '@vercel/analytics/react';
 
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Next.js</title>
      </head>
      <body>
        {children}
        <Analytics mode={'production'} />;
      </body>
    </html>
  );
}
