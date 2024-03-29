import React from 'react';
import ReactDOM from 'react-dom/client'; // Import createRoot from react-dom/client
import Router from './routes.tsx';

const rootElement = document.getElementById('root');

ReactDOM.createRoot(rootElement!).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);