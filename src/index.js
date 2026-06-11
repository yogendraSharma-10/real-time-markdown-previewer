import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Assuming a global index.css for basic styles, or App.css for main app styles.
import App from './App';
import reportWebVitals from './reportWebVitals'; // For performance monitoring

/**
 * src/index.js
 *
 * This is the entry point for the Real-time Markdown Previewer React application.
 * It initializes the React root, renders the main App component, and sets up
 * performance monitoring.
 */

// Get the root DOM element where the React application will be mounted.
const rootElement = document.getElementById('root');

// Create a React root using ReactDOM.createRoot (for React 18+).
// This enables concurrent features and improved performance.
const root = ReactDOM.createRoot(rootElement);

// Render the main App component into the root.
// React.StrictMode is a tool for highlighting potential problems in an application.
// It activates additional checks and warnings for its descendants during development.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();